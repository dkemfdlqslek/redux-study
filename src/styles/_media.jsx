import {css} from 'styled-components';

const devices = {
    MOBILE : '335px',
    TABLET : '768px',
    DESKTOP : '1024px'
}

export const mediaQueries = Object.keys(devices).reduce((accumulator, device) => {
    accumulator[device] = (...args) => css`
        @media (min-width: ${devices[device]}) {
            ${css(...args)};
        }
    `;
    return accumulator;
},
{}
);