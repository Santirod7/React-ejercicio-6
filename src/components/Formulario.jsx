import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Paneldecolores from './Paneldecolores'
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';



const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()
  const leerLocal = JSON.parse(localStorage.getItem('listadeColoreskey'))|| [];
  const [arrayColores, setArrayColores]=useState(leerLocal)

  useEffect(()=>{
localStorage.setItem('listadeColoreskey', JSON.stringify(arrayColores))
  }, [arrayColores])

  const borrarColor = (nombrecajacolor)=> {
const arrayFiltrado = arrayColores.filter((elementocolor)=> elementocolor!==nombrecajacolor)
setArrayColores(arrayFiltrado)
  }
  const [color, setColor] = useState('#ffffff'); // Valor inicial blanco

  const handleColorChange = (e) => {
    setColor(e.target.value); // Actualiza el estado con el valor del input
  };

  const onSubmit = (data) => {
console.log(data);
setArrayColores ([...arrayColores, data.color])
reset()
  }
    
    return (
        <section className='container '>
            <div className='row justify-content-between'>
    <Form className='col-5 border border-2 border-end' onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-1" >
        <div className='d-flex justify-content-center'>
      <div className='mt-4 border border-1 border-black'
        style={{
            width: '200px',
            height: '200px',
            backgroundColor: color, 
        }}
        />
        </div>
        <Form.Text className="d-flex mb-2 text-muted">
          {errors.color?.message}
        </Form.Text>
        <Form.Control type="text" {...register('color',{
        required: "Campo obligatorio",
        minLength: {
          value:3,
          message: "El campo debe tener minimo 2 carácteres"
        },
        maxLength: {
          value:20,
          message: "El campo debe tener máximo 20 carácteres"
        }
         })} value={color}
         onChange={handleColorChange}
         placeholder="#FF5733" />
    </Form.Group>
        <div className='d-flex justify-content-center'>
      <Button variant="primary" className='text-center my-2 border border-1 border-black' type="submit" >
        Añadir a paleta
      </Button>
        </div>
    </Form> 
    <div className='col-7 border border-2'>
    <Paneldecolores arrayColores={arrayColores} borrarColor={borrarColor}></Paneldecolores>
    </div>
    </div>
        </section>

    );
 };

export default Formulario;