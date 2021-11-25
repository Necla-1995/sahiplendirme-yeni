import React from 'react';
import './index.css';
import HayvanListesi from './HayvanListesi';
import HayvanContext from '../context/HayvanContext';

class App extends React.Component{
render(){
    return <div>
        <HayvanContext>
        <HayvanListesi/>
        </HayvanContext>
        </div>
}
}

export default App;