import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    margin-right: 2%;
    width: calc((100% / 3) - 2%);
    margin-bottom: 15px;
`;

const Card = ({ children }) => (
    <StyledCard>
        {children}
    </StyledCard>
);

export default Card;