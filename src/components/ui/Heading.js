import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
    font-size: ${props => props.fontSize ? '18px' : '24px' };
    line-height: 1.25;
    font-weight: 900;
    text-align: ${props => props.isCenter ? 'center' : 'left' };
    text-transform: uppercase;
    margin: auto;
    width: ${props => props.isMainHeading ? '80%' : '100%' };
`

const Heading = ({ children, fontSize, isCenter, isMainHeading }) => (
    <StyledHeading fontSize={fontSize} isCenter={isCenter} isMainHeading={isMainHeading}>{children}</StyledHeading>
);

export default Heading;