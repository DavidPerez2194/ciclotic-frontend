import React, { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import axios from 'axios'
import Navbar from '../../components/navbar'
import Form from './../../components/formUser';

const Post = () => {
    const [user, setUser] = useState({});
    const [message, setMessage] = useState(undefined);
    const [loading, setLoading] = useState(false);

    async function saveUser(e) {
        e.preventDefault()
        setLoading(true)
        const { data } = await axios.post('http://localhost:8080/usuarios', user)
        setUser({data})
        setMessage("Usuario creado correctamente.")
        setLoading(false)
    }

    function handleChange(e) {
        const { name, value } = e.target
        user[name] = value
        setUser(user)
    }

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
                <h1>Usuarios</h1>
                {loading && (
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="spinner-grow text-primary" role="status">
                            <span className="sr-only" />
                        </div>
                        <span className="text-primary">Cargando datos ...</span>
                    </div>
                )}
                {!loading && (
                    <Form
                        user={user}
                        message={message}
                        handleChange={handleChange}
                        handleSubmit={saveUser}
                    />
                )}
            </div>
        </Fragment>
    );
};

export default Post;