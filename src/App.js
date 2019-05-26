import React, { Component } from 'react';
import Search from './components/Search';


class Apps extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center"><b>Buscador de Imágenes</b></p>
          <Search />
        </div>


      </div>
    );
  }
}

export default Apps;