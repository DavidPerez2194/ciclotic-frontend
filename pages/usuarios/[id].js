import React, { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import axios from 'axios'
import Navbar from '../../components/navbar'
import Form from './../../components/formUser';

const Post = () => {
    const [user, setUser] = useState(undefined);
    const [message, setMessage] = useState(undefined);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (!user && id) {
            loadUser()
        }
    });

    async function loadUser() {
        const { data } = await axios.get(`http://localhost:8080/usuarios/${id}`)
        setUser(data)
        setLoading(false)
    }

    async function updateUser(e) {
        e.preventDefault()
        setLoading(true)
        const { data } = await axios.put(`http://localhost:8080/usuarios/${id}`, user)
        setUser(data)
        setMessage("Usuario actualizado correctamente.")
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
                        handleSubmit={updateUser}
                    />
                )}
            </div>
        </Fragment>
    );
};

export default Post;