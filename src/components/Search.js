import React, { Component } from 'react';

class Search extends Component {
        constructor(props){
            super(props);
            this.state={
                searchValue:''
            }
        }
    getData = (e) =>{
        e.preventDefault();
        //leemos el valor
        const termino = this.state.searchValue
        console.log(termino)

        this.setState({
            searchValue:''
        })
    }

    handleData = (e) =>{
       this.setState({
        [e.target.name]: e.target.value
       })
    }

    render() {
        return (
            <form onSubmit={this.getData}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input className="form-control form-control-lg" type="text" placeholder="Busca tu imagen, ejemplo: Tecnología" name="searchValue" onChange={this.handleData} value={this.state.searchValue} />
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
