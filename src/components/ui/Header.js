import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import HeaderItem from './HeaderItem';
import Image from './Image';
import logo from '../../assets/logo.png';

const StyledHeader = styled.ul`
    padding: 0;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    flex: 1;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    color: #000
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledLink = styled(NavLink)`
  color: #000;
  text-decoration: none
`;

const Header = () => (
    <Container>
        <StyledHeader>
            <HeaderItem>
                <StyledLink to="categories">360 PLANNER</StyledLink>
            </HeaderItem>
            <HeaderItem>
                <StyledLink to="categories">HER</StyledLink>
            </HeaderItem>
            <HeaderItem>
                <StyledLink to="categories">HIM</StyledLink>
            </HeaderItem>
            <HeaderItem>
                <StyledLink to="categories">THE WEDDING</StyledLink>
            </HeaderItem>
        </StyledHeader>
        <Image imageSrc={logo} altText="Logo" hasMargin />
        <StyledHeader>
            <HeaderItem>
                <StyledLink to="categories">VENDORS</StyledLink>
            </HeaderItem>
            <HeaderItem>
                <StyledLink to="categories">GALLERY</StyledLink>
            </HeaderItem>
            <HeaderItem>
                <StyledLink to="categories">IDEAS & MORE</StyledLink>
            </HeaderItem>
        </StyledHeader>
    </Container>
)

export default Header;