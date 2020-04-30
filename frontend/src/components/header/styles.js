import styled from 'styled-components';

export const Cabecalho = styled.header`
    display:flex;
    flex-direction: row;
    background-color:#00ADA7;
    width:100%;
    align-items:center;
    justify-content:space-around;
    height: 70px;
    box-shadow: 1px 2px 3px #00000055;
    @media (max-width: 700px){
        flex-direction:row;
        height:180px;
        justify-content:center;
    }
    menu{
        display:flex;
        flex-direction:row;
        @media (max-width: 700px){
            flex-direction:column;
        }
        a{
            padding-top:25px;
            padding-left:5px;
            padding-right:5px;
            height: 70px;
            text-decoration:none;
            color:white;
            margin-left:40px;
            margin-right:40px;
            font-size:16px;
            :hover {
                border-bottom: 6px solid #00DAE9;
            }
            @media (max-width: 700px){
                height:auto;
                :hover{
                    font-size: 18px;
                }
                padding-top:5px;
                padding-bottom:5px;
                
                
            }
        }
        
    }
    img{
        width:70px;
        height:60px;
        margin-left: 100px;
        @media (max-width: 700px){
            width:100px;
            height:90px;  
        }
    }
`;