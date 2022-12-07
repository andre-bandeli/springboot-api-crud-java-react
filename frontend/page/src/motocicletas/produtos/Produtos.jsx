import React from 'react'
import './produtos.scss'
import { useEffect, useState } from 'react';
import moto from './moto.png'
import { Link } from "react-router-dom";

export default function Produtos() {

    const[nome_modelo,setNome_modelo]=useState('')
    const[preco,setPreco]=useState('')
    const[descricao,setDescricao]=useState('')
    const[produto,setProduto]=useState([])

    const handleClick=(e)=>{
        e.preventDefault()
        const produto={nome_modelo,preco, descricao}
        console.log(produto)
        fetch("http://localhost:8080/api/produto/add",{
          method:"POST",
          mode: 'no-cors',
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(produto)
    
      }).then(()=>{
        console.log("Novo produto adicionado.")
      })
    }

    useEffect(()=>{
        fetch("http://127.0.0.1:8080/api/produto/list")
        .then(res=>res.json())
        .then((result)=>{
          setProduto(result);
        }
      )
    },[])


  return (
    <div className='produtos'>

        <div className="container">

            <div className="title">

                <h2>Motos 0 km</h2>
                <h3>Confira alguns de nossos modelos disponíveis</h3>

            </div>
            <div className="busca">

                <div className="btn">
                    <h4>Yamaha MT-03</h4>
                </div>
                <div className="btn">
                    <h4>BMW iX</h4>
                </div>
                <div className="btn">
                    <h4>Honda Street</h4>
                </div>
                <div className="btn">
                    <h4>Audi</h4>
                </div>
                
            </div>
            <div className="paginacao">
                
            </div>
            <div className="product">

            {produto.map(produto=>(

                <div className="box">

                    <div className="imagem">
                            <img src={moto} alt="" />
                    </div>
                    <div className="modelo">
                        <h2>{produto.nome_modelo}</h2>
                    </div>
                    <div className="preco">
                        <h3>A partir de R$ {produto.preco}</h3>
                        <h4>Condições especiais para clientes web motors. Confira as condições de pagamento</h4>
                    </div>
                    <div className="condicoes">
                        <Link to="/produto/{id}">
                            ver detalhes
                        </Link>
                    </div>
                </div>
            ))
            }
                {/* <div className="box">

                     <div className="imagem">
                            <img src={moto} alt="" />
                    </div>
                    <div className="modelo">
                        <h2>Yamaha MT-03 ABS 2023</h2>
                    </div>
                    <div className="preco">
                        <h3>A partir de R$ 28.000,00</h3>
                        <h4>Condições especiais para clientes web motors. Confira as condições de pagamento</h4>
                    </div>
                    <div className="condicoes">
                        <a href="">
                            ver detalhes
                        </a>

                    </div>
                    
                </div>

                <div className="box">

                     <div className="imagem">
                            <img src={moto} alt="" />
                    </div>
                    <div className="modelo">
                        <h2>Yamaha MT-03 ABS 2023</h2>
                    </div>
                    <div className="preco">
                        <h3>A partir de R$ 28.000,00</h3>
                        <h4>Condições especiais para clientes web motors. Confira as condições de pagamento</h4>
                    </div>
                    <div className="condicoes">
                        <a href="">
                            ver detalhes
                        </a>

          

                    </div>
                    
                </div>

                <div className="box">

                     <div className="imagem">
                            <img src={moto} alt="" />
                    </div>
                    <div className="modelo">
                        <h2>Yamaha MT-03 ABS 2023</h2>
                    </div>
                    <div className="preco">
                        <h3>A partir de R$ 28.000,00</h3>
                        <h4>Condições especiais para clientes web motors. Confira as condições de pagamento</h4>
                    </div>
                    <div className="condicoes">
                        <a href="">
                            ver detalhes
                        </a>

                    </div>
                    
                </div>

                <div className="box">

                     <div className="imagem">
                            <img src={moto} alt="" />
                    </div>
                    <div className="modelo">
                        <h2>Yamaha MT-03 ABS 2023</h2>
                    </div>
                    <div className="preco">
                        <h3>A partir de R$ 28.000,00</h3>
                        <h4>Condições especiais para clientes web motors. Confira as condições de pagamento</h4>
                    </div>
                    <div className="condicoes">
                        <a href="">
                            ver detalhes
                        </a>

                    </div>
                    
                </div>

                <div className="box">

                     <div className="imagem">
                            <img src={moto} alt="" />
                    </div>
                    <div className="modelo">
                        <h2>Yamaha MT-03 ABS 2023</h2>
                    </div>
                    <div className="preco">
                        <h3>A partir de R$ 28.000,00</h3>
                        <h4>Condições especiais para clientes web motors. Confira as condições de pagamento</h4>
                    </div>
                    <div className="condicoes">
                        <a href="">
                            ver detalhes
                        </a>

                    </div>
                    
                </div>

                <div className="box">

                     <div className="imagem">
                            <img src={moto} alt="" />
                    </div>
                    <div className="modelo">
                        <h2>Yamaha MT-03 ABS 2023</h2>
                    </div>
                    <div className="preco">
                        <h3>A partir de R$ 28.000,00</h3>
                        <h4>Condições especiais para clientes web motors. Confira as condições de pagamento</h4>
                    </div>
                    <div className="condicoes">
                        <a href="">
                            ver detalhes
                        </a>

                    </div>
                    
                </div>

                <div className="box">

                     <div className="imagem">
                            <img src={moto} alt="" />
                    </div>
                    <div className="modelo">
                        <h2>Yamaha MT-03 ABS 2023</h2>
                    </div>
                    <div className="preco">
                        <h3>A partir de R$ 28.000,00</h3>
                        <h4>Condições especiais para clientes web motors. Confira as condições de pagamento</h4>
                    </div>
                    <div className="condicoes">
                        <a href="">
                            ver detalhes
                        </a>

                    </div>
                    
                </div>

                <div className="box">

                     <div className="imagem">
                            <img src={moto} alt="" />
                    </div>
                    <div className="modelo">
                        <h2>Yamaha MT-03 ABS 2023</h2>
                    </div>
                    <div className="preco">
                        <h3>A partir de R$ 28.000,00</h3>
                        <h4>Condições especiais para clientes web motors. Confira as condições de pagamento</h4>
                    </div>
                    <div className="condicoes">
                        <a href="">
                            ver detalhes
                        </a>

                    </div>
                    
                </div>

                <div className="box">

                     <div className="imagem">
                            <img src={moto} alt="" />
                    </div>
                    <div className="modelo">
                        <h2>Yamaha MT-03 ABS 2023</h2>
                    </div>
                    <div className="preco">
                        <h3>A partir de R$ 28.000,00</h3>
                        <h4>Condições especiais para clientes web motors. Confira as condições de pagamento</h4>
                    </div>
                    <div className="condicoes">
                        <a href="">
                            ver detalhes
                        </a>

                    </div>
                    
                </div> */}
                
            </div>
        </div>

         <div className="container">

            <div className="title">

                <h2>Motos Seminovas</h2>
                <h3>Confira alguns de nossos modelos disponíveis</h3>

            </div>
            <div className="busca">

                <div className="btn">
                    <h4>Yamaha MT-03</h4>
                </div>
                <div className="btn">
                    <h4>BMW iX</h4>
                </div>
                <div className="btn">
                    <h4>Honda Street</h4>
                </div>
                <div className="btn">
                    <h4>Audi</h4>
                </div>
                
            </div>
            <div className="paginacao">
                
            </div>
            <div className="product">

            {produto.map(produto=>(

                <div className="box">

                    <div className="imagem">
                            <img src={moto} alt="" />
                    </div>
                    <div className="modelo">
                        <h2>{produto.nome_modelo}</h2>
                    </div>
                    <div className="preco">
                        <h3>A partir de R$ {produto.preco}</h3>
                        <h4>Condições especiais para clientes web motors. Confira as condições de pagamento</h4>
                    </div>
                    <div className="condicoes">
                        <Link to="/produto/{id}">
                            ver detalhes
                        </Link>
                    </div>
                </div>
            ))
            }
                {/* <div className="box">

                     <div className="imagem">
                            <img src={moto} alt="" />
                    </div>
                    <div className="modelo">
                        <h2>Yamaha MT-03 ABS 2023</h2>
                    </div>
                    <div className="preco">
                        <h3>A partir de R$ 28.000,00</h3>
                        <h4>Condições especiais para clientes web motors. Confira as condições de pagamento</h4>
                    </div>
                    <div className="condicoes">
                        <a href="">
                            ver detalhes
                        </a>

                    </div>
                    
                </div>

                <div className="box">

                     <div className="imagem">
                            <img src={moto} alt="" />
                    </div>
                    <div className="modelo">
                        <h2>Yamaha MT-03 ABS 2023</h2>
                    </div>
                    <div className="preco">
                        <h3>A partir de R$ 28.000,00</h3>
                        <h4>Condições especiais para clientes web motors. Confira as condições de pagamento</h4>
                    </div>
                    <div className="condicoes">
                        <a href="">
                            ver detalhes
                        </a>

          

                    </div>
                    
                </div>

                <div className="box">

                     <div className="imagem">
                            <img src={moto} alt="" />
                    </div>
                    <div className="modelo">
                        <h2>Yamaha MT-03 ABS 2023</h2>
                    </div>
                    <div className="preco">
                        <h3>A partir de R$ 28.000,00</h3>
                        <h4>Condições especiais para clientes web motors. Confira as condições de pagamento</h4>
                    </div>
                    <div className="condicoes">
                        <a href="">
                            ver detalhes
                        </a>

                    </div>
                    
                </div>

                <div className="box">

                     <div className="imagem">
                            <img src={moto} alt="" />
                    </div>
                    <div className="modelo">
                        <h2>Yamaha MT-03 ABS 2023</h2>
                    </div>
                    <div className="preco">
                        <h3>A partir de R$ 28.000,00</h3>
                        <h4>Condições especiais para clientes web motors. Confira as condições de pagamento</h4>
                    </div>
                    <div className="condicoes">
                        <a href="">
                            ver detalhes
                        </a>

                    </div>
                    
                </div>

                <div className="box">

                     <div className="imagem">
                            <img src={moto} alt="" />
                    </div>
                    <div className="modelo">
                        <h2>Yamaha MT-03 ABS 2023</h2>
                    </div>
                    <div className="preco">
                        <h3>A partir de R$ 28.000,00</h3>
                        <h4>Condições especiais para clientes web motors. Confira as condições de pagamento</h4>
                    </div>
                    <div className="condicoes">
                        <a href="">
                            ver detalhes
                        </a>

                    </div>
                    
                </div>

                <div className="box">

                     <div className="imagem">
                            <img src={moto} alt="" />
                    </div>
                    <div className="modelo">
                        <h2>Yamaha MT-03 ABS 2023</h2>
                    </div>
                    <div className="preco">
                        <h3>A partir de R$ 28.000,00</h3>
                        <h4>Condições especiais para clientes web motors. Confira as condições de pagamento</h4>
                    </div>
                    <div className="condicoes">
                        <a href="">
                            ver detalhes
                        </a>

                    </div>
                    
                </div>

                <div className="box">

                     <div className="imagem">
                            <img src={moto} alt="" />
                    </div>
                    <div className="modelo">
                        <h2>Yamaha MT-03 ABS 2023</h2>
                    </div>
                    <div className="preco">
                        <h3>A partir de R$ 28.000,00</h3>
                        <h4>Condições especiais para clientes web motors. Confira as condições de pagamento</h4>
                    </div>
                    <div className="condicoes">
                        <a href="">
                            ver detalhes
                        </a>

                    </div>
                    
                </div>

                <div className="box">

                     <div className="imagem">
                            <img src={moto} alt="" />
                    </div>
                    <div className="modelo">
                        <h2>Yamaha MT-03 ABS 2023</h2>
                    </div>
                    <div className="preco">
                        <h3>A partir de R$ 28.000,00</h3>
                        <h4>Condições especiais para clientes web motors. Confira as condições de pagamento</h4>
                    </div>
                    <div className="condicoes">
                        <a href="">
                            ver detalhes
                        </a>

                    </div>
                    
                </div>

                <div className="box">

                     <div className="imagem">
                            <img src={moto} alt="" />
                    </div>
                    <div className="modelo">
                        <h2>Yamaha MT-03 ABS 2023</h2>
                    </div>
                    <div className="preco">
                        <h3>A partir de R$ 28.000,00</h3>
                        <h4>Condições especiais para clientes web motors. Confira as condições de pagamento</h4>
                    </div>
                    <div className="condicoes">
                        <a href="">
                            ver detalhes
                        </a>

                    </div>
                    
                </div> */}
                
            </div>
        </div>

    </div>
  )
}
