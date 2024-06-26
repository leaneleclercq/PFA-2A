const puppeteer = require ("puppeteer");
//import { collection, addDoc } from "firebase/firestore";
const { collection, addDoc, getFirestore } = require("firebase/firestore");
const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyByGo8uxaG60BHYAhT8q6sAKONEV_z-51k",
  authDomain: "pfa-c21.firebaseapp.com",
  projectId: "pfa-c21",
  storageBucket: "pfa-c21.appspot.com",
  messagingSenderId: "312215454950",
  appId: "1:312215454950:web:232e9c1afff43a6f012727",
  measurementId: "G-NQQ9HR9FXL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const url =
  "https://www.etreproprio.com/immobilier-19278043-vente-maison-75m-a-saint-martin-du-tertre-saint-martin-du-tertre";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1200,
    height: 10000,
  });
  await page.goto(url, { waitUntil: "networkidle2" });

  // image
  // await page.screenshot({
  //   path: "image.png",
  // });

  // get <body>
  // let bodyHTML = await page.evaluate(() => document.body.innerHTML);
  // console.log(bodyHTML);
  // div[class=card-cla-search]
   

await page.click("#btn_contact_seller");
await page.waitForSelector(".ep-contact-info-form", {visible: true});

let data = await page.evaluate(() => {
  //let userName = document.querySelector("#contact_seller_realtor_user_name").innerText;
  let leann = document.querySelector("#contact_seller_realtor_user_name").innerText;
  let parts = leann.split('Vente gérée par ');
  let userName = parts.join('');
  let coords = document.querySelector('#contact_seller_phone_cell').innerText;
  let agence = document.querySelector(".ep-name").innerText;
  return { userName, coords, agence};
});

console.log("Voici les coordonnées : ", data.coords);
console.log("Voici le nom de l'utilisateur : ", data.userName);
console.log("Voici l'agence : ", data.agence);


 const docRef = await addDoc(collection(db, "leads"), data);
 console.log("Document written with ID: ", docRef.id);

module.exports = { userName: data.userName, coords: data.coords };


//let data = await page.evaluate(() => {
//  return document.querySelector("div[id=contact_seller_realtor_user_name]").innerText, document.querySelector("div[id=contact_seller_realtor_coords]").innerText;
//});
//console.log("voici les coordonnés " + data);


/**  let newData = await data.substring(0, 4);

  if (parseInt(newData) < 2400) {
    sendNotification(newData);
  }
 

  async function sendNotification(price) {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "julien.azbrg@gmail.com",
        pass: process.env.MAIL_PASS,
      },
    });

    let info = await transporter
      .sendMail({
        from: '"PC Cdiscount" <julien.azbrg@gmail.com>',
        to: "fromscratch.frontdev@gmail.com",
        subject: "Prix sous les " + price + "€",
        html: "Le prix de la tour est de " + price + "€",
      })
      .then(() => console.log("Message envoyé"));
  }*/

})();
// export { db };

