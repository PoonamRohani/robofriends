import React from 'react';
import CardList from './CardList'
import {robots} from './robots.js'

const App = () => {
    return (
        <div className="tc">
            <h1>RoboFriends</h1>
            <CardList robots = {robots}></CardList>
        </div>
        
    )
}

export default App;