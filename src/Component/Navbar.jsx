import React, {useContext} from 'react'

import {chatContext} from '../Context/ChatProvider'

const Navbar = () => {

    const {datos, ingresoUsuario, cerrarSesion} = useContext(chatContext)

    return (
        <nav className = "navbar navbar-dark bg-dark">
            <span className="navbar-brand">
                chat
            </span>

            <div>
                {
                    datos.estado ? (
                        <button 
                            className="btn btn-outline-danger my-2 mx-4"
                            onClick = {cerrarSesion}
                        >
                            Cerrar sesion
                        </button>
                    ):(
                        <button 
                            className="btn btn-outline-success my-2 mx-4"
                            onClick = {ingresoUsuario}
                        >
                            Acceder
                        </button>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar
