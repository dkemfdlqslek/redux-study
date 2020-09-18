import {css, keyframes} from 'styled-components';


export const box_border = {
    TOP : '#d9b0ff',
    LEFT : '#c383ff',
    RIGHT : '#8c28e9',
    BOTTOM : '#450d79'
}

export const introFont = ' Cambria, Cochin, Georgia, Times, "Times New Roman", serif;';

export const Radius = (radius) => css`
-webkit-border-radius: ${radius};
-moz-border-radius: ${radius};
-ms-border-radius: ${radius};
border-radius: ${radius}; 
`;

export const boxFadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to{
        opacity: 1;
        transform: translateY(0px);
    }
`;
