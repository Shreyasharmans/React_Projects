import React,{useState} from 'react';
const Todoinp = ({tasks,handleSubmit}) => {
    const [name, setName] = useState("");
    const handleChange= (event) =>{
        tasks.name=event.target.value;
        setName(event.target.value);

    }
    const handleSubmithelper= (event) => {
        handleSubmit(event);
        setName("");
 
    }
    return( 
    <div>
         <label>
          Name:
          </label>
          <input type="text" value={name} placeholder="enter text" onChange={handleChange} />
        
       <button onClick={handleSubmithelper}>Add</button>
    </div>
    );

}
export default Todoinp;