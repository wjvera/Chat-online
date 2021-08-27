import React from 'react'
import Agg from './Agg'

const Chat = () => {
    return (
        <div className="mt-3 px-2 border">
            <div className="d-flex justify-content-end mb-2">
                <span className="badge rounded-pill bg-primary">
                    Mensaje mio
                </span>
            </div>

            <div className="d-flex justify-content-start mb-2">
                <span className="badge rounded-pill bg-secondary">
                    Mensaje tuyo
                </span>
            </div>

            <Agg />
        </div>
    )
}

export default Chat
