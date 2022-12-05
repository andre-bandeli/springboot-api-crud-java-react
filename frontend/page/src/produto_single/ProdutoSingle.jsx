import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/Nav/Navbar'
import Product from './Product'
import './produtoSingle.scss'

export default function ProdutoSingle() {
  return (
    <div className='produto-single'>

        <Navbar/>
        <Product/>
        <Footer/>


    </div>
  )
}
