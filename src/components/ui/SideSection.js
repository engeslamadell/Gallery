import React from 'react';
import styled from 'styled-components';

const StyledSideSection = styled.div`
    width: 23%;
    margin-right: 2%;
`

const SideSection = ({ children }) => (
    <StyledSideSection>
        {children}
    </StyledSideSection>
);

export default SideSection;