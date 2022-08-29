import React from 'react';
import styled from 'styled-components';

const Styledfooter = styled.footer`
    background-color: hsl(210, 8%, 15%);
    background-position: top left;
    background-repeat: no-repeat;
    border-top: 0;
    background-size: auto;
    color: hsl(210, 8%, 60%);
    padding-top: 0;
    padding-bottom: 0;
    display: block;
`;

const Footer = () => {
    return <Styledfooter></Styledfooter>;
};

export default Footer;
