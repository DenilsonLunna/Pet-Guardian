import styled from 'styled-components';

export const Cabecalho = styled.header`
    display:flex;
    flex-direction: row;
    background-color:#00ADA7;
    width:100%;
    align-items:center;
    justify-content:space-around;
    height: 80px;
    box-shadow: 1px 2px 3px #00000055;
    menu{
        display:flex;
        flex-direction:row;
        a{
            padding-top:30px;
            padding-left:5px;
            padding-right:5px;
            height: 80px;
            text-decoration:none;
            color:white;
            margin-left:40px;
            margin-right:40px;
            font-size:16px;
            :hover{
                border-bottom: 6px solid #00DAE9;
            }
        }
        
    }
    img{
        width:70px;
        height:60px;
        margin-left: 100px;
    }
`;