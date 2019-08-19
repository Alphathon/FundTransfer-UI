import React,{Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import edit from './edit.png';
import del from './delete.png';

class ListPayee extends Component{
    constructor(props){
        super(props);
        this.state={
            list: []
        }
    }

    componentDidMount(){
        const{payeeList}=this.state;
        var global = this;
        axios.get('http://10.117.189.89:9090/beneficiaryapp/beneficiary/getPayeeList').then(function(response){
             console.log(response.data);
             global.setState({list: response.data.payeeList})
         }).catch(function(err){
             console.log(err.response)
         })
    }

    deletePayee=(itm)=>{
        let payeeId=itm.payeeId;
        console.log(payeeId);
        var global=this;
        axios.delete('http://10.117.189.89:9090/beneficiaryapp/beneficiary/deletePayee/?payeeeId='+payeeId).then(function(response){
             global.props.history.push('./deleteOtp/'+payeeId)
             console.log(response);
        }).catch(function(err){
            console.log(err.response);
        })
    }

    editPayee=(info)=>{
        this.props.history.push('/updatePayee/'+info.payeeId)
    }

    render(){
        return(
            <div>
                <h4>List of Payees!</h4>
                <table className="table table-striped">
                    <thead>
                    <tr><th><b>PAYEE NAME</b></th>
                    <th><b>PAYEE ACCOUNT NUMBER</b></th>
                    <th><b>IFSC CODE</b></th>
                    <th><b>BRANCH NAME</b></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.list.map((item, i)=> {
                            return ( 
                                <tr  key={i}>
                                    <td>{item.payeeName}</td>
                                    <td>{item.payeeAccountNumber}</td>
                                    <td>{item.ifscCode}</td>
                                    <td>{item.branchName}</td>
                                    <td><button id="btn11" className="btn btn-outline-primary" onClick={()=>{this.editPayee(item)}}><img src={edit} width="20px" height="20px"/></button><span/>
                                        <button id="btn12" className="btn btn-outline-primary"onClick={()=>{this.deletePayee(item)}}><img src={del} width="20px" height="20px"/></button></td>
                                </tr>
                                )
                        })
                    }
                       
                    </tbody>
                </table>
            </div>
        );
    }
}
export default ListPayee;