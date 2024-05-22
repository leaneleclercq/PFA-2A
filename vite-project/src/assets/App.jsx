import Home from '../pages/home'

function App() {
  (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'*'} element={<>Erreur 404</>} />
      </Routes>
    </div>
  )
} 

export default App;