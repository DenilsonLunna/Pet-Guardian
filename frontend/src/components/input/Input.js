import React, {useEffect,useRef} from 'react';
import {useField} from '@unform/core';
import {Title, In,Section} from './styles';


export default function Input(props){
    const inputRef = useRef(null);
    const {fieldName, registerField, defaultValue, error} = useField(props.name);
    
    useEffect(()=> {
        registerField({
            name:fieldName,
            ref: inputRef.current,
            path:'value',
        })
    },[fieldName,registerField ]);
    return(
        <Section>
            <Title >{props.texto}</Title>
            <In name={props.name} placeholder={props.placeholder} width={props.width} ref={inputRef}/> 
        </Section>
            

       
    );
}