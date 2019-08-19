import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import RegisterSuccess from './components/Register/RegisterSuccess';
import Login from "./components/Login/Login";
import FundTransfer from "./components/FundTransfer/FundTransfer";
import BankAccount from "./components/BankAccount/BankAccount";
import ListOfTransaction from "./components/ListOfTransaction/ListOfTransaction";
import AccountSummary from "./components/AccountSummary/AccountSummary";
import AddPayee from './components/AddPayee/AddPayee';
import AddOtpForm from './components/AddPayee/AddOtpForm';
import ListPayee from './components/ListPayee/ListPayee';
import UpdatePayee from "./components/UpdatePayee/UpdatePayee";
import UpdatePayeeOtp from "./components/UpdatePayee/UpdatePayeeOtp";
import DeletePayeeOtp from "./components/ListPayee/DeletePayeeOtp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Register} exact />
          <Route path="/register" component={Register} />
          <Route  path="/registerSuccess" component={RegisterSuccess}/>
          <Route path="/login" component={Login} />
          <Route path="/fundTransfer" component={FundTransfer} />
          <Route path="/bankAccount" component={BankAccount} />
          <Route
            path="/listOfTransaction/:accountNumberParams"
            component={ListOfTransaction}
          />
          <Route
            path="/accountSummary/:accountNumberParams"
            component={AccountSummary}
          />
          <Route path="/addPayee" component={AddPayee}/>
          <Route path="/listPayee" component={ListPayee}/>
          <Route path="/addOtpForm" component={AddOtpForm}/>
          <Route path="/updatePayee" component={UpdatePayee}/>
          <Route path="/updatePayeeOtp" component={UpdatePayeeOtp}/>
          <Route path="/deletePayeeOtp" component={DeletePayeeOtp}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
