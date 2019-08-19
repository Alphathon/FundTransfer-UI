import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './AddPayee.css';

class AddPayee extends Component{
    constructor(props){
        super(props);
        this.state={
            payeeData:{
                payeeName:'',
                payeeAccountNumber:'',
                ifscCode:'',
                branchName:''
            }
      }
    }

    handleChange=(event)=>{
        const{payeeData}=this.state;
        payeeData[event.target.name]=event.target.value;
        this.setState({payeeData});
    }

    addPayee=()=>{
        const{payeeData}=this.state;
        var global = this;
        axios.post('http://10.117.189.89:9090/beneficiaryapp/beneficiary/addPayee',payeeData).then((response)=>{
            console.log(response,'divyaa');
            global.props.history.push('./otpForm')
        }).catch((err)=>{
            
            alert(err);
        })
    }

    render(){
        return(
            <div className="tablesize">
                <form>
                <h3>ADD PAYEE</h3>
                <table className="table table-striped">
                <tbody>
                    <tr>
                        <td><label>PAYEE NAME:</label></td>
                        <td><input type="number"  id="payeeName" name="payeeName"  placeholder="please enter the payee name" onChange={this.handleChange} required/></td>
                    </tr>
                    <tr>
                        <td><label>PAYEE ACCOUNT NUMBER:</label></td>
                        <td><input type="text" id="payeeAccountNumber" name="payeeAccountNumber"  placeholder="please enter payee account number" required onChange={this.handleChange}/></td>
                    </tr>
                    <tr>
                        <td><label>IFSC CODE :</label></td>
                        <td><input type="text" id="ifscCode" name="ifscCode" placeholder="please enter the ifsc code" required onChange={this.handleChange}/></td>
                    </tr>
                    <tr>
                        <td><label>PAYEE ACCOUNT NUMBER:</label></td>
                        <td><input type="text" id="branchName" name="branchName"  placeholder=" pleace enter the branch name" required onChange={this.handleChange}/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><button  id="btn10" className="btn btn-outline-primary" onClick={this.addPayee}>Add Payee</button></td>
                    </tr>
                    </tbody>
                </table>
                </form>
            </div>
        );
    }
}
export default AddPayee;