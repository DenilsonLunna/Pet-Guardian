import React from 'react';
import {Btn} from './styles'
export default function Botao(props){
    return(
        <Btn type="submit">{props.text}</Btn>
    )
}