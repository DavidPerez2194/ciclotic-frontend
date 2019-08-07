import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import axios from 'axios'
import Navbar from '../../components/navbar'
import Link from 'next/link';

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            loading: true
        }
    }
    componentDidMount() {
        this.getUsers()
    }

    async getUsers() {
        const { data: users } = await axios.get("http://localhost:8080/usuarios")
        this.setState({ users, loading: false })
    }

    async deteleUser(id) {
        const confirm = window.confirm("Deseas eliminar el usuario?")
        if (confirm) {
            this.setState({ loading: true })
            const { data } = await axios.delete(`http://localhost:8080/usuarios/${id}`)
            console.log(data)
            this.getUsers()
        }
    }

    render() {
        const { users, loading } = this.state
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
                    <h1>Usuarios
                    <Link href="/usuarios/crear">
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
                                    <th scope="col">nombres</th>
                                    <th scope="col">apellido1</th>
                                    <th scope="col">telefono</th>
                                    <th scope="col">email</th>
                                    <th scope="col">Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr>
                                        <td>{user.nombres}</td>
                                        <td>{user.apellido1}</td>
                                        <td>{user.telefono}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <Link href={`/usuarios/${user._id}`}>
                                                <a className="btn btn-primary btn-sm mr-1">Editar</a>
                                            </Link>
                                            <button className="btn btn-danger btn-sm" onClick={() => this.deteleUser(user._id)}>Eliminar</button>
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