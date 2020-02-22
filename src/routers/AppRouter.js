import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/ui/Header';
import HomePage from '../components/pages/HomePage';
import NotFoundPage from '../components/pages/NotFoundPage';

const StyledApp = styled.div`
  width: 90%;
  margin: 40px auto;
`

const AppRouter = () => (
    <BrowserRouter>
        <StyledApp>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route component={NotFoundPage} />
            </Switch>
        </StyledApp>
    </BrowserRouter>
)

export default AppRouter;