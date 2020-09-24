import "./SignIn.scss";
import React, { Component } from "react";
import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/customButton";
import { auth, signInWithGoogle } from "../../firebase/firebase";
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: "", password: "" });
        }       
        catch(err){
            console.log(err);
        }
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label="Email"
                        type="email"
                        name="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInput
                        label="Password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
