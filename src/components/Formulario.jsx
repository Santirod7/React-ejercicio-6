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

  const onSubmit = (data) => {
console.log(data);
setArrayColores ([...arrayColores, data.color])
reset()
  }
    
    return (
        <section className='container '>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-1" >
        <Form.Label className='fw-bolder mb-0'>Color</Form.Label>
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
         })} placeholder="Agrega lo que quieres realizar" />
    </Form.Group>
        <div className='d-flex justify-content-center'>
      <Button variant="primary" className='text-center mb-5 border border-2 border-black' type="submit" >
        Añadir a paleta
      </Button>
        </div>
    </Form>
    <Paneldecolores arrayColores={arrayColores} borrarColor={borrarColor}></Paneldecolores>
        </section>

    );
 };

export default Formulario;