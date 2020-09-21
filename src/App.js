import './App.css'
import React from 'react'
import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shop/Shop'
import {Route, Switch} from 'react-router-dom'
import Header from './components/header/Header'
import SignInAndSignUp from './pages/signInAndSignUp/SignInAndSignUp'
import {auth} from './firebase/firebase'
class App extends React.Component {
    constructor(props) {
        super();

        this.state = {
            currentUser:null
        }
    }

    unsubscribeFromAuth = null

    componentDidMount(){
       this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
            this.setState({currentUser:user})
            console.log(user);
        })
    }

    componentWillUnmount(){
        this.unsubscribeFromAuth()
    }
    render(){
    return (
        <div>
            <Header currentUser={this.state.currentUser} />
            <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInAndSignUp} /> 
            </Switch>
        </div>
    )
}
}
export default App
