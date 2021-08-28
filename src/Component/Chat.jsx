import React, {useContext, useRef, useEffect} from 'react'
import Agg from './Agg'

import {chatContext} from '../Context/ChatProvider'

const Chat = () => {

    const {mensajes, datos} = useContext(chatContext)
    const mandarPrincipioChat = useRef(null)

    useEffect(() => {
       mandarPrincipioChat.current.scrollTop = mandarPrincipioChat.current.scrollHeight
    }, [mensajes])

    return (
        
        <div 
            className="mt-3 px-2"
            style={
                {height: '75vh', overflowY: 'scroll'}
            }
            ref={mandarPrincipioChat}
        >

            {
                mensajes.map((dev, index) =>(

                    datos.uid === dev.uid ? (
                        <div className="d-flex justify-content-end mb-2" key={index}>
                            <span className="badge rounded-pill bg-primary">
                                {dev.texto}
                            </span>
                        </div>

                    ) : (
                        <div className="d-flex justify-content-start mb-2" key={index}>
                            <span className="badge rounded-pill bg-secondary">
                                {dev.texto}
                            </span>
                        </div>
                    )
                ))
            }
            


            <Agg />
        </div>
    )
}

export default Chat
