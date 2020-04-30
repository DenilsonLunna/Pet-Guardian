import styled from 'styled-components';


export const Section = styled.section`
    display:flex;
    flex-direction:column;
`;
export const Title = styled.h1`
    color:#01D2A7;
    font-size:12px;
    margin-left:5px;
    margin-bottom:5px;
`;
export const In = styled.input`
    border: 1px solid #c5c5c5;
    border-radius: 5px;
    padding-left: 5px;
    font-size: 12px;
    color: #00000077;
    height: 25px;
    width: ${props => `${props.width}px`};
    ::placeholder{
        color:#cccccc;
        font-size:14px;
    }
`;
