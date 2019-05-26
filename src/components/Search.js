import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkValue: ''
        }
    }
    getData = (e) => {
        e.preventDefault();
        //leemos el valor
        const query = this.state.checkValue
        //console.log(termino)

        //lo pasamos por props para app.js
        this.props.dataSearch(query);

        this.setState({
            checkValue: ''
        })
    }

    handleData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.getData}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input className="form-control form-control-lg" type="text" placeholder="Busca tu imagen, ejemplo: Tecnología" name="checkValue" onChange={this.handleData} value={this.state.checkValue} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar..." />
                    </div>
                </div>
            </form>
        );
    }
}

export default Search;
