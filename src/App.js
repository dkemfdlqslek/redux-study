import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Home, Counter} from 'pages/index';
import {NavButton} from 'components/navBtn';
import 'styles/_App.scss';



const App = ({store}) => {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <header>
          <nav>
            <ul>
              <li><NavButton link="/" name="HOME"/></li>
              <li><NavButton link="/Counter" name="COUNTER"/></li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Counter" component={Counter}/>
          </Switch>
        </main>
      </BrowserRouter>
    </Provider>
  );  
}

export default App;
