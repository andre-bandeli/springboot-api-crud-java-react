import React from 'react'
import './product.scss'
import moto from './moto.png'
import { useEffect, useState } from 'react';

export default function Product() {

    const[nome_modelo,setNome_modelo]=useState('')
    const[preco,setPreco]=useState('')
    const[descricao,setDescricao]=useState('')
    const[produto,setProduto]=useState([])


    useEffect(()=>{
        fetch("http://127.0.0.1:8080/api/produto/list/:id")
        .then(res=>res.json())
        .then((result)=>{
          setProduto(result);
        }
      )
    },[])


  return (
    <div className='product'>
        <div className="container">
            <div className="imagem_produto">
                    <img src={moto} alt="" />
            </div>
            <div className="dados">
                <h1>
                    {produto.nome_modelo}
                </h1>
            </div>
        </div>
    </div>
  )
}
