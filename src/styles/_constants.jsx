import {css} from 'styled-components';


export const box_border = {
    TOP : '#d9b0ff',
    LEFT : '#c383ff',
    RIGHT : '#8c28e9',
    BOTTOM : '#450d79'
}

export const Radius = (radius) => css`
-webkit-border-radius: ${radius};
-moz-border-radius: ${radius};
-ms-border-radius: ${radius};
border-radius: ${radius}; 
`;

