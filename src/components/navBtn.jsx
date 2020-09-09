import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import styled,{css} from 'styled-components';
import {box_border, Radius} from 'styles/_constants';
import {mediaQueries} from 'styles/_media';


const btnTransition = css`
    transition-property: background-color, color, border;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
`;

const HeaderLink = styled(Link)`
    text-decoration: none;
`;

const HeaderButton = styled.button`
    ${btnTransition}

    font-weight: bold;
    font-size: 1rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    padding: 0.2rem;
    outline: none;

    ${Radius('1.7rem')};
    border: 2px solid ${ ({exactRoute}) => exactRoute ? '#ffffff' : box_border.RIGHT};
    background-color: ${ ({exactRoute}) => exactRoute ? box_border.BOTTOM : '#ffffff'};
    color: ${ ({exactRoute}) => exactRoute ? '#ffffff' : ''};
    
    &:hover{
        ${btnTransition}
        background-color: ${box_border.BOTTOM};
        color: #ffffff;
        border: 2px solid #ffffff;
        cursor: pointer;
    }

    ${mediaQueries.TABLET`
        padding: 0.4rem;
        font-size: 1.2rem;
        
    `}

    ${mediaQueries.DESKTOP`
        padding: 0.5rem;
        font-size: 1.3rem;
    `}

`;

export const NavButton = ({link, name, isExactRoute}) => {
    let match = useRouteMatch({
        path: link,
        exact: isExactRoute
    });
    return(
        <HeaderLink to={link}>
            <HeaderButton exactRoute={match}>
                {name}
            </HeaderButton>
        </HeaderLink>
    );
}