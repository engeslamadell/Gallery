import React from 'react';
import styled from 'styled-components';

const StyledTextInput = styled.input`
    width: 100%;
    padding: 5px;
    border: 1px solid #000;
    color: #333;
    margin-top: 20px;
`

const TextInput = ({ placeholder }) => (
    <StyledTextInput placeholder={placeholder} />
);

export default TextInput;