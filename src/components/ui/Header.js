import React from 'react';
import styled from 'styled-components';
import HeaderItem from './HeaderItem';
import Image from './Image';
import logo from '../../assets/logo.png';

const StyledHeader = styled.ul`
    padding: 0;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    // width: 40%;
    flex: 1;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

const Header = () => (
    <Container>
        <StyledHeader>
            <HeaderItem>360 PLANNER</HeaderItem>
            <HeaderItem>HER</HeaderItem>
            <HeaderItem>HIM</HeaderItem>
            <HeaderItem>THE WEDDING</HeaderItem>
        </StyledHeader>
        <Image imageSrc={logo} altText="Logo" />
        <StyledHeader>
            <HeaderItem>360 PLANNER</HeaderItem>
            <HeaderItem>HER</HeaderItem>
            <HeaderItem>HIM</HeaderItem>
            <HeaderItem>THE WEDDING</HeaderItem>
        </StyledHeader>
    </Container>
)

export default Header;