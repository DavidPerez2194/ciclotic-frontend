import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import axios from 'axios'
import Navbar from '../../components/navbar'
import Link from 'next/link';

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            puntos: [],
            loading: true
        }
    }
    componentDidMount() {
        this.getPuntos()
    }

    async getPuntos() {
        const { data: puntos } = await axios.get("http://localhost:8080/puntos")
        this.setState({ puntos, loading: false })
    }

    async detelePunto(id) {
        const confirm = window.confirm("Deseas eliminar el punto?")
        if (confirm) {
            this.setState({ loading: true })
            const { data } = await axios.delete(`http://localhost:8080/puntos/${id}`)
            console.log(data)
            this.getPuntos()
        }
    }

    render() {
        const { puntos, loading } = this.state
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
                    <h1>Puntos
                        <Link href="/puntos/crear">
                            <button className="btn btn-sm btn-primary ml-1">Añadir</button>
                        </Link>
                    </h1>
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
                                    <th scope="col">nombre</th>
                                    <th scope="col">direccion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {puntos.map(punto => (
                                    <tr>
                                        <td>{punto.nombre}</td>
                                        <td>{punto.direccion}</td>
                                        <td>
                                            <Link href={`/puntos/${punto._id}`}>
                                                <a className="btn btn-primary btn-sm mr-1">Editar</a>
                                            </Link>
                                            <button className="btn btn-danger btn-sm" onClick={() => this.detelePunto(punto._id)}>Eliminar</button>
                                        </td>
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