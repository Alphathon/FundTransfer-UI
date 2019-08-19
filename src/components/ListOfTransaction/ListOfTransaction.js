import React, { Component } from "react";
import axios from "axios";

class ListOfTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      accountNumberParams: props.match.params.accountNumberParams
    };
  }
  componentDidMount() {
      console.log("c\componentDidMount")
    const { list } = this.state;
    this.getData().then(response => {
      console.log(response.data);
      this.setState({ list: response.data });
      console.log(list, "divyaaa");
    });
  }
  getData = () => {
    return new Promise((resolve, reject) => {
      console.log(this.props.match.params.accountNumberParams, "asdfg");
      axios
        .get(
          "http://10.117.189.127:9090/fundtrasfer/api/viewTransactions/" +
            this.props.match.params.accountNumberParams
        )
        .then(function(response) {
          resolve(response);
          console.log(response);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  };

  handleAccountSummary=()=>{
    var  accountNo =localStorage.getItem("accountNumber");
    this.props.history.push('/accountSummary/'+accountNo);
  }
  render() {
    return (
      <div>
          <button  id="btn23"className="btn btn-outline-primary"  onClick={this.handleAccountSummary}>Account Summary</button>
          <button id="btn24" className="btn btn-outline-primary" onClick={this.logout}>
          logout
        </button>
         
        <h5>LIST OF TRANSACTIONS</h5>
        
        <table class="table">
          <thead>
            <tr>
              <th scope="col">TRANSACTION ID</th>
              <th scope="col">TO ACCOUNT NUMBER</th>
              <th scope="col">TRANSACTION AMOUNT</th>
              <th scope="col">TRANSACTION DATE</th>
              <th scope="col">TRANSACTION TYPE</th>
              <th scope="col">CLOSING BALANCE</th>
              <th scope="col">REMARKS</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.transactionId}</td>
                  <td>{item.toAccountNo}</td>
                  <td>{item.amount}</td>
                  <td>{item.creationDate}</td>
                  <td>{item.transactionType}</td>
                  <td>{item.closingBalance}</td>
                  <td>{item.comment}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ListOfTransaction;
