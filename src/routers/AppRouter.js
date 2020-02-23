import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import HomePage from '../components/pages/HomePage';
import CategoriesPage from '../components/pages/CategoriesPage';
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
                <Route path="/categories" component={CategoriesPage} />
                <Route path="/:id" component={HomePage} exact />
                <Route component={NotFoundPage} />
            </Switch>
        </StyledApp>
        <Footer />
    </BrowserRouter>
)

export default AppRouter;