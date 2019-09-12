import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {signin, authenticate} from '../auth';

class Signin extends Component {

    constructor(props){
        super(props);
        this.state ={
            email: "",
            password: "",
            error: "",
            rederectToReferer: false,
            loading: false
        }
    }

    handleChange = (name) => event =>{
        this.setState({error: ""})
        this.setState({ [name]: event.target.value });
    }

    clickSubmit = (event) =>{
        event.preventDefault();
        this.setState({ loading: true})
        const {email, password} = this.state;
        const user = {
            email, 
            password
        }
        console.log(user);
        signin(user)
        .then((data) => {
            if(data.error){
                this.setState({
                    error: data.error,
                    loading: false
                })
            } else {
                //authenticate
                authenticate(data, () =>{
                    this.setState({ rederectToReferer: true})
                })
            }
        })
    }


    render() {
        const {email, password, error, rederectToReferer} = this.state;
        
        if(rederectToReferer){
            return <Redirect to="/" />
        }
        
        
        return (
            <div className="container">
               <h2 className="mt-5 mb-5">Sign In</h2>

                <div 
                    className="alert alert-primary"
                    style={{display: error ? "" : "none"}}
                    >
                        {error}
                </div>

                {this.loading ?( <div className="jumbotron text-center">
                    <h2>Loading...</h2>
                </div>) :("")}

               <form>
                   {/* email */}
                   <div className="form-gorup">
                    <label className="text-muted">Email: </label>
                    <input 
                        onChange={this.handleChange("email")} 
                        type="email" 
                        className="form-control" 
                        value={email}
                    />
                   </div>
                   {/* password */}
                   <div className="form-gorup">
                    <label className="text-muted">Password: </label>
                    <input 
                        onChange={this.handleChange("password")} 
                        type="password" 
                        className="form-control" 
                        value={password}
                        />
                   </div>
                   <button 
                    className="btn btn-raised btn-primary mt-3"
                    onClick={this.clickSubmit}
                    >
                        Sign In
                    </button>

               </form>
            </div>
        )
    }
}

export default Signin;