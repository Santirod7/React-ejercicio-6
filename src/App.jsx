import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Carouselinicial from './components/Carouselinicial.jsx'
import Formulario from './components/Formulario.jsx'
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <>
    <main>
    <Carouselinicial></Carouselinicial>
    <h1 className='text-center text-light fw-bolder mt-3'>La paleta de tus sueños</h1>
    <h5 className='text-center text-light'>Selecciona el color para agregar a la paleta</h5>
    <div className='bg-light container'>
    
    </div>
    <Card className="text-center container my-4 px-0">
      <Card.Header className='bg-info'>Administrador color</Card.Header>
      <Card.Body>
      <Formulario></Formulario>
      </Card.Body>
    </Card>
    </main>
    </>
  )
}

export default App
