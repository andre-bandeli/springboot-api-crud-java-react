import React from 'react'
import './home.scss'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'

export default function Home() {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [ddd, setDDD] = useState("")
  const [telefone, setTelefone] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
  };


  const handleClick=(e)=> {
    e.preventDefault()
    const lead = {nome, email, ddd, telefone}
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
    <div className='home'>
        <div className="container">
          <div className="container-md-6">
            <h2>GOSTOU DE ALGUM <span>MODELO?</span></h2>
            <h3>SOLICITE UM ORÇAMENTO</h3>
            <h4>Registre seus dados que um representante entrará em contato</h4>
          </div>
          <div className="container-md-6-forms">
            <div className="forms">

              <form noValidate autoComplete='off' onSubmit={onSubmit}>

                <h2>Nome completo</h2>
                <TextField id="standard-basic" className='standard-basic' label="Seu nome completo" variant='outlined' value={nome} 
                onChange={
                  (e)=>setNome(e.target.value)} 
                />

                <h2>Email</h2>
                <TextField id="standard-basic" className='standard-basic' label="Seu email" variant='outlined' value={email} 
                onChange={
                  (e)=>setEmail(e.target.value)} />

                <div className="tel">
                  <h2>DDD</h2>
                  <TextField id="standard-basic-box" className='standard-basic-box' label="ddd" variant='outlined' value={ddd} 
                onChange={
                  (e)=>setDDD(e.target.value)}  />

                  <h2>Telefone</h2>
                  <TextField id="standard-basic-box-2" className='standard-basic-box-2' label="Telefone" variant='outlined' value={telefone} 
                onChange={
                  (e)=>setTelefone(e.target.value)}  />
                </div>
                
                <Button variant='contained' className='btn' onClick={handleClick} type="submit">
                  Enviar
                </Button>
                
              </form>

            </div>
          </div>
        </div>
    </div>
  )
}
