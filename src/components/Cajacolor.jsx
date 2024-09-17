import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../App.css'

const Cajacolor = ({color, borrarColor}) => {
    return (
        <div className='col-6 col-lg-4 my-2'>
        <Card>
<Card.Header>
<h6>{color} </h6>
</Card.Header>
        <Card.Body
        className='w-100 alturaColorpanel'
        style={{
            backgroundColor: color, 
        }}
        /> 
      <Card.Footer className="text-muted"> <Button variant='danger' onClick={()=> borrarColor(color)}>Borrar</Button></Card.Footer>
        </Card>
        </div>
    );
};

export default Cajacolor;