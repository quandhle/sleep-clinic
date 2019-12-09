import React from 'react';
import MenuBar from './menu';
import Home from './home';
import Footer from './footer'
import './App.scss';

function App() {
    return (
        <div className="App">
            <MenuBar/>
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;
