import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
    font-weight: normal;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.5px;
    text-align: left;
`

const Paragraph = ({ children }) => (
    <StyledParagraph>{children}</StyledParagraph>
);

export default Paragraph;