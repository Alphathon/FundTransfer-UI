import React,{Component} from 'react';
import axios from 'axios';
import './AddPayee.css';

class AddOtpForm extends Component{
    constructor(props){
        super(props);
        this.state={
            otpData:{
                otp:'',
                accountNo:'1'
            }
        }
    }

    handleOtp=(event)=>{
        const{otpData}=this.state;
        otpData[event.target.name]=event.target.value;
        this.setState({otpData});
    }

    validateOtp=()=>{
        const{otpData}=this.state;
        var global=this;
        axios.post('http://10.117.189.89:9090/beneficiaryapp/beneficiary/confirmAddPayee',otpData).then(function(response){
            console.log(response);
            if(response.data.statusCode!==400){
            global.props.history.push('/listPayee');
        }
        }).catch(function(err){
            alert(err);
            window.location.reload();
        })
    }

    render(){
        
        return(
            <div className="otptablesize">
                <h4> Confirm Payee!</h4>
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <td><label>OTP</label></td>
                            <td><input type="number" id="otp" name="otp" onChange={this.handleOtp}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button id="btn13" className="btn btn-outline-primary" onClick={this.validateOtp}>OK</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default AddOtpForm;