import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
    max-height: ${props => props.imageHeight || '70px' };
    width: ${props => props.isFullWidth ? '100%' : null };
    margin: ${props => props.hasMargin ? '0px 30px' : '0px' };
    cursor: pointer;
`

const Image = ({ imageSrc, altText, imageHeight, isFullWidth, hasMargin }) => (
    <StyledImage src={imageSrc} alt={altText} imageHeight={imageHeight} isFullWidth={isFullWidth} hasMargin={hasMargin} />
)

export default Image;