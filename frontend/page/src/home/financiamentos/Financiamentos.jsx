import React from 'react'
import './financiamentos.scss'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Financiamentos() {
  return (
    <div className='financiamentos'>
        <div className="title">

        <h2>Financiamentos e Consórcios</h2>
        <h3>Trabalhamos com as prinpais financiadoras do mercado!</h3>

        </div>
        <div className="container">
        <Accordion className='acordion'>
                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h' >
                                            Financiamentos
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <h3>
                                            Exercitation in fugiat est ut ad ea cupidatat ut in
                                            cupidatat occaecat ut occaecat consequat est minim minim
                                            esse tempor laborum consequat esse adipisicing eu
                                            reprehenderit enim.
                                        </h3>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h'>
                                            Consórcio
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <h3>
                                            Exercitation in fugiat est ut ad ea cupidatat ut in
                                            cupidatat occaecat ut occaecat consequat est minim minim
                                            esse tempor laborum consequat esse adipisicing eu
                                            reprehenderit enim.
                                        </h3>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h'>
                                            Condições contratuais
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <h3>
                                            Exercitation in fugiat est ut ad ea cupidatat ut in
                                            cupidatat occaecat ut occaecat consequat est minim minim
                                            esse tempor laborum consequat esse adipisicing eu
                                            reprehenderit enim.
                                        </h3>
                                    </AccordionItemPanel>
                                </AccordionItem>     
                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h'>
                                            Condições contratuais
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <h3>
                                            Exercitation in fugiat est ut ad ea cupidatat ut in
                                            cupidatat occaecat ut occaecat consequat est minim minim
                                            esse tempor laborum consequat esse adipisicing eu
                                            reprehenderit enim.
                                        </h3>
                                    </AccordionItemPanel>
                                </AccordionItem>     
                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h'>
                                            Condições contratuais
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <h3>
                                            Exercitation in fugiat est ut ad ea cupidatat ut in
                                            cupidatat occaecat ut occaecat consequat est minim minim
                                            esse tempor laborum consequat esse adipisicing eu
                                            reprehenderit enim.
                                        </h3>
                                    </AccordionItemPanel>
                                </AccordionItem>     
                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h'>
                                            Condições contratuais
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <h3>
                                            Exercitation in fugiat est ut ad ea cupidatat ut in
                                            cupidatat occaecat ut occaecat consequat est minim minim
                                            esse tempor laborum consequat esse adipisicing eu
                                            reprehenderit enim.
                                        </h3>
                                    </AccordionItemPanel>
                                </AccordionItem>               
                          
                    </Accordion>
        </div>

    </div>
  )
}
