import React, {useContext} from 'react'
import Chat from './Component/Chat'
import Navbar from './Component/Navbar'
import {chatContext} from './Context/ChatProvider'

const App = () => {

    const {datos} =  useContext(chatContext)

    return datos !== null ? (
        <div>
            <Navbar />
            {
                datos.estado ? (
                    <Chat />
                ): (
                    <div
                        className = 'lead text-center mt-5'
                    >
                        Debes iniciar sesion
                    </div>
                )
            }
        </div>
    ) : (
        <div>Cargando .... </div>
    )
}

export default App
