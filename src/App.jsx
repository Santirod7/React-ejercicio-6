import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Carouselinicial from './components/Carouselinicial.jsx'
import Formulario from './components/Formulario.jsx'

function App() {
  return (
    <>
    <main>
    <Carouselinicial></Carouselinicial>
    <h1 className='text-center text-light fw-bolder mt-3'>La paleta de tus sueños</h1>
    <h5 className='text-center text-light'>Selecciona el color para agregar a la paleta</h5>
    <div className='bg-light container'>
    <Formulario></Formulario>
    </div>
    </main>
    </>
  )
}

export default App
