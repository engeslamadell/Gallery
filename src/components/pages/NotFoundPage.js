import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNotFound = styled.div`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`

const NotFound = styled.h2`
    font-weight: bold;
    margin-right: 20px;
    color: red
`

const NotFoundPage = () => (
    <StyledNotFound>
        <NotFound>Not Found 404!</NotFound>
        <Link to="/">Go to main page!</Link>
    </StyledNotFound>
);

export default NotFoundPage;