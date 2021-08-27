import React, {createContext, useState, useEffect} from 'react'
import {db, auth, provider} from '../Firebase'

export const chatContext = createContext()


const ChatProvider = (props) => {


   const data = {
       uid: null,
       email: null, 
       estado: null
   }

   const [datos, setDatos] = useState(data)

   useEffect(() => {
    detectarUsuario()
   }, [])


   const detectarUsuario = () => {
       auth.onAuthStateChanged(user =>{
           if(user){
               setDatos({uid: user.uid, email: user.email, estado: true})
           }else{
               setDatos({uid: null, email: null, estado: false})
           }
       })
   }

   const ingresoUsuario = async() =>{
       try {
           await auth.signInWithPopup(provider)
       } catch (error) {
           console.log(error)
       }
   }


   const cerrarSesion = () =>{
       auth.signOut()
   }


    return (
        <chatContext.Provider value={{datos, ingresoUsuario, cerrarSesion}}>
            {props.children}
        </chatContext.Provider>
    )
}

export default ChatProvider
