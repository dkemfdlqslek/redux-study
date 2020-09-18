import React from 'react';
import styled, { css } from 'styled-components';
import {box_border, Radius, introFont, boxFadeIn} from 'styles/_constants';
import {mediaQueries} from 'styles/_media';




const fadeBoxDelay = () => {
    let styles = '';
    for (let i = 1; i < 5; i++){
        styles += `
            &:nth-of-type(${i}){
                animation-delay: ${1 + (i * 0.3)}s;
            }
        `
    }
    return css`${styles}`;
}

const IntroBoxing = styled.article`
    opacity: 0;
    margin: 1rem;
    padding: 0.25rem 0.5rem;
    line-height: 1.5em;
    border-width: 2px;
    border-style: solid; 
    border-color: ${box_border.TOP} ${box_border.RIGHT} ${box_border.BOTTOM} ${box_border.LEFT};
    ${Radius('5px')};

    font-weight: bold;
    font-family: ${introFont};

    animation-name: ${boxFadeIn};
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
    ${fadeBoxDelay()};

    dt{
        font-size: 1.2rem;
    }
    dd{
        font-size: 1rem;
        &:last-child{
            color:#ab6cf3;
        }  
    }

    ${mediaQueries.TABLET`
        margin: 1.5rem;
        padding: 0.35rem 0.75rem;
        line-height: 2em;

        dt{
            font-size:1.5rem;
        }

        dd{
            font-size:1.2rem;
        }
    `}

    ${mediaQueries.DESKTOP`
        margin: 2rem;
        padding: 0.5rem 1rem;
        line-height: 2.5em;

        dt{
            font-size:1.8rem;
        }

        dd{
            font-size:1.3rem;
        }
    `}

`;



const Headline = props => {
    return(
        <dt>
            {props.headline}
        </dt>
    );
}

const Content = props => {
    return(
        <dd>
            {props.content}
        </dd>    
    );
}

const ContentBox = props => {
    const {contents} = props;
    return(
        contents.map((content, index) => {
          return  (
          <Content key={index} content={content} />
          )
        })
    )
}

const IntroBox = props => {
    
    return (
        <IntroBoxing>
            <dl>
                <Headline headline={props.headline} />
                <ContentBox contents={props.contents}/>
            </dl>
        </IntroBoxing>
    )
};


export default IntroBox;