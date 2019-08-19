import React,{Component} from 'react';
import axios from 'axios';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            loginData:{
                accountNumber:'',
                password:''
            }
        }
    }
    handleChange = (event) => {
        const { loginData} = this.state;
        loginData[event.target.name] = event.target.value;
        this.setState({ loginData });
    }

    handleLogin = () => {
            const{loginData}=this.state; 
            axios.put('http://10.117.189.127:9090/fundtrasfer/api/login', loginData).then((response)=> {
                console.log(response);
                localStorage.setItem("accountNumber",loginData.accountNumber);
                localStorage.setItem("customerId",response.data.customerId);
                alert("login successfull");
                this.props.history.push('/bankAccount');
                
            }).catch((error)=> {
                console.log(error);
                alert("invalid user");
            });

    }
    render(){
        return(
            <div>
                    <form >
                        <h2 align="center">CUSTOMER LOGIN</h2>
            <div className="form-group  form1">
              <label >ACCOUNT NUMBER</label>
              <input type="number" className="form-control " id="accountNumber" name="accountNumber" placeholder="Enter the Account number" onChange={this.handleChange}/>      
            </div>
            <div class="form-group form1">
              <label >PASSWORD</label>
              <input type="password" className="form-control" id="password" name="password" placeholder="Enter the password" onChange={this.handleChange}/>      
            </div>
            </form>
            <button  id="btn1" className="btn btn-outline-primary" onClick={this.handleLogin}>LOGIN</button>
        
            </div>
        )
    }

}
export default Login;


