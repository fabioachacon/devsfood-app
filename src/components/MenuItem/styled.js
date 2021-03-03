import styled from 'styled-components';

export const LinkArea = styled.a`
     background: ${props => props.active ? '#0B4D0B' : ''};
     width: 60px;
     height: 60px;
     display: flex;
     align-items: center;
     justify-content: center;
     border-radius: 10px;
     margin-bottom: 10px;
     transition: background-color 0.3s ease-in-out;
`;

export const LinkIcon = styled.img`
    width: 34px;
    height: auto;
`;