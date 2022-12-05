import React from 'react'
import './financiamento.scss'

import bmw from './bmw.png'

export default function Financiamento() {
  return (
    <div className='financiamento'>

        <div className="title">

          <h2>Consulta por Marcas</h2>
          <h3>Essas são as marcas com as quais trabalhamos</h3>

        </div>

        <div className="container">
              <div className="card">
                  <img src={bmw} alt="" />
              </div>
              <div className="card">
                 <img src={bmw} alt="" />

              </div>
              <div className="card">
                 <img src={bmw} alt="" />

              </div>
              <div className="card">
                 <img src={bmw} alt="" />

              </div>
              <div className="card">
                 <img src={bmw} alt="" />

              </div>
              <div className="card">
                 <img src={bmw} alt="" />

              </div>
              <div className="card">
                 <img src={bmw} alt="" />

              </div>
              <div className="card">
                 <img src={bmw} alt="" />

              </div>
              <div className="card">
                 <img src={bmw} alt="" />

              </div>
        </div>

    </div>
  )
}
