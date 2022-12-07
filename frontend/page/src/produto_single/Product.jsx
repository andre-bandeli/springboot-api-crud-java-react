import React from 'react'
import './product.scss'
import moto from './moto.png'
import { useEffect, useState } from 'react';

import mt1 from './mt-5.jpg'
import mt2 from './mt-2.jpg'
import mt3 from './moto.jpg'
import mt4 from './mt6.jpg'

export default function Product() {

    const[nome_modelo,setNome_modelo]=useState('')
    const[preco,setPreco]=useState('')
    const[descricao,setDescricao]=useState('')
    const[produto,setProduto]=useState([]);

    const handleClick=(e)=>{
      e.preventDefault()
      const produto={nome_modelo,preco, descricao}
      console.log(produto)
      fetch("http://localhost:8080/api/produto/add",{
        method:"POST",
        mode: 'no-cors',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify("produto" + produto)
  
    }).then(()=>{
      console.log("Novo produto adicionado.")
    })
  }

    useEffect(()=>{
        fetch("http://127.0.0.1:8080/api/produto/list/1")
        .then(res=>res.json())
        .then((result)=>{
          setProduto(result);
          console.log(produto)
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
                <h3>
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde animi, minus deserunt voluptatem sint quae qui mollitia repellendus natus rerum non eligendi magni sapiente voluptas facere temporibus maiores eaque odio.
                </h3>
                <h2>à partir de: R$ <span>{produto.preco}</span></h2>
                <div className="info">
                      <h3>Ano: <span> 2023</span> </h3>
                      <h3>Modelo: <span>Yamaha</span></h3>
                      <h3>Situação: <span>0 km</span></h3>
                </div>
                <div className="buttons">
                  <button>
                    SIMULAR FINANCIAMENTO
                  </button>
                  <button className='btn'>
                    FALE COM UM ATENDENTE
                  </button>
                </div>
                
            </div>
        </div>

        <div className="fotos">
          <div className="box">
            <img src={mt1} alt="" />
          </div>
          <div className="box">
            <img src={mt2} alt="" />
          </div>
          <div className="box">
            <img src={mt3} alt="" />
          </div>
          <div className="box">
            <img src={mt4} alt="" />
          </div>
        </div>
    </div>
  )
}
