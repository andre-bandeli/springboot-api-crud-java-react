import React from 'react'
import './card.scss'

import moto from './moto.png'
import carro from './carro.png'

export default function Card() {
  return (
    <div className='card'>
        <div className="container">
            <div className="box-left">

                <div className="imagem">
                    <img src={moto} alt="" />
                </div>
                <div className="texto">
                    <h2>Motocicletas</h2>
                    <h3>Motocicletas 0 km e seminovas</h3>
                    <h4>Com pós venda e garantia de 2 anos, incluso revisões semenstrais</h4>
                    <button className='btn'>
                        <a href="">
                        ver todos
                        </a>
                    </button>
                </div>

            </div>
            <div className="box-right">

                <div className="texto">
                    <h2>Automoveis</h2>
                    <h3>Automoveis 0 km e seminovos</h3>
                    <h4>Com pós venda e garantia de 2 anos, incluso revisões semenstrais</h4>
                    <button className='btn'>
                        <a href="">
                        ver todos
                        </a>
                    </button>
                </div>
                <div className="imagem">
                        <img src={carro} alt="" />
                    </div>

                </div>
        </div>
    </div>
  )
}
