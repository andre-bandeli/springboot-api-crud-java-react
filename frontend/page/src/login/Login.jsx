import React from 'react'
import Navbar from '../components/Nav/Navbar'
import './login.scss'

export default function Login() {
  return (
    <div className='login'>
        <Navbar/>

        <div className="container-text">
            <h1>Faça login para acessar a área de clientes.</h1>
            <h2>Caso não tenha uma, considere criar uma para ficar por dentro de todas as novidades.</h2>
        </div>
        <div className="container-forms">
          <div className="title">
            <h1>Login</h1>
            <h2>Cadastrar-se</h2>
          </div>
        </div>
    </div>
  )
}
