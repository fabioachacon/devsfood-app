import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
`;

export const Menu = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background: #136713;
   width: 80px;
`;

export const PageBody = styled.div`
   display: flex;
   background-image: url('/assets/bg.png');
   background-color: #3E9913;
   flex: 1;
   overflow-y: auto;
`