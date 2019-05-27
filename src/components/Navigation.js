import React from 'react';

const Navegation = (props) => {
    return ( 
        <div className="py-5">
            <button onClick={props.previousPage} type="button" className="btn btn-info mr-1"> &larr; Anterior </button>
            <button onClick={props.nextPage} type="button" className="btn btn-info mr-1">Siguiente &rarr;</button>
        </div>
     );
}
 
export default Navegation;