import React,{Component} from 'react';
import axios from 'axios';
import './UpdatePayee.css';


class UpdatePayeeOtp extends Component{
    constructor(props){
        super(props);
        this.state={
            otpData:{
                otp:''
            }
        }
    }

    handleOtp=(event)=>{
        const{otpData}=this.state;
        otpData[event.target.name]=event.target.value;
        this.setState({otpData});
        console.log(otpData);
    }

    validateOtp=()=>{
        const{otpData}=this.state;
        console.log(otpData);
        var global=this;
        //this.props.history.push('./addPayee');
        axios.post('http://10.117.189.89:9090/beneficiaryapp/beneficiary/confirmUpdatePayee',otpData).then(function(response){
            alert('updated successfully');
            global.props.history.push('/listPayee');
        }).catch(function(err){
            console.log(err.response);
        })
    }

    render(){
        return(
            <div className="otptablesize">
                <h4 align="center">confirm  payee details!</h4>
                <table className="table table-striped">
                    
                    <tbody>
                        <tr>
                            <td><label>OTP</label></td>
                            <td><input type="number" name="otp" onChange={this.handleOtp}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button id="btn15" className="btn btn-outline-primary" onClick={this.validateOtp}>OK</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default UpdatePayeeOtp;