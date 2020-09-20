import './App.css'
import React from 'react'
import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shop/Shop'
import {Route, Switch} from 'react-router-dom'
function App() {
    return (
        <div>
            <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route path='/shop' component={ShopPage} />

            </Switch>
        </div>
    )
}

export default App
