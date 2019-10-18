import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

class ProcuradoriasComAtrasos extends Component {

    handleClick = () => {
        this.props.history.push("/");
    }

    render() {
        return (
            <div class="container mt-5">
                <h2>Procuradorias com atendimento em atraso</h2>
                <table className="table table-striped table-hover">
                    <caption>Procuradorias ordenadas por quantidade de requerimentos</caption>
                    <thead class="thead-light">
                        <tr>
                            <th scope="col" className="col-9">Procuradoria</th>
                            <th scope="col" className="text-center">Qtd de Requerimentos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr onClick={this.handleClick}>
                            <td>Brasília</td>
                            <td className="text-center">225</td>
                        </tr>
                        <tr onClick={this.handleClick}>
                            <td>PGFN (Primeira)</td>
                            <td className="text-center">125</td>
                        </tr>
                        <tr onClick={this.handleClick}>
                            <td>São Paulo</td>
                            <td className="text-center">75</td>
                        </tr>
                        <tr onClick={this.handleClick}>
                            <td>Paraná</td>
                            <td className="text-center">50</td>
                        </tr>
                        <tr onClick={this.handleClick}>
                            <td>Ceará</td>
                            <td className="text-center">20</td>
                        </tr>
                    </tbody>
                </table>
                <div className="row justify-content-center">
                    <Link className="btn btn-secondary" to="/">
                        voltar
                    </Link>
                </div>
            </div>
        )
    }

}

export default withRouter(ProcuradoriasComAtrasos);