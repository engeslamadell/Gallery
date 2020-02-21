import React from 'react';
import styled from 'styled-components';

const StyledCardTitle = styled.h3`
    font-size: 17px;
    font-weight: bold;
    text-overflow: elipsis;
    overflow: hidden;
    margin: 10px 0 15px;
    line-height: 25px;
`

const CardTitle = ({ children }) => (
    <StyledCardTitle>
        {children}
    </StyledCardTitle>
);

export default CardTitle;