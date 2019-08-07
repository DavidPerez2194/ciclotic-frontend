import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import Navbar from '../components/navbar'

const Index = () => (
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
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4">Bienvenido a nuestra plataforma</h1>
            <p className="lead">Administra tus bicicletas</p>
        </div>
    </Fragment>
)

export default Index