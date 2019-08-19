import React, { Component } from "react";
import FundTransfer from "../FundTransfer/FundTransfer";
import ListOfTransaction from "../ListOfTransaction/ListOfTransaction";
import AccountSummary from "../AccountSummary/AccountSummary";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class BankAccount extends Component {
    constructor(props){
        super(props);
        this.state={
            accountNo:localStorage.getItem("accountNumber")
        }
    }
  render() {
    return (
      <div>
        <div align="center">
          <button id="btn16" className="btn btn-outline-primary">
            <Link to="/fundTransfer">
              FUND TRANSFER
              <br />
            </Link>
          </button>
          <button id="btn17" className="btn btn-outline-primary">
            <Link to="/addPayee">
              ADD PAYEE
              <br />
            </Link>
          </button>
          <button id="btn18" className="btn btn-outline-primary">
          <Link to={`/listOfTransaction/${this.state.accountNo}`}>
              LIST OF TRANSACTION
              <br />
            </Link>
          </button>
          <button  id="btn19" className="btn btn-outline-primary">
            <Link to={`/accountSummary/${this.state.accountNo}`}>
              ACCOUNT SUMMARY
              <br />
            </Link>
          </button>
        </div>
      </div>
    );
  }
}
export default BankAccount;
