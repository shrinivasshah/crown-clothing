import "./App.css";
import React from "react";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/Shop";
import { Route, Switch,Redirect } from "react-router-dom";
import Header from "./components/header/Header";
import SignInAndSignUp from "./pages/signInAndSignUp/SignInAndSignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user-actions'
class App extends React.Component {
    
    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapShot) => {
                    this.setState(
                        {
                            currentUser: {
                                id: snapShot.id,
                                ...snapShot.data(),
                            },
                        });  
                });
            }
            setCurrentUser(userAuth)
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/signin" render={()=>this.props.currentUser?(<Redirect to='/'/>):<SignInAndSignUp/>} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) =>({
    currentUser: state.user.currentUser
})


const mapDispatchToProps = (dispatch) =>({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
