import React from 'react'

import { Link } from 'react-router-dom'

export default props =>
    <div class="container mt-5">
        <h2>Lista de Requerimentos em atraso de seis meses</h2>
        <table className="table table-striped table-hover">
            <caption>Requerimentos ordenados por procuradoria</caption>
            <thead class="thead-light">
                <tr>
                    <th scope="col">Número</th>
                    <th scope="col">Situação</th>
                    <th scope="col">Data de Abertura</th>
                    <th scope="col">Data da útilma Alteração</th>
                    <th scope="col">Dias em Atraso </th>
                    <th scope="col">Procuradoria</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>20190000017</td>
                    <td>Recebido na Procuradoria</td>
                    <td>09/05/2019</td>
                    <td>06/06/2019</td>
                    <td>70</td>
                    <td>PRFN3 (Sede)</td>
                </tr>
                <tr>
                    <td>20190000018</td>
                    <td>Recebido na Procuradoria</td>
                    <td>09/05/2019</td>
                    <td>06/06/2019</td>
                    <td>70</td>
                    <td>PRFN3 (Sede)</td>
                </tr>
                <tr>
                    <td>20190000019</td>
                    <td>Recebido na Procuradoria</td>
                    <td>09/05/2019</td>
                    <td>06/06/2019</td>
                    <td>70</td>
                    <td>PRFN3 (Sede)</td>
                </tr>
                <tr>
                    <td>20190000020</td>
                    <td>Recebido na Procuradoria</td>
                    <td>09/05/2019</td>
                    <td>06/06/2019</td>
                    <td>70</td>
                    <td>PRFN3 (Sede)</td>
                </tr>
                <tr>
                    <td>20190000021</td>
                    <td>Recebido na Procuradoria</td>
                    <td>09/06/2019</td>
                    <td>16/06/2019</td>
                    <td>60</td>
                    <td>Brasília</td>
                </tr>
                <tr>
                    <td>20190000107</td>
                    <td>Distribuído</td>
                    <td>19/05/2019</td>
                    <td>06/06/2019</td>
                    <td>40</td>
                    <td>Ceará</td>
                </tr>
            </tbody>

        </table>
        <div className="row justify-content-center">
            <Link className="btn btn-secondary" to="/">
                voltar
            </Link>
        </div>
    </div>