import React from 'react'
import Link from 'next/link';

const Navbar = () => (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">Ciclo Tic</h5>
        <nav className="my-2 my-md-0 mr-md-3">
            <Link href="/usuarios">
                <a className="p-2 text-dark">Usuarios</a>
            </Link>
            <Link href="/bicicletas">
                <a className="p-2 text-dark">Bicicletas</a>
            </Link>
            <Link href="/puntos">
                <a className="p-2 text-dark">Puntos</a>
            </Link>
        </nav>
        <Link href="/reservas">
            <a className="btn btn-outline-primary">Reservas</a>
        </Link>
    </div>
)

export default Navbar