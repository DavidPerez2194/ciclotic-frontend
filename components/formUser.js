import React from 'react'

const Form = (props) => (
    <form onSubmit={props.handleSubmit}>
        {props.message && (
            <div className="alert alert-success" role="alert">
                {props.message}
            </div>
        )}
        <div class="form-group">
            <label>Nombres</label>
            <input type="text" className="form-control" placeholder="Nombres" value={props.user.nombres} name='nombres' onChange={props.handleChange} />
        </div>
        <div class="form-group">
            <label>Apellidos1</label>
            <input type="text" className="form-control" placeholder="Apellidos1" value={props.user.apellido1} name='apellido1' onChange={props.handleChange} />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
)

export default Form