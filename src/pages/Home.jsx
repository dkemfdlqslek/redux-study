import React from 'react'
import IntroBox from 'components/introBox';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {headerFadeIn, Radius, box_border, boxFadeIn} from 'styles/_constants';
import {mediaQueries} from 'styles/_media';


export const SectionHeader = styled.section`
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: bold;
  animation: ${headerFadeIn} alternate 0.7s ease-out;

  ${mediaQueries.TABLET`
    font-size: 2.4rem;
  `}

  ${mediaQueries.DESKTOP`
    font-size: 3.6rem;
  `}
`;

export const BoxWrapper = styled.section`
  opacity: 0;
  width:95%;
  margin: auto;
  ${Radius('5px')};
  animation: ${boxFadeIn} 0.5s forwards 0.8s ease-out;
  border-width: 4px;
  border-style: solid;
  border-color: ${box_border.TOP} ${box_border.RIGHT} ${box_border.BOTTOM} ${box_border.LEFT};

  ${mediaQueries.TABLET`
    width: 85%;
  `}

  ${mediaQueries.DESKTOP`
    font-size: 80%;
  `}

`;

const Home = () => {

  const intro_1 = {
    headline: "1. What's Redux?",
    contents: [
        "● Redux is typically used to managing state in React.",
        "● This is state-management library!" 
    ]
  };

  const intro_2 = {
    headline: "2. When use Redux?",
    contents: [
        "● if your React project too big to managing states directly, Redux provides storage for them.",
        "● then your project will be cleaned from mass of dirty defined states, and some complicated logics.",
        "● Redux can help your project saparating data and component!"
    ]
  }

  const intro_3 = {
    headline: "3. How to use Redux?",
    contents: [
        "● you can download Redux from node-js package manager-npm, yarn, deno, something else.",
        "● then import Redux. that's it!",
        "● there are some useful ways to use Redux. let's look out simple examples."
    ]
  }

  const intro_4 = {
    headline: "Let's see about some examples.",
    contents: [
        <Link to='/Counter'>Counter app</Link>,
        <Link to='/Todo'>Todo app</Link>
    ]
  }

  
  return(
    <React.Fragment>
      <SectionHeader>
        <SectionTitle>Welcome to Redux World!</SectionTitle>
      </SectionHeader>
      <BoxWrapper>
        <IntroBox contents = {[intro_1, intro_2, intro_3, intro_4]}/>
      </BoxWrapper>
    </React.Fragment>
  );
}

export default Home;