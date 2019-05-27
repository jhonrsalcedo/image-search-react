import React, { Component } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Result from './components/Result';
import './App.css';



class Apps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      images: [],
      page: '',
      loading: false,
      totalPages: ''
    }
  }

  //Metodo para realizar la consulta del api img
  queryApi = async () => {
    //comprobar que esta funcionando el callback
    //console.log("desde consultar api");

    //llamamos al dato de busqueda este viene del state
    //lo guardamos en una variable, podemos utilizar el mismo nombre
    const query = this.state.query;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=12592538-85b554429303781a885b89c56&q=${query}&per_page=30&page=${page}`;
    //comprobamos que image se esta pasando el url 
    //console.log(url)

    //realizamos la consulta con axios 
    try {
      const response = await axios.get(url);
      //para comprabar que estamos recibiendo bien los datos de la Api ejecutiamos un console.log()
      //console.log(response.data.hits) 
      this.setState({
        loading: true
      });

      //comprobar paginacion 
      console.log(response.data.totalHits)
      const totalPages = Math.ceil(response.data.totalHits / 30);
      //console.log(Math.ceil(response.totaPages / 30) )

      //luego de pasarla al state podemos tomar images y pasarla por otro componente, este servira para dibujar en pantalla lo que estamos buscando.
      setTimeout(() => {
        this.setState({
          images: response.data.hits,
          loading: false,
          totalPages: totalPages
        })
      }, 1000);

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
      query: query,
      page: 1
    }, () => {
      this.queryApi()
    })
  }

  //para la paginacion utilizamos dos metodos nextPage y previousPage
  previousPage = () => {
    //comprobamos si se pasan bien por el componente de Result
    //console.log('pagina anterior...')

    let page = this.state.page;
    //si es la pagina 1, ya no podemos retroceder
    if (page === 1) return null;

    //restar a la pagina actual
    page -= 1;

    //lo subimos al state tambien llamaos por callback la consulta del api
    this.setState({
      page
    }, () => {
      this.queryApi();
      this.scroll();
    })
    //console.log(page)
  }

  nextPage = () => {
    //comprobamos si se pasan bien por el componente de Result
    //console.log('pagina siguiente...')
    let page = this.state.page;
    //vamos sumando a la pagina actual de 1+1
    page += 1;

    //lo subimos al state
    this.setState({
      page
    }, () => {
      this.queryApi();
      this.scroll();
    })
    //console.log(page)
  }

  scroll = () => {
    //dos formas de volver al inicio 

    const element = document.querySelector('.jumbotron');
    //const element = document.querySelector('#result');
    element.scrollIntoView('smooth', 'start');
  }

  render() {
    const loading = this.state.loading;
    let result;
    if (loading) {
      result = <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    } else {
      result = <Result
        images={this.state.images}
        previousPage={this.previousPage}
        nextPage={this.nextPage}
        page={this.state.page}
        totalPages={this.state.totalPages}
      />
    }
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center"><b>Buscador de Imágenes</b></p>
          <Search
            dataSearch={this.dataSearch}
          />
        </div>
        <div className="row justify-content-center">
          {result}
        </div>

      </div>
    );
  }
}

export default Apps;