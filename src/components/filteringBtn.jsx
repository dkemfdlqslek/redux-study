import React from 'react';
import styled from 'styled-components';
import {box_border} from 'styles/_constants';

const FilterBtnStyle = styled.button`
    width: 7rem;
    height: 1.5rem;
    margin: 0.5rem 0.3rem;
    outline: none;
    background-color: #fff;
    border: none;
    font-size: 1rem;
    font-family: 'Courier New', Courier, monospace;
    color: rgb(210, 210, 210);
    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
   
    &::before{
        width: ${({active}) => active ? '7rem' : '0rem'};
        height: 1.5rem;
        position: absolute;
        z-index: -1;
        transition: 0.6s ease-in-out;
        content: '';
    }

    &:hover, &:focus{
        color: rgb(0, 0, 0);
        &::before{
        width: 7rem;
        border-width : 1px 0px;
        border-style: solid;
        border-color: ${box_border.RIGHT};
        }
    }
    

`

export const FilteringBtn = ({active, children, onClick}) => {
    return (<FilterBtnStyle active={active} onClick={onClick}>{children}</FilterBtnStyle>);
}