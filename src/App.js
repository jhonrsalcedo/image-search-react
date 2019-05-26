import React, { Component } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Result from './components/Result';



class Apps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      images:[]
    }
  }

  //Metodo para realizar la consulta del api img
  checkApi = async() => {
    //comprobar que esta funcionando el callback
    //console.log("desde consultar api");

    //llamamos al dato de busqueda este viene del state
    //lo guardamos en una variable, podemos utilizar el mismo nombre
    const query = this.state.query;
    const url = `https://pixabay.com/api/?key=12592538-85b554429303781a885b89c56&q=${query}&per_page=30`;
    //comprobamos que image se esta pasando el url 
    //console.log(url)

    //realizamos la consulta con axios 
    try {
      const response = await axios.get(url);
      //para comprabar que estamos recibiendo bien los datos de la Api ejecutiamos un console.log()
      //console.log(response.data.hits) 

      //luego de pasarla al state podemos tomar images y pasarla por otro componente, este servira para dibujar en pantalla lo que estamos buscando.
      this.setState({
        images: response.data.hits
      })
    } catch (error) {
      console.error(`Hay un error ${error}`)

    }

  }

  //metodo para traer los datos del formulario
  dataSearch = (query) => {
    //comprobar que se esta pasando por state
    //console.log(image)

    //lo pasamos al state de Apps
    //utilizamos un callback (checkApi) este se ejecutara despues de que suba los datos al state
    this.setState({
      query
    }, () =>{
      this.checkApi()
    } )
  }
  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center"><b>Buscador de Imágenes</b></p>
          <Search
            dataSearch={this.dataSearch}
          />
        </div>
      <div className="row">
        <Result
            images={this.state.images}
        />
      </div>

      </div>
    );
  }
}

export default Apps;