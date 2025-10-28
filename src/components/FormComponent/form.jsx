import React , {useState} from 'react'

const Form = () => {
    
    const [name , setName] = useState('')
    const [mail , setEmail] = useState('')
    const [text , setText] = useState('')
 
 
    const onSubmitForm = (e) =>{
           e.preventDefault();
            console.log({name , mail , text})
            
            alert(`Your Form has been Submitted !`);

            setName('');
            setEmail('');
            setText('');
      }
  return (
      
    

    <form onSubmit ={onSubmitForm} className=" mx-auto p-4 bg-white shadow-md rounded">
  <div className="flex flex-col space-y-4">

    <div className="flex flex-col">
      <label htmlFor="name" className="mb-1 font-medium text-gray-700">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-500 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black-500"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="email" className="mb-1 font-medium text-gray-700">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        value={mail}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border border-gray-500 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black-500"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="text" className="mb-1 font-medium text-gray-700">Text Here</label>
      <textarea
        name="text"
        id="text"
        placeholder="Enter here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="4"
        className="border border-gray-500 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black-500"
      />
    </div>
            <button
      type="submit"
      className="mt-2  bg-green-600 text-white font-semibold py-2 rounded cursor-pointer hover:bg-green-700 transition duration-200"
    >
      Submit
    </button>
  </div>
</form>


  )
}

export default Form