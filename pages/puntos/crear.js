import React, { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import axios from 'axios'
import Navbar from '../../components/navbar'
import Form from '../../components/formPunto';

const Post = () => {
    const [punto, setPunto] = useState({});
    const [message, setMessage] = useState(undefined);
    const [loading, setLoading] = useState(false);

    async function savePunto(e) {
        e.preventDefault()
        setLoading(true)
        const { data } = await axios.post('http://localhost:8080/puntos', punto)
        setPunto({data})
        setMessage("Punto creado correctamente.")
        setLoading(false)
    }

    function handleChange(e) {
        const { name, value } = e.target
        punto[name] = value
        setPunto(punto)
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
                <h1>Crear Punto</h1>
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
                        punto={punto}
                        message={message}
                        handleChange={handleChange}
                        handleSubmit={savePunto}
                    />
                )}
            </div>
        </Fragment>
    );
};

export default Post;