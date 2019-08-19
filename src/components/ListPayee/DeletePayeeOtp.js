import React,{Component} from 'react';
import axios from 'axios';
import './ListPayee.css';

class DeletePayeeOtp extends Component{
    constructor(props){
        super(props);
        this.state={
            otpData:{
                payeeId:'',
                otp:''
            },
            deleteId:props.match.params.delId
        }
    }

    handleOtp=(event)=>{
        const{otpData}=this.state;
        otpData[event.target.name]=event.target.value;
        this.setState({otpData});
        console.log(otpData);
    }

    validateOtp=(event)=>{
        const{otpData}=this.state;
        console.log(otpData);
        var g=this;
        axios.post('http://10.117.189.89:9090/beneficiaryapp/beneficiary/confirmPayee',otpData).then(function(response){
            //alert('delete is successful');
            console.log(response)
;            g.props.history.push('/listPayee');
        }).catch(function(err){
            console.log(err);
        })
    }

    render(){
        return(
            <div className="otptablesize">
                <h4>Confirm Delete Payee..</h4>
                <table className="table table-striped">
                    <tbody>
                        
                        <tr>
                            <td><label>OTP</label></td>
                            <td><input type="number"  id="otp" name="otp" onChange={this.handleOtp}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button id="btn16" className="btn btn-outline-primary"  onClick={this.validateOtp}>OK</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default DeletePayeeOtp;