import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import SideBar from './conponent/SideBar';
import Header from './conponent/Header';
import Form from './conponent/Form';
import SubmittedData from './conponent/SubmittedData';
import Add from './conponent/AddProduct'
import AddProduct from './conponent/AddProduct';



 function App () {
  return (
    <>
     <Router>
      <Header/>
      <SideBar/>
      <Routes>
      {/* <Route exact path="/" component={Form} />
      <Route exact path="/submitted-data" component={SubmittedData} /> */}
      <Route exact path="/" component={<Form/>} ></Route>
      {/* <Route exact path="/add" component={<Add/>} ></Route> */}
      {/* <Route path="/add" component={() => <AddProduct    fetchData={fetchData} />} /> */}
        <Route path="/submitted-data" component={<SubmittedData/>} ></Route>
        
      </Routes>
     </Router>

    </>
  )
 }

export default App;
  
