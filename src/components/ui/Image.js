import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
    max-height: ${props => props.imageHeight || '70px' };
    margin-right: 30px;
    margin-left: 30px;
    cursor: pointer;
`

const Image = ({ imageSrc, altText, imageHeight }) => (
    <StyledImage src={imageSrc} alt={altText} imageHeight={imageHeight} />
)

export default Image;