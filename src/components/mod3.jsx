import react from 'react' ;

function Tarjeta(props) {
    return (
        <div className='contenedor-tarjeta'>
            <div className='contenedor-tarjeta-texto'>
                <p className='lugar'>ciudad: {props.lugar}</p>
                <p className='latitud'>latitud: {props.latitud}</p>
                <p className='longitud'>longitud: {props.longitud}</p>
                <p className='temperatura'>temperatura: {props.temperatura}</p>
                <p className='velocidad-viento'>velocidad del viento: {props.velocidad-viento}</p>

            </div>

        </div>
 
    );
}

export default Tarjeta