import React from 'react';
import 'styles/_introBox.scss';

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
        <article className='introBox'>
            <dl>
                <Headline headline={props.headline} />
                <ContentBox contents={props.contents}/>
            </dl>
        </article>
    )
};


export default IntroBox;