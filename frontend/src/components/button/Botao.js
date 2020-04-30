import React from 'react';
import {Btn} from './styles'
export default function Botao(props){
    return(
        <Btn type={props.submit}>{props.text}</Btn>
    )
}