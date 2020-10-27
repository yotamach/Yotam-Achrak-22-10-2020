import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import menuItems from './config/menu';
import {Provider} from 'react-redux';

import AppHeader from './components/header/header';
import AppFooter from './components/footer/footer';
import {Container} from 'semantic-ui-react';
import store from './store/index';
import ErrorPage from './pages/error/error.page';
import NotFoundPage from './pages/notFound/notFound.page';

function App() {

  const getReutes = () => {
    return menuItems.map(item => <Route key={item.name} exact path={item.path}>
      {item.component}
    </Route>);
  }

  return (
      < Provider store={store}>
        <div className="App">
          <Router>
            <AppHeader title={"Weather dashnoard"} initialItem={"weather"}/>
            <Container>
              <Switch>
                {getReutes()}
                <Route key="error" exact path="/error">
                  <ErrorPage />
                </Route>
                <Route path='*' exact component={NotFoundPage} />
              </Switch>
            </Container>
            <AppFooter/>
          </Router>
        </div>
      </Provider>
  );
}

export default App;
