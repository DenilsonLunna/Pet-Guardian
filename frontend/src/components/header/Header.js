import React from 'react';
import {Cabecalho} from './styles'
import logo from '../../assets/logo.png'

export default function Header(){
    return(
        <Cabecalho>
            <a href="">
            <img src={logo} alt=""/>
            </a>
           
            <menu>
            <a href="">Inicio</a> <a href="">Serviços</a> <a href="">Quem Somos</a> <a href="">Seja um de nós</a> <a href="">Entrar</a>

            </menu>
           

        </Cabecalho>

    )
}