import React from 'react'
import './contato.scss'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'



export default function Contato() {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")


  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
  };


  const handleClick=(e)=> {
    e.preventDefault()
    const lead = {nome, email, mensagem}
    console.log(lead)
    fetch("http://localhost:8080/api/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(lead)
    }).then(()=> {
      console.log("lead adicionado")
    })
  }



  return (
    <div className='contato'>
            <div className="title">
                <h2>Entre em Contato</h2>
                <h3>mande uma mensagem para nós que um de nossos representantes comerciais entrará em contato</h3>
            </div>

            <div className="forms">

              <form noValidate autoComplete='off' onSubmit={onSubmit}>

                  <TextField id="standard-basic" className='standard-basic' label="Seu nome completo" variant='outlined' value={nome} 
                  onChange={
                    (e)=>setNome(e.target.value)} 
                  />

                  <TextField id="standard-basic-email" className='standard-basic' label="Seu email" variant='outlined' value={email} 
                  onChange={
                    (e)=>setEmail(e.target.value)} />

                  <TextField id="standard-basic-2" className='standard-basic-box' label="Mensagem" variant='outlined' value={mensagem} 
                  onChange={
                    (e)=>setMensagem(e.target.value)} />

                  <Button variant='contained' className='btn' onClick={handleClick} type="submit" alt="botão para enviar formulário">
                    Enviar
                  </Button>

              </form>
            
            </div>
    </div>
  )
}
