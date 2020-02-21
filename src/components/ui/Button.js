import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: 1px solid #000;
    outline: 0;
    background-color: ${props => props.isActive ? '#000' : '#fff'};
    color: ${props => props.isActive ? '#fff' : '#000' };
    margin-right: ${props => props.isNotLast ? '10px' : '0px' };
    padding: 0px 10px;
    height: 20px;
    cursor: pointer;
`

const Button = ({ isActive, buttonText, isNotLast }) => (
    <StyledButton isActive={isActive} isNotLast={isNotLast}>{buttonText}</StyledButton>
);

export default Button;