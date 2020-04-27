import styled from 'styled-components';
//ex: font-size: &{props => props.fontSize}
export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color: #EFEFEF;
    h1{
       margin-top: 20px;
    }
    span{
        color: #00938E;
    }
`;
export const Formulario = styled.form`
    display:flex;
    flex-direction:row;
    h1{
        margin-bottom: 10px;
        font-size: 13px;
        margin-left: -15px;
    }
  
    span{
        color: #00938E;
    }
    br{
        width: 100%;
    }

`;
export const DadosPessoais = styled.section`
    margin: 20px;
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

export const DadosContato = styled.section`
    margin-top:20px;
    margin-left: 50px;
    display:flex;
    flex-direction:column;
    
    Input{
        margin-bottom:10px;
    }
`;
export const DadosBancarios = styled.section`
    margin-top: -34px; 
    margin-left: 50px;
    display:flex;
    flex-direction:column;
    
    div{
        display:flex;
        flex-direction:row;
    }
    Input{
        margin-bottom:10px;
    }
`;

export const ConexaoSite = styled.section`
    margin-top: -34px; 
    margin-left: 50px;
    display:flex;
    flex-direction:column;
    Input{
        margin-bottom:10px;
    }
`;

export const DivEsq = styled.div`
    display:flex;
`;

export const DivDir = styled.div`
    display:flex;
    flex-direction:column;
`;

export const Servicos = styled.section`
        width: 100%;
        display:flex;
        flex-direction:column;
        align-items: center;
        border-top: 1px solid #cccccc;
        h1{
            margin-top: 20px;
            color: #7D7D7D;
        }
        ul{
            display:flex;
            flex-direction:row;
            justify-content:space-around;
        }
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
                width: 70px;
                height: 70px;
                margin: 20px;

                :hover{
                    width: 75px;
                    height: 75px;
                
                }
            }
            p{
                color: #01D2A7;
            }
        }
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
