// import React, { useState, useEffect } from 'react';
// import { Link, Route, Routes } from 'react-router-dom';
// import AddProduct from './AddProduct';

// const Form = () => {

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(json => {
//       setData(json)
//     });
//   }, []);

//   return (
//     <div className="container">
//       <div className='row'>
//           <div className='col text-end'>
//             <Link to='/add' className='btn btn-info'>Add New Product</Link>
//           </div>
//       </div>
//       {/* <div>
//         <Routes>
//           <Route path="/add"  element={<AddProduct/>}></Route>
//         </Routes>
//       </div> */}

//       <table className="table w-100"> 
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Image</th>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Brand</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data?.products?.map((product, index) => (
//             <tr key={index}>
//               <td>{product.id}</td>
//               <td><img src={product.thumbnail} className="img-thumbnail w-50"/></td>
//               <td>{product.title}</td>
//               <td>{product.description}</td>
//               <td>{product.brand}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
    

  
//   );
// };

// export default Form;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(json => {
        setData(json);
      });
  }, []);

  const deleteProduct = (id) => {
    // Filter out the product with the specified id
    const updatedData = data.products.filter(product => product.id !== id);
    setData({ ...data, products: updatedData });
  };

  return (
    <div className="container">
      <div className='row'>
        <div className='col text-end'>
          <Link to='/add' className='btn btn-info'>Add New Product</Link>
        </div>
      </div>
      <table className="table w-100"> 
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Brand</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.products?.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td><img src={product.thumbnail} className="img-thumbnail w-50"/></td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.brand}</td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteProduct(product.id)}>Delete</button>
              </td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form;





  

