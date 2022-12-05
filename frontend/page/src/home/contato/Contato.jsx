import React from 'react'
import './contato.scss'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'



export default function Contato() {


  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [ddd, setDDD] = useState("")
  const [telefone, setTelefone] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
  };



  return (
    <div className='contato'>
            <div className="title">
                <h2>Entre em Contato</h2>
                <h3>mande uma mensagem para nós que um de nossos representantes comerciais entrará em contato</h3>
            </div>

            <div className="forms">

              

            </div>
    </div>
  )
}
