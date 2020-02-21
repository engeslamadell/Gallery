import React from 'react';
import Header from './components/ui/Header';
import styled from 'styled-components';

const StyledApp = styled.div`
  width: 90%;
  margin: 40px auto;
`

function App() {
  return (
    <StyledApp className="App">
      <Header />
    </StyledApp>
  );
}

export default App;
