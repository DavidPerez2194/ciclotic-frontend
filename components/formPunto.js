import React from 'react'

const Form = (props) => (
    <form onSubmit={props.handleSubmit}>
        {props.message && (
            <div className="alert alert-success" role="alert">
                {props.message}
            </div>
        )}
        <div class="form-group">
            <label>Nombre</label>
            <input type="text" className="form-control" placeholder="Nombres" value={props.punto.nombre} name='nombre' onChange={props.handleChange} />
        </div>
        <div class="form-group">
            <label>Direccion</label>
            <input type="text" className="form-control" placeholder="Direccion" value={props.punto.direccion} name='direccion' onChange={props.handleChange} />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
)

export default Form