import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import App from './App'
import Groupe from './components/Groupe/Groupe'
import OurDates from './components/OurDates/OurDates'
import Medias from './components/Medias/Medias'
import Footer from './components/Footer/Footer'

const routes = (
        <Router>
                <Header />                
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route path='/groupe' component={Groupe} />
                    <Route path='/nosdates' component={OurDates} />
                    
                    <Route path="/medias" component={Medias}/>
                </Switch>
                <Footer />
        </Router>
)


export default routes