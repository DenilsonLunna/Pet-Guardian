import React from 'react';
import {Title, In} from './styles';


export default function Input(props){
    
    return(
        <form action="">
            <Title >{props.texto}</Title>
            <In placeholder={props.placeholder} width={props.width}/> 

        </form>
      
    );
}