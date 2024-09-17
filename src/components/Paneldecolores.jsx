import Card from 'react-bootstrap/Card';
import Cajacolor from './Cajacolor';
import CardGroup from 'react-bootstrap/CardGroup';
const Paneldecolores = (arrayColores, borrarColor) => {
    
    return (
        <article>
            <CardGroup>

          <Card className="text-center">
      
        <Cajacolor arrayColores={arrayColores} ></Cajacolor>
     
    </Card>  
            </CardGroup>
        </article>
    );
};

export default Paneldecolores;