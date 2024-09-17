import Card from 'react-bootstrap/Card';

const Cajacolor = (arrayColores) => {
    return (
        <>
        <Card>
<Card.Header>

</Card.Header>
        <Card.Body>
            <div className='mt-4 border border-1 border-black w-100'
        style={{

            backgroundColor: color, 
        }}
        />
        </Card.Body>
      <Card.Footer className="text-muted"> <Button variant='danger' onClick={()=> borrarColor()}>borrar</Button></Card.Footer>
        </Card>
        </>
    );
};

export default Cajacolor;