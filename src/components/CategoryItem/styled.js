import styled from 'styled-components';


export const Container = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-right: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    background-color: ${props => props.active ? '#FFF' : '#AAE09A'};
`;

export const CategoryImage = styled.img`
    width: 53px;
    height: 53px;
`;