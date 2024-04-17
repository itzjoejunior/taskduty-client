import '../alltask/Tasks'
import prev from '../../assets/images/prev.png'

const EditTask = () => {
  return (
    <div id='top' className='container py-3'>
        <div className='py-3 d-flex align-items-center gap-4'>
       <span> <img src={prev} alt="" /></span>
        <h1>Edit Task</h1>
        </div>

        <div className='py-4'>
          <form className='d-flex flex-column gap-5 text-start'>
           <div>
           <label className='position-absolute translate-middle-y z-3 p-2 bg-white ms-3' htmlFor="">Task Title</label>
            <input className='w-100 rounded-1 border border-secondary px-4 py-3' type="text" placeholder='E.g Project Defense, Assignment ...' />
           </div>

           <div className='d-flex flex-column'>
            <label className='position-absolute translate-middle-y p-2 z-3 bg-white ms-3' htmlFor="">Description</label>
            <textarea className='w-100 rounded-1 border border-secondary px-4 py-3' name="" id="" cols="30" rows="10" placeholder='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facilis in porro doloribus non at iure hic quam numquam quasi id, explicabo, odit eius sunt ipsam labore distinctio reprehenderit quidem libero placeat? Obcaecati alias maiores laboriosam assumenda culpa unde earum id ratione vero non, labore similique ipsum quibusdam quidem mollitia.' ></textarea>
           </div>

           <div className='d-flex flex-column'>
            <label className='position-absolute translate-middle-y p-2 z-3 bg-white ms-3' 
            htmlFor="">Tags</label>
           <input className='w-100 rounded-1 border border-secondary px-4 py-3' type="text"/>
           </div>
           <button className='btn text-white btn-purple'>Done</button>

           <a href="#top" className='text-center purple text-decoration-underline '> Back To Top</a>
  

          </form>
        </div>
    </div>
  )
}

export default EditTask