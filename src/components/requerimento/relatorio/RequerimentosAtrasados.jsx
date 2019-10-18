import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

class RelatorioEmAtraso extends Component {

    handleClick = () => {
        this.props.history.push("/requerimentos");
        // this.context.router.history.push(`/target`);
    }

    render(){
        return (
        <React.Fragment>
        <h2>Requerimentos com atendimento em atraso</h2>
        <div className="row my-1 align-items-center">
            <div className="col-1 mr-1">
                <span>Procuradoria:</span>
            </div>
            <div className="col-9">
                <select id="procurodoria" className="">
                    <option value="t" selected>Todas</option>
                    <option value="1">Brasilia</option>
                    <option value="1010">PGFN 1</option>
                    <option value="1011">Valor 2</option>
                    <option value="1012">Valor 3</option>
                    <option value="1013">Valor 3</option>
                    <option value="1014">Valor 3</option>
                    <option value="1015">Valor 3</option>
                </select>
            </div>
            <div className="col-1">
                <Link className="badge badge-secondary" to="/procuradorias">
                    Visão por procuradorias
                </Link>
            </div>
        </div>
        <table className="table table-striped table-hover">
            <caption>Ordenados pela situação de atraso</caption>
            <thead class="thead-light">
                <tr>
                    <th scope="col">Total</th>
                    <th scope="col">Situação</th>
                </tr>
            </thead>
            <tbody>
                <tr onClick={this.handleClick}>
                    <td>75</td>
                    <td>até três meses</td>
                </tr>
                <tr onClick={this.handleClick}>
                    <td>50</td>
                    <td>até seis meses</td>
                </tr>
                <tr onClick={this.handleClick}>
                    <td>85</td>
                    <td>até nove meses</td>
                </tr>
            </tbody>
        </table>
        </React.Fragment>
    )}
}

export default withRouter(RelatorioEmAtraso);