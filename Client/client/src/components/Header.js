import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    position: fixed !important;
    top: 0;
    width: 100%;
    height: 50px;
    background: #f8f9f9;
    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05), 0 2px 8px hsla(0, 0%, 0%, 0.05);
`;

const Headertop = styled.div`
    background: #f48225;
    height: 2px; ;
`;

const HeaderNav = styled.nav`
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    align-items: center;

    & a {
        height: 100%;
        padding: 0 16px;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        display: flex;
        color: hsl(206, 100%, 40%);
        text-decoration: none;
        cursor: pointer;
    }
`;

const Hamburger = styled.span`
    & {
        width: 16px;
        height: 2px;
        background-color: hsl(210, 8%, 35%);
        position: relative;
    }

    &:before {
        position: absolute;
        width: 16px;
        height: 2px;
        background-color: hsl(210, 8%, 35%);
        content: '';
        left: 0;
        top: -5px;
        transition: top, transform;
        transition-duration: 0.1s;
        transition-timing-function: ease-in-out;
    }

    &:after {
        position: absolute;
        width: 16px;
        height: 2px;
        background-color: hsl(210, 8%, 35%);
        content: '';
        left: 0;
        top: 5px;
        transition: top, transform;
        transition-duration: 0.1s;
        transition-timing-function: ease-in-out;
    }
`;

const Logo = styled.div`
    background-image: url(https://cdn.sstatic.net/Img/unified/sprites.svg?v=fcc0ea44ba27);
    display: inline-block;
    margin-left: 0;
    width: 150px;
    height: 30px;
    margin-top: -4px;
    background-position: 0 -500px;
`;

const Form = styled.form`
    padding: 0 calc(8px * 1);
    display: flex;
    align-items: center;
    flex-shrink: 10000;
    flex-grow: 1;
    position: relative;

    & > svg {
        color: hsl(210, 8%, 55%);
        right: auto;
        vertical-align: bottom;
        left: 0.7em;
        position: absolute;
        top: 50%;
        margin-top: -9px;
        pointer-events: none;
    }
`;
const Input = styled.input`
    border-color: hsl(210, 8%, 75%);
    background-color: hsl(0, 0%, 100%);
    color: hsl(210, 8%, 25%);
    display: block;
    /* line-height: calc(15 / 13) px; */
    -webkit-appearance: none;
    width: 100%;
    margin: 0;
    padding: 0.6em 0.7em;
    padding-left: 32px;
    border: 1px solid hsl(210, 8%, 75%);
    border-radius: 3px;
    font-size: 13px;
    font-family: inherit;
`;

const Search = () => {
    return (
        <Form>
            <Input />
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="18px" height="18px">
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
            </svg>
        </Form>
    );
};

const Header = () => {
    return (
        <StyledHeader>
            <Headertop></Headertop>
            <HeaderNav>
                <a href="#!">
                    <Hamburger></Hamburger>
                </a>
                <Logo></Logo>
                <Search />
            </HeaderNav>
        </StyledHeader>
    );
};

export default Header;
