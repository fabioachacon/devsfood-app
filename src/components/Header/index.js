import React, { useState } from 'react';
import { Container, Logo, SearchInput } from './styled';


const Component = ({ search, onSearch }) => {
    const [inputActive, setInputActive] = useState(!search ? false : true );

    const handleInputFocus = () => {
        setInputActive(true);
    }

    const handleInputBlur = () => {
        if(!search) {
           setInputActive(false);
        }
    }

    const handleChange = (e) => {
        onSearch(e.target.value);
    }

    return (
        <Container>
            <Logo src='./assets/logo.png' />
            <SearchInput 
                type="text" 
                value={search}
                placeholder="Search"
                active={inputActive} 
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChange={handleChange}
            />
        </Container>
    )
}

export default Component;
