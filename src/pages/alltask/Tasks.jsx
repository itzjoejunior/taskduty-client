import './Tasks.css'
import {Link} from 'react-router-dom'
import { dummyData } from '../../data'

export const Tasks = () => {
  console.log(dummyData);
  return (
    <div className='container py-3' id="top">
      <div className='d-flex justify-content-between align-items-center py-4'>
        <div>
          <h1>My Task</h1>
        </div>
        <div>
          <Link to="/newtask"> + Add New Task </Link>
        </div>
      </div>

      {/* all tasks */}

    <div className='d-flex gap-3 flex-column'>
    {dummyData && dummyData.map((datum)=>(
        <div  key={datum.id}> 
        <div className='border rounded-2 mb-2  d-flex flex-column gap-5  justify-content-between'>
          <div className='d-flex justify-content-between align-items-center border-bottom  p-4 '>
            <h5>{datum.tags}</h5>
            <div className='d-flex gap-2 '>
            <button className='btn btn-primary'>edit</button>
            <button className='btn btn-primary'> delete</button>
          </div>
          </div>
            <div className='text-box p-4'>
              <h2 className='text-start '>{datum.taskTitle}</h2>
              <p className='text-start '>{datum.description}</p>
            </div>
        </div>
        </div>
      ))}
    </div>
    <div className='d-flex justify-content-center py-4 '>
    <a href="#top" className='text-center text-decoration-underline '> Back To Top</a>
    </div>
    </div>
  )
}

