import React from 'react'
import { LinkArea, LinkIcon } from './styled';
import { useHistory, useLocation } from 'react-router-dom';

const Component = ({ icon, link }) => {
    const history = useHistory();
    const location = useLocation();

    const handleLinkClick = (e) => {
        e.preventDefault();
        history.push( link );
    }

    return (
        <LinkArea active={location.pathname === link} href={link} onClick={handleLinkClick}>
            <LinkIcon src={icon} />       
        </LinkArea>
    );
}

export default Component;
