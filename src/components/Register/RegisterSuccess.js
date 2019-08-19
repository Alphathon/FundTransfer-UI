import React,{Component} from 'react';

class RegisterSuccess extends Component{


    handleLogin=()=>{
        this.props.history.push('./login');
    }
    render(){
        return(
            <div>
                <h1>Customer registered successfully!!!!</h1>
                <button className="btn btn-outline-primary" onClick={this.handleLogin}>LOGIN</button>
            </div>
        )
    }
}
export default RegisterSuccess;
