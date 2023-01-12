import React, {useState} from 'react'
import { v4 as uuid } from 'uuid'
import { useNavigate} from 'react-router-dom'
import Employee from './Employee';
const Add = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const history = useNavigate();

    const handleAdd = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name ,
        b = age ;
        Employee.push({id: uniqueId, Name: a, Age: b });

        history('/');
    }
  return (
    <div className='container-sm mt-5'>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmNameail1" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required="" onChange={(e) => setName(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Age</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required="" onChange={(e) => setAge(e.target.value)} />
        </div>
      
        <button onClick={(e) => handleAdd(e)} type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Add