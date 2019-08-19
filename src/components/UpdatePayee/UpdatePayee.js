import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UpdatePayee.css';
import axios from 'axios';


class UpdatePayee extends Component{
    constructor(props){
        super(props);
        this.state={
            editId:props.match.params.idParam,
            payeeData:[]
        }
    }

    componentDidMount(){
        const{editId}=this.state;
        const{payeeData}=this.state;
        var global=this;
        axios.get('http://10.117.189.89:9090/beneficiaryapp/beneficiary/getPayeeById?payeeId='+editId).then((response)=>{
            global.setState({payeeData:response.data});
        }).catch((err)=>{
            console.log(err.response);
        })
    }

    updatePayee=()=>{
        const{payeeData}=this.state;
        //console.log(payeeData);
        var global=this;
        axios.post('http://10.117.189.89:9090/beneficiaryapp/beneficiary/updatePayee',payeeData).then((response)=>{
            console.log(response);
            global.props.history.push('/updateOtp');
        }).catch((err)=>{
            console.log(err);
        })
    }

    handleUpdate=(event)=>{
         const{payeeData}=this.state;
        console.log(event.target.value);
        payeeData[event.target.name]=event.target.value;
        this.setState({payeeData});
    }

    render(){
        return(
            <div className="otptablesize">
                <h4>Update payee details..</h4>
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <td><label>PAYEE NAME </label></td>
                            <td><input type="text"  id="payeeName"  name="payeeName" value={this.state.payeeData.nickName} onChange={this.handleUpdate} name="nickName"/></td>
                        </tr>
                        <tr>
                            <td><label>PAYEE ACCOUNT NUMBER:</label></td>
                            <td><input type="text" id="payeeAccountNumber" name="payeeAccountNumber" value={this.state.payeeData.payeeAccountNo} onChange={this.handleUpdate} name="payeeAccountNo" disabled/></td>
                        </tr>
                        <tr>
                            <td><label>IFSC CODE:</label></td>
                            <td><input type="text"  id="ifscCode" name="ifscCode"value={this.state.payeeData.ifscCode} onChange={this.handleUpdate} name="ifscCode"/></td>
                        </tr>
                        <tr>
                            <td><label>BRANCH NAME:</label></td>
                            <td><input type="text"  id="branchName" name="branchName"value={this.state.payeeData.emailId} onChange={this.handleUpdate} name="emailId"/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button id="btn13" className="btn btn-outline-primary" onClick={this.updatePayee}>Update</button></td>
                        </tr>
                    </tbody>
                </table>;
            </div>
        )
    }
}
export default UpdatePayee;