import styled from 'styled-components';
import {Form} from '@unform/web';
//ex: font-size: &{props => props.fontSize}


export const Title = styled.h1`
    margin-top: 20px;
    color: #7D7D7D;
    span{
        color: #00938E;
    }
`;
export const SectionTitle = styled.h1`
    font-size: 12px;
    margin-bottom: 10px;
    margin-left: -10px;
    span{
        color: #00938E;
    }
`;

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color: #EFEFEF;
    
    
`;
export const DadosPessoais = styled.section`
    margin-top: 20px;
    margin-right: 50px;
   
    Input{
        margin-bottom:10px;
    }
    div{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
    }
    
`;
export const Formulario = styled(Form)`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    div{
        display:flex;
        flex-direction:row;
    }
    @media (max-width: 800px) {
        flex-direction: column;
    }
`
    
export const DadosContato = styled.section`
    margin-top: 20px;
    margin-left: 50px;
    display:flex;
    flex-direction:column;
    
    Input{
        margin-bottom:10px;
    }
`;
export const DadosBancarios = styled.section`
    margin-top: -20px;
    margin-left: 50px;
    display:flex;
    flex-direction:column;
    
    div{
        display:flex;
        flex-direction:row;
        justify-content: space-between;
    }
    Input{
        margin-bottom:10px;
    }
`;

export const ConexaoSite = styled.section`
    margin-top: -20px;
    margin-left: 50px;
    display:flex;
    flex-direction:column;
    div{
        display:flex;
        flex-direction:row;
        justify-content: space-between;
    }
    Input{
        margin-bottom:10px;
    }
`;
export const Servicos = styled.ul`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    li{
            display:flex;
            flex-direction:column;
            align-items:center;
            
            div{
                display:flex;
                flex-direction:row;
                align-items: center;
                justify-content: center;
            }
            img{
                width: 80px;
                height: 80px;
                margin: 20px;
            }
            p{
                color: #01D2A7;
            }
        }
`;
export const SectionServicos = styled.section`
        width: 100%;
        display:flex;
        flex-direction:column;
        align-items: center;
        border-top: 1px solid #cccccc;
        
`;

export const Link = styled.div`
    display:flex;
    flex-direction:row;
    margin-top: 20px;
    margin-bottom: 20px;
    a{
        margin-right: 10px;
        font-size: 12;
        color: #01D2A7;

        :hover{
            color:#00ADA7;
            font-size:16px;
            
        }
    }
`;
