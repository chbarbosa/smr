import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class RelatorioEmAtraso extends Component {


    handleClick = () => {
        this.props.history.push("/requerimentos");
        // this.context.router.history.push(`/target`);
    }



    render(){
        return (
        <React.Fragment>
        <h2>Requerimentos com atendimento em atraso</h2>
        <table className="table table-striped table-hover">
            <caption>Requerimentos ordenados por situação de atraso</caption>
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
                <tr>
                    <td>50</td>
                    <td>até seis meses</td>
                </tr>
                <tr>
                    <td>35</td>
                    <td>até nove meses</td>
                </tr>
            </tbody>
        </table>
        </React.Fragment>
    )}
}

export default withRouter(RelatorioEmAtraso);