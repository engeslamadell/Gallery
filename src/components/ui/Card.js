import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    margin-right: 2%;
    width: ${props => props.isCategoriesPage ? 'calc((100% / 4) - 2%)' : 'calc((100% / 3) - 2%)'};
    margin-bottom: 15px;
`;

const Card = ({ children, isCategoriesPage }) => (
    <StyledCard isCategoriesPage={isCategoriesPage}>
        {children}
    </StyledCard>
);

export default Card;