import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home'
import Portfolio from './Portfolio'
import Contact from './Contact'
import About from './About'
import Header from './Header';

const Navigation = () => {
    return (
        <Router>
            
            <Header />
            
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />

            </Switch>

            

        </Router>
    )
}



export default Navigation;