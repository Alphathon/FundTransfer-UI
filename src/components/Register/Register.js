import React,{Component} from 'react';
import axios from 'axios'
import  './Register.css';
;
class Register extends Component{

    constructor(props){
        super(props);
        this.state={
            registerData:{
                firstName:'',
                lastName:'',
                mobileNumber:'',
                password:'',
                confirmPassword:''
            },
            fields:{},
            errors:{}
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleRegister=this.handleRegister.bind(this);
    };
    
    handleChange = (event) => {
        const { fields,registerData} = this.state;
        registerData[event.target.name] = event.target.value;
        fields[event.target.name]=event.target.value;
        this.setState({fields,registerData });
    }

        handleRegister = (e) => {
          e.preventDefault();
          if (this.validateForm()) {
            let fields = {};
            fields["firstName"] = "";
            fields["lastName"] = "";
            fields["mobileNumber"] = "";
            fields["password"] = "";
            fields["confirmPassword"]="";
            this.setState({fields:fields});
        
            const{registerData}=this.state;        
            axios.post('http://10.117.189.127:9090/fundtrasfer/api/registration', registerData).then((response)=> {
                console.log(response);
             
                this.props.history.push('/registerSuccess');
            }).catch((error)=> {
                console.log(error);
            });
          }

}
validateForm() {

  let fields = this.state.fields;
  let errors = {};
  let formIsValid = true;

  if (!fields["firstName"]) {
    formIsValid = false;
    errors["firstName"] = "*Please enter your firstName.";
  }

  if (typeof fields["firstName"] !== "undefined") {
    if (!fields["firstName"].match(/^[a-zA-Z ]*$/)) {
      formIsValid = false;
      errors["firstName"] = "*Please enter alphabet characters only.";
    }
  }
  if (!fields["lastName"]) {
    formIsValid = false;
    errors["lastName"] = "*Please enter your lastName.";
  }

  if (typeof fields["lastName"] !== "undefined") {
    if (!fields["lastName"].match(/^[a-zA-Z ]*$/)) {
      formIsValid = false;
      errors["lastName"] = "*Please enter alphabet characters only.";
    }
  }

    if (!fields["mobileNumber"]) {
    formIsValid = false;
    errors["mobileNumber"] = "*Please enter your mobile no.";
  }

  if (typeof fields["mobileno"] !== "undefined") {
    if (!fields["mobileNumber"].match(/^[0-9]{10}$/)) {
      formIsValid = false;
      errors["mobileNumber"] = "*Please enter valid mobile no.";
    }
  }

  if (!fields["password"]) {
    formIsValid = false;
    errors["password"] = "*Please enter your password.";
  }

  if (typeof fields["password"] !== "undefined") {
    if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
      formIsValid = false;
      errors["password"] = "*Please enter secure and strong password.";
    }
  }


  if (fields["confirmPassword"] !==fields["password"]) {
    formIsValid = false;
    errors["confirmPassword"] = "*Please enter the correct password.";
  }

  
  this.setState({
    errors: errors
  });
  return formIsValid;


}

    render(){
        return(
            <div>
                <form >
            <div class="form-group  form1">
              <label >FIRST NAME</label>
              <input type="text" className="form-control " value={this.state.fields.firstName} id="firstName" name="firstName" placeholder="Enter the first name" onChange={this.handleChange}/>    
              <div className="errorMsg">{this.state.errors.firstName}</div>  
            </div>
            <div class="form-group form1">
              <label >LAST NAME</label>
              <input type="text" className="form-control"  value={this.state.fields.lastName}id="lastName" name="lastName" placeholder="Enter the Last Name" onChange={this.handleChange}/>  
              <div className="errorMsg">{this.state.errors.lastName}</div>    
            </div>
            <div class="form-group form1">
              <label >MOBILE NUMBER</label>
              <input type="number" className="form-control" value={this.state.fields.mobileNumber} id="mobileNumber" name="mobileNumber" placeholder="Enter the Mobile Number" onChange={this.handleChange}/>   
              <div className="errorMsg">{this.state.errors.mobileNumber}</div>   
            </div>
            <div class="form-group form1">
              <label>PASSWORD</label>
              <input type="password" className="form-control"  value={this.state.fields.password} id="password" name="password" placeholder="Enter the Password" onChange={this.handleChange}/> 
              <div className="errorMsg">{this.state.errors.password}</div>     
            </div>
            <div class="form-group form1">
              <label> CONFIRM PASSWORD</label>
              <input type="password" className="form-control"  value={this.state.fields.confirmPassword} id="confirmPassword" name="confirmPassword" placeholder="Enter the  confirmed Password" onChange={this.handleChange}/>  
              <div className="errorMsg">{this.state.errors.confirmPassword}</div>    
            </div>
          </form>
          <button id="btn2" className="btn btn-outline-primary" onClick={this.handleRegister}>REGISTER</button>
          </div>
        )
    }
}
export default Register;