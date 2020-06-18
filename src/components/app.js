import React, { Component } from 'react';
import moment from "moment";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PortfolioContainer from './portfolio/portfolio-container';
import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import PortfolioDetail from './portfolio/portfolio-detail';
import NoMatch from './pages/no-match';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <h1>Gabriel Segura's Portfolio</h1>
            <div>
              {moment().format("MMMM Do YYYY, h:mm:ss a")}
            </div>
            <NavigationContainer />
            
            <Switch>
              {/* exact path usually used for homepage, it needs to follow that exact address */}
              <Route exact path="/" component={Home} />
              {/* path allows you to be put into any other pages that start with about-me, that come after it */}
              <Route exact path="/about-me" component={About} />
              <Route exact path="/about-me/" component={About} />

              <Route exact path="/contact" component={Contact} />
              <Route exact path="/contact/" component={Contact} />

              <Route exact path="/blog" component={Blog} />
              <Route exact path="/blog/" component={Blog} />

              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>


      </div>
    );
  }
}
