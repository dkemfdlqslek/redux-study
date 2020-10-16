import React from 'react';
import styled from 'styled-components';
import {box_border} from 'styles/_constants';

const FilterBtnStyle = styled.button`
    width: 3rem;
    height: 1.5rem;
    border : 2px 0px solid ${box_border.RIGHT};
    font-size: 1rem;
    font-family: 'Courier New', Courier, monospace;
    color: rgb(210, 210, 210);
    transition: color 1s;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
    ${ ({active}) => !active &&
        ` &::before, &::after{
            width: 50%;
            height: 100%;
            position: absolute;
            z-index: -1;
            transition: 1s;
            content: '';
        }

        &:hover, &:focus{
            color: rgb(0, 0, 0);
            &::before, &::after{
                width: 0px;
            }
        }`
    }

`

export const FilteringBtn = ({active, children, onClick}) => {
    return (<FilterBtnStyle active={active} onClick={onClick}>{children}</FilterBtnStyle>);
}