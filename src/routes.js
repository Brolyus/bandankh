import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Header from './components/Header/Header'
import App from './App'
import Groupe from './components/Groupe/Groupe'
import Footer from './components/Footer/Footer'

const routes = (
        <Router>
            <div>
                <Header />                
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route path='/groupe' component={Groupe} />
                </Switch>
                <Footer />
            </div>
        </Router>
)


export default routes