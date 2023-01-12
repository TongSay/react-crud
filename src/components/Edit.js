import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Employee from './Employee';


function Edit() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [id, setId] = useState('');

  const history = useNavigate();

  var index = Employee.map(function(e) {
    return e.id;
  }).indexOf(id);


  const handleSubmit = (e) => {
    e.preventDefault();
    let a = Employee[index];
    a.Name = name;
    a.Age = age;
    
    history('/');
  }

  useEffect(() => {
    setName(localStorage.getItem('Name'));
    setAge(localStorage.getItem('Age'));
    setId(localStorage.getItem('Id'));
    
  }, []);

  return (
    <div className='container-sm mt-5'>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmNameail1" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required="" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Age</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required="" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
      
        <button onClick={(e) => handleSubmit(e)} type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  )
}

export default Edit