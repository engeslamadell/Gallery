import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



const StyledPagination = styled.div`
    display: flex;
    justify-content: center;
`

const List = styled.ul`
    display: flex;
    list-style: none;
`

const ListItem = styled(NavLink)`
    padding: 6px 12px;
    border: 1px solid #ddd;
    cursor: pointer;
    text-decoration: none;
    color: #000
`

const Pagination = ({ imagesPerPage, totalImages, paginate }) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return (
        <StyledPagination>
            <List>
                { pageNumbers.map((page, index) => (
                    index === 0 ?
                        <ListItem onClick={() => paginate(page)} to="/" key={page} activeClassName='active'><li>{page}</li></ListItem>
                        :
                        <ListItem onClick={() => paginate(page)} to={`/${index + 1}`} key={page}><li>{page}</li></ListItem>
                )) }
            </List>
        </StyledPagination>
    );
}

export default Pagination;