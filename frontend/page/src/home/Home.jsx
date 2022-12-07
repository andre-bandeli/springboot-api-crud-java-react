import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/Nav/Navbar'
import Card from './card/Card'
import Contato from './contato/Contato'
import Financiamento from './financiamento/Financiamento'
import Financiamentos from './financiamentos/Financiamentos'
import Header from './header/Header'
import Produtos from './produtos/Produtos'


export default function Home() {
  return (
    <div>

      <Navbar/>,
      <Header/>
      <Card/>
      <Produtos/>
      <Financiamento/>
      <Financiamentos/>
      <Contato/>
      <Footer/>

    </div>
  )
}
