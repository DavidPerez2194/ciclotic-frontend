import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import axios from 'axios'
import Navbar from '../../components/navbar'
import Link from 'next/link';

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bicicletas: [],
            loading: true
        }
    }
    componentDidMount() {
        this.getBicicletas()
    }

    async getBicicletas() {
        const { data: bicicletas } = await axios.get("http://localhost:8080/bicicletas")
        this.setState({ bicicletas, loading: false })
    }

    async deteleBicicleta(id) {
        const confirm = window.confirm("Deseas eliminar la bicicleta?")
        if (confirm) {
            this.setState({ loading: true })
            const { data } = await axios.delete(`http://localhost:8080/bicicletas/${id}`)
            console.log(data)
            this.getBicicletas()
        }
    }

    render() {
        const { bicicletas, loading } = this.state
        return (
            <Fragment>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossorigin="anonymous"
                    />
                </Head>
                <Navbar />
                <div className="container">
                    <h1>bicicletas</h1>
                    {loading && (
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="spinner-grow text-primary" role="status">
                                <span className="sr-only" />
                            </div>
                            <span className="text-primary">Cargando datos ...</span>
                        </div>
                    )}
                    {!loading && (
                        <table className="table">
                            <thead className="thead-primary">
                                <tr>
                                    <th scope="col">Marca</th>
                                    <th scope="col">Color</th>
                                    <th scope="col">Numero de Marco</th>
                                    <th scope="col">Punto Actual</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bicicletas.map(bicicleta => (
                                    <tr>
                                        <td>{bicicleta.marca}</td>
                                        <td>{bicicleta.color}</td>
                                        <td>{bicicleta.Nromarco}</td>
                                        <td>{bicicleta.punto.nombre} - {bicicleta.punto.direccion}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </Fragment>
        )
    }
}

export default Index