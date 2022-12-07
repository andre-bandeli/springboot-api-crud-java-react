import React from 'react'
import Navbar from '../components/Nav/Navbar'
import './motocicletas.scss'
import Produto from './produtos/Produtos'
import HeaderMotos from './header/HeaderMotos'
import Footer from '../components/footer/Footer'

export default function Motocicletas() {
  return (
    <div className='motocicletas'>
      <Navbar/>
      <HeaderMotos/>
      <Produto/>
      <Footer/>
    </div>
  )
}
