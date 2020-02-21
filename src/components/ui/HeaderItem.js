import React from 'react';
import styled from 'styled-components';

const StyledHeaderItem = styled.li`
    color: #000;
    padding: 12px 7px;
    list-style: none;
    font-family: "Lato", sans-serif;
    font-weight: 900;
    font-size: 13px;
    cursor: pointer;
`

const HeaderItem = ({ children }) => (
    <StyledHeaderItem>
        { children }
    </StyledHeaderItem>
);

export default HeaderItem;