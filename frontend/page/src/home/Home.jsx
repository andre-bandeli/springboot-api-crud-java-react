import React from 'react'
import Navbar from '../components/Nav/Navbar'
import Card from './card/Card'
import Header from './header/Header'
import Produtos from './produtos/Produtos'


export default function Home() {
  return (
    <div>

      <Navbar/>,
      <Header/>
      <Card/>
      <Produtos/>

    </div>
  )
}
