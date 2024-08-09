import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Setting from './Setting';
import Product from './Product';
import Article from './Article';
import Report from './Report';
import institution from './Institution'
import Home from './Home';
import './Style.css';
import Dashboard from './Dashboard';
import Institution from './Institution';
import Profile from './Profile';
import Logout from './Logout'
import AddProduct from './AddProduct';
function SideBar() {
  return (
    <>
      <div className='row'>
        <div className="col-md-3" style={{marginTop: '69px', width: '18%', backgroundColor: '#fff'}}>
        <div className="nav-option option1" style={{backgroundColor: '#3F0097', textDecoration: 'none'}}>
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
          class="nav-img" alt="dashboard" />
        <h3> <Link to='/Dashboard' style={{color: 'orange'}}>Dashborad</Link> </h3>
      </div>
      <div className="option2 nav-option">
        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/fu-jia-intranet/product-29.png"
          className="nav-img"
          alt="articles"
        />
        <h3> <Link to='/Product'>Product</Link> </h3>
      </div>
      <div className="option2 nav-option">
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
          className="nav-img"
          alt="articles"
        />
        <h3> <Link to='/Article'>Article</Link> </h3>
      </div>
      <div className="nav-option option3">
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
          className="nav-img"
          alt="report"
        />
        <h3> <Link to='/Report'>Report</Link> </h3>
      </div>
      <div className="nav-option option4">
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
          className="nav-img"
          alt="institution"
        />
        <h3> <Link to='/institution'>Institution</Link> </h3>
      </div>
      <div className="nav-option option5">
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
          className="nav-img"
          alt="blog"
        />
        <h3> <Link to='/Profile'>Profile</Link> </h3>
      </div>
      <div className="nav-option logout">
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
          className="nav-img"
          alt="logout"
        />
        <h3> <Link to='/Logout'>Logout</Link> </h3>
      </div>
      <div className="nav-option option6">
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/4.png"
          className="nav-img"
          alt="settings"
        />
        <h3> <Link to='/setting'>Settings</Link> </h3>
      </div>
        </div>
        <div className="col-md-9" style={{marginTop: '87px', width: '81%'}}>
        {/* main content */}
        
        <div>
       <Routes>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/Article' element={<Article/>}/>
          <Route path='/report' element={<Report/>}/>
          <Route path='/institution' element={<Institution/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path="/setting" element={<Setting/>}/>
          <Route path="/add"  element={<AddProduct/>}></Route>
        </Routes>
      </div>
      </div>
      </div>

    </>
  )
}
export default SideBar