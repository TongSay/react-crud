import React, { Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Employee from './Employee'
import { Link, useNavigate } from 'react-router-dom'


const Home = () => {
  
  let history = useNavigate();

  const handleEdit = (id, name, age) => {
    localStorage.setItem('Name', name);
    localStorage.setItem('Age', age);
    localStorage.setItem('Id', id);
  }
  
  const handleDelete = (id) => {
      var index = Employee.map(function(e) {
        return e.id;
      }).indexOf(id);

      Employee.splice(index,1);
      history('/');
    }

  return (
    
    <Fragment>
    <div className='container-sm mt-5'>
        
      <table className='table table-striped table-hover'>

      <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>Action</th>
      </thead>

      <tbody>
        {
          Employee && Employee.length > 0 
          ?
          Employee.map((item) => {
            return(
              <tr>
                <td>{item.id}</td>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>
                  <Link to={'/edit'}>
                    <button onClick={() => { handleEdit(item.id, item.Name, item.Age) }} className='btn btn-primary'>Edit</button> 
                  </Link> &nbsp;
                 
                  <button onClick={() => { handleDelete(item.id) }} className='btn btn-primary'>Delete</button>
                </td>
              </tr>
            )
          })
          :
          "No data"
        }
        
      </tbody>
        
  
      </table>
      <br />
      <Link className='d-grid gap-2' to={'/create'} >
        <button className='btn btn-primary'>Create</button>
      </Link>
        
    </div>
    </Fragment>
  )
}

export default Home