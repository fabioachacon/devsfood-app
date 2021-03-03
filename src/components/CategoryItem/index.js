import React from 'react';
import { Container, CategoryImage } from './styled';

const Component = ({data, activeCategory, setActiveCategory}) => {
    return (
        <Container 
         onClick={() => setActiveCategory( data.id )} 
         active={data.id === activeCategory}>
            <CategoryImage src={data.image} />
        </Container>
    )
}

export default Component;
