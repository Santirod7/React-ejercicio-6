import Cajacolor from './Cajacolor';
import CardGroup from 'react-bootstrap/CardGroup';
const Paneldecolores = ({arrayColores, borrarColor}) => {
    
    return (
        <article>
                <h4 className='text-center fw-bold my-1'>Paleta de colores</h4>
            <CardGroup>
                <div className='row w-100'>
                { 
            arrayColores.map((elementocolor, indice)=><Cajacolor className='col-4 mt-2' key={indice} color={elementocolor} borrarColor={borrarColor}></Cajacolor>)
        }
        </div>
            </CardGroup>
        </article>
    );
};

export default Paneldecolores;