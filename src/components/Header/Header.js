import React,{Component}  from 'react';
import ing from './ing.jpg';
import './Header.css';
class Header extends Component{
    render(){  
        return(
            <div>
                 <ul>
                        <li><img src={ing} width="120px" height="120px"/></li>
                         <li className="titlespace"><h2 className="title"><b>ING RUBIK's BANKING PLATFORM</b></h2></li>
                         <li>
                            <div className="dropdown">
                         <select  id="dropdown" onChange={this.handleSelect}>
                                <option value="en">English</option>
                              <option value="sp">Spanish</option>
                         </select>
                         </div>
                        </li>
                     </ul>
             </div>
         )
     }
 }
 export default Header;
