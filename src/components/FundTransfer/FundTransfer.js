import React,{Component} from 'react';
import axios from 'axios';
import './FundTransfer.css';


class FundTransfer extends Component{
    constructor(props){
        super(props);
       
        this.state={
            fundTransfer:{
                fromAccountNumber:'',
                toAccountNumber:'',
                ammount:'',
                comment:''
            },
            accountNo :localStorage.getItem("accountNumber")
            }
            this.handleChange=this.handleChange.bind(this);
            this.handleTransfer=this.handleTransfer.bind(this);
            
        }
    
   
    handleChange = (event) => {
        const { fundTransfer} = this.state;
        fundTransfer[event.target.name] = event.target.value;
        this.setState({ fundTransfer });
    }

    handleTransfer = () => {
       var  accountNo =localStorage.getItem("accountNumber");
        const{fundTransfer}=this.state;      
        axios.post('http://10.117.189.127:9090/fundtrasfer/api/fundtransfer', fundTransfer).then(function (response) {
            console.log(response);
            alert(response.data.message);
            this.props.history.push('/listOfTransaction/'+accountNo);
            
        }).catch(function (error) {
            console.log(error);
            alert(error.response.data.message); 
        });

    }
    handleTransactions=()=>{
        var  accountNo =localStorage.getItem("accountNumber");
        this.props.history.push('/listOfTransaction/'+accountNo);

    }
    handleSummary=()=>{
        var  accountNo =localStorage.getItem("accountNumber");
        this.props.history.push('/accountSummary/'+accountNo);

    }

   
  
    render(){
        return(
            <div>
                <button id="btn6" className="btn btn-outline-primary"  onClick={this.handleTransactions}>TRANSACTIONS</button>
                <button id="btn7" className="btn btn-outline-primary" onClick={this.handleSummary}>ACCOUNT SUMMARY</button>
                <div className="tablesize">
                <form>
                <h3>FUND TRANSFER</h3>
                <table className="table table-striped">
                <tbody>
                    <tr>
                        <td><label>TO ACCOUNT NUMBER:</label></td>
                        <td><input type="number"  id="toAccountNumber" name="toAccountNumber" placeholder="Enter the to account number" onChange={this.handleChange} required/></td>
                    </tr>
                    <tr>
                        <td><label>AMOUNT:</label></td>
                        <td><input type="number" id="amount" name="amount" placeholder="Enter the amount" required onChange={this.handleChange}/></td>
                    </tr>
                    <tr>
                        <td><label>COMMENTS:</label></td>
                        <td><input type="text" id="comment" name="comment" placeholder="Enter the comments" required onChange={this.handleChange}/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>   <button id="btn5" className="btn btn-outline-primary" onClick={this.handleTransfer}>TRANSFER</button></td>
                    </tr>
                    </tbody>
                </table>
                </form>
            </div>
            </div>
        )
    }
}
export default FundTransfer;
