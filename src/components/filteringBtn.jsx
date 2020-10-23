import React from 'react';
import styled from 'styled-components';
import {box_border, Radius} from 'styles/_constants';

const FilterBtnStyle = styled.button`
    user-select: none;
    cursor: pointer;
    width: 7rem;
    height: 1.5rem;
    margin: 0.5rem 0.3rem;
    outline: none;
    background-color:#fff;
    border: none;
    position: relative;
    display: inline-block;
    font-size: 1rem;
    font-family: 'Courier New', Courier, monospace;
    color: ${({active}) => active ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'};
    opacity: ${({active}) => active ? '1' : '0.5'};
    transition: all 0.5s;
    text-align:center;
    z-index: 0;
   
    &::before{
        width: ${({active}) => active ? '7rem' : '0rem'};
        ${Radius('5px')};
        height: 1.5rem;
        position: absolute;
        z-index: -1;
        top:-0.1rem;
        opacity: ${({active}) => active ? '1' : '0'};
        left: ${({active}) => active ? '0' : '50%'};
        transition-property: width, left, opacity;
        transition-duration: 0.7s;
        transition-timing-function: ease-in-out;
        content: '';
        ${({active}) => active &&
        `border-width : 2px 0px;
        border-style: solid;
        border-color: ${box_border.RIGHT};
        background-color: ${box_border.RIGHT};
        `};
       
    }

    &:hover, &:focus{
        opacity:1;
    }
    

`

export const FilteringBtn = ({active, children, onClick}) => {
    return (<FilterBtnStyle active={active} onClick={onClick}>{children}</FilterBtnStyle>);
}