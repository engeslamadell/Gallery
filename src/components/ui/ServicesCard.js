import React from 'react';
import styled from 'styled-components';

const StyledServicesCard = styled.div`
    display: flex;
    width: calc((100% / 3) - 3%);
    align-items: center;
    margin-right: 3%;
    text-align: left;
`

const ServicesCard = ({ children }) => (
    <StyledServicesCard>
        { children }
    </StyledServicesCard>
);

export default ServicesCard;