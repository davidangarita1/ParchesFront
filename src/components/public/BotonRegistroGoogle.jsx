import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import GoogleIcon from '@mui/icons-material/Google'
import { useDispatch } from 'react-redux'
import { google, app } from '../../services/firebase'

import { crearUsuario } from '../../redux/middlewares/crearUsuario'
import useStyles from '../../utils/materialStyles'
import { useNavigate } from 'react-router-dom'

export default function BotonInicioGoogle() {
  const auth = app.auth()
  const dispatch = useDispatch()
  // const [usuario] = useAuthState(auth);

  const navigate = useNavigate()
  const classes = useStyles()

  function IniciarSesion() {
    auth.signInWithPopup(google)
    // dispatch(iniciarSesion(email, uid));
  }

  const handler = () =>{
    auth.signOut()
  }

  useEffect(() => {
    app.auth().onAuthStateChanged((usuario) => {
      if (usuario) {
        const uid = usuario.multiFactor.user.uid
        const email = usuario.multiFactor.user.email
        const nombres = usuario.multiFactor.user.displayName
        const imagenUrl = usuario.multiFactor.user.photoURL
        dispatch(crearUsuario(uid, email, nombres, imagenUrl))
        navigate('/private')
      }
    })
  }, [])

  return (
    <>
    <Button
      className={classes.root}
      variant='contained'
      color='primary'
      startIcon={<GoogleIcon />}
      onClick={IniciarSesion}
    >
      Ingresar con google
    </Button>
    </>
  )
}
