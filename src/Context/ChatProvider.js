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

   const [mensajes,  setMensajes] = useState([])

   useEffect(() => {
    detectarUsuario()
    // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])


   const detectarUsuario = () => {
       auth.onAuthStateChanged(user =>{
           if(user){
               setDatos({uid: user.uid, email: user.email, estado: true})
               cargarMensajes()
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

   const cargarMensajes = () =>{
       db.collection('chat').orderBy('fecha')
            .onSnapshot(query =>{
                const arrayMensajes = query.docs.map(dev => dev.data())
                setMensajes(arrayMensajes)
            })
   }   

   const agregarMensajes = async(uidFlecha, textoFlecha) =>{
       try {
           await db.collection('chat').add({
               fecha: Date.now(),
               texto: textoFlecha,
               uid: uidFlecha
           })
       } catch (error) {
           console.log(error)
       }
   }

    return (
        <chatContext.Provider value={{
            datos, 
            ingresoUsuario, 
            cerrarSesion, 
            mensajes,
            agregarMensajes
        }}>
            {props.children}
        </chatContext.Provider>
    )
}

export default ChatProvider
