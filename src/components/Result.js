import React, { Component } from 'react';
import Image from './Image';
import Navegation from './Navigation';

class Result extends Component {
   
    showImages = () =>{
        //llamamos desde el componente padre lo que pasamos en la etiqueta <Result/> de su propiedad 
        console.log(this.props.images)
        //luego comprobamos si existen img si no retornamos null
        const images = this.props.images;

        if (images.length === 0) return null;

        //retornamos la respuesta 
        return(
            //para no agregar marco extra usamos el React.fragment para llamar un componente
            <React.Fragment>
                {/* <div id={result} className="col-12 p-5 p-5 row "> */}
                <div className="col-12 p-5 p-5 row ">
                    {this.props.images.map(image =>(
                        <Image 
                        key={image.id}
                        image={image}
                        />
                    ))}
                </div>
                <Navegation
                //lo traemos de Apps this.props.
                 previousPage={this.props.previousPage}
                 nextPage={this.props.nextPage}
                 page={this.props.page}
                 totalPages={this.props.totalPages}
                />
            </React.Fragment>


        )
        
    }

    render() { 
        return ( 
            //llamamos un metodo el cual se ejecutara showImages()
            <React.Fragment>
                {this.showImages()}
            </React.Fragment>
         );
    }
}
 
export default Result;