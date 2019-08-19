import React,{Component} from 'react';
import axios from 'axios';
import './AccountSummary.css';

class AccountSummary extends Component{
    constructor(props){
    super(props);
    this.state={
        accountSummary:[]
    }
}

componentDidMount() {
     
    this.getData().then(response => {
        console.log(response.data)
      this.setState({ accountSummary: [response.data] });
    });


  }
  getData = () => {
    var  accountNo =localStorage.getItem("accountNumber");
   
    return new Promise((resolve, reject) => {
      axios.get('http://10.117.189.127:9090/fundtrasfer/api/viewAccountSummary/'+accountNo).then(function (response) {
        resolve(response);
      console.log(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  }
  logout=()=>{
      this.props.history.push('/login');
  }
  handlefundTransfer=()=>{
    var  accountNo =localStorage.getItem("accountNumber");
      this.props.history.push('/fundTransfer/'+accountNo);
  }
  handleListOfTransaction=()=>{
    var  accountNo =localStorage.getItem("accountNumber");
    this.props.history.push('/listOfTransaction/'+accountNo);

  }
render(){
    return(
        <div>
           
        <h5>ACCOUNT SUMMARY</h5>
        <h6>Please find the account details</h6>
        <button id="btn20" className="btn btn-outline-primary" onClick={this.handlefundTransfer}>FundTransfer</button>
        <button id="btn21" className="btn btn-outline-primary" onClick={this.handleListOfTransaction}>List of transaction</button>
        <button  id="btn22"className="btn btn-outline-primary btn11" onClick={this.logout}>logout</button>
        
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ACCOUNT NUMBER</th>
                    <th scope="col">CLOSING BALANCE</th>
                   

                </tr>
            </thead>
                <tbody>

                    {this.state.accountSummary.map((item,i)=>{
                        return(
                            <tr key={i}>
                                <td>{item.accountNumber}</td>
                                <td>{item.closingBalance}</td>
                                
                               

                             </tr>
                         )

                     })}



                 </tbody>
            </table>
    </div>
    )
} 
}
export default AccountSummary;