import React from 'react'
import IntroBox from 'components/introBox';
import {Link} from 'react-router-dom';
import 'styles/_Home.scss';

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
      <section className="section-header">
        <h2 className = "greetings">Welcome to Redux World!</h2>
      </section>
      <section className="boxWrapper">
        <IntroBox headline={intro_1.headline} contents={intro_1.contents} />
        <IntroBox headline={intro_2.headline} contents={intro_2.contents} />
        <IntroBox headline={intro_3.headline} contents={intro_3.contents} />
        <IntroBox headline={intro_4.headline} contents={intro_4.contents} />
      </section>
    </React.Fragment>
  );
}

export default Home;