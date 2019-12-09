import React from 'react';
import MenuBar from './menu';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Login from './pages/login';
import NewPatient from './pages/newPatient';
import NotFound from './pages/notFound';
import Press from './pages/press';
import Services from './pages/services';
import Footer from './footer'
import './App.scss';

const App = props => {
    // console.log(props);
    // debugger;
    // const currentPath = this.context.router.getCurrentPathname();

    return (
        <div className="App">
            <MenuBar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/login' component={Login}/>
                <Route path='/new_patient' component={NewPatient}/>
                <Route path='/press' component={Press}/>
                <Route path='/services' component={Services}/>
                <Route component={NotFound}/>
            </Switch>
            <Footer/>
            {/* {currentPath !== '/login' ? <Footer/> : null} */}
        </div>
    );
}

export default App;
