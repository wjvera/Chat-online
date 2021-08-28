import React, {useContext, useState} from 'react'

import {chatContext} from '../Context/ChatProvider'

const Agg = () => {

    const {agregarMensajes, datos} = useContext(chatContext)

    const [mensaje, setMensaje] = useState('')

    const agregar = (e) =>{
        e.preventDefault()
        if(!mensaje.trim()){
            console.log('mensaje vacio')
            return
        }
        agregarMensajes(datos.uid, mensaje)
        setMensaje('')
    }

    return (
        <form 
            className="fixed-bottom input-group p-3 bg-dark"
            onSubmit = {agregar}
        >

            <input 
                type="text"
                className="form-control"
                value = {mensaje}
                onChange = {e => setMensaje(e.target.value)}
            /> 

            <div className="input-group-append">
                   <button
                        className="btn btn-primary"
                        type="submit"
                    >
                        Enviar
                    </button> 
            </div>
           
        </form>    
    )
}

export default Agg
