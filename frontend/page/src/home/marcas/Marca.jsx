import React from 'react'
import './marca.scss'

import bmw from './bmw.png'
import honda from './honda.png'
import yamaha from  './yamaha.png'
import volw from  './vw.jpg'
import audi from  './audi.webp'
import jeep from  './jeep.jpg'
import mit from  './mit.png'
import ferrari from  './ferrari.jpg'

export default function Marca() {
  return (
    <div className='marca'>

        <div className="title">

          <h2>Consulta por Marcas</h2>
          <h3>Essas são as marcas com as quais trabalhamos</h3>

        </div>

        <div className="container">
              <div className="card">
                  <img src={bmw} alt="" />
              </div>
              <div className="card">
                 <img src={honda} alt="" />

              </div>
              <div className="card">
                 <img src={volw} alt="" />

              </div>
              <div className="card">
                 <img src={yamaha} alt="" />

              </div>
              <div className="card">
                 <img src={audi} alt="" />

              </div>
              <div className="card">
                 <img src={jeep} alt="" />

              </div>
              <div className="card">
                 <img src={mit} alt="" />

              </div>
              <div className="card">
                 <img src={ferrari} alt="" />

              </div>
              <div className="card">
                 <img src={bmw} alt="" />

              </div>
        </div>

    </div>
  )
}
