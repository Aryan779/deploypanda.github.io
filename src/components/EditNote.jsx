import { useContext, useState } from 'react';
import { NoteContext } from '../context/NoteContext';

function EditNote({id,text,orgDate}){

  const {addEditedNote}=useContext(NoteContext);

  const [noteText, setNoteText] = useState(text);

  const [date, setdate] = useState(()=>{
    const [day, month, year] = orgDate.split("/").map(Number);
    const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return formattedDate;  // "yyyy-mm-dd"

    });

  const characterLimit = 200;

  const handleChange = (event) => {

    if(characterLimit>=event.target.value.length){
    setNoteText(event.target.value);
    }
    
  };

  const handleDateChange = (event) => {
    setdate(event.target.value);
}

  const handleSaveClick = () => {
    if(noteText.trim().length > 0){
        const date1 = new Date(date);
        const day = `${date1.getDate()}/${date1.getMonth()+1}/${date1.getFullYear()}`;
        addEditedNote(id,noteText,day)
    }
  };

  return(
  <div className="bg-[#2affea] rounded-lg p-4 flex flex-col  min-h-44 justify-between">
    <span>Edit Content</span>
      <textarea 
        className='focus:outline-none resize-none bg-[#2affea] border-black border-[1px]' 
        rows="5" 
        cols="8" 
        placeholder="Type to add a note" 
        value={noteText} 
        onChange={handleChange} required></textarea>
    
    <span>Edit Date</span>
    <input type="date" value={date} className='bg-[#2affea] focus:outline-none border-black border-[1px]' onChange={handleDateChange}/>


    <div className="flex items-center justify-between pt-2">
      <small>{characterLimit - noteText.length} Remaining</small>
      <button className="bg-[#e1e1e1] border-0 rounded-xl w-20 hover:bg-blue-700 hover:cursor-pointer  " onClick={handleSaveClick}>Save Edit</button>
    </div>
 
  </div>
  );
} 

export default EditNote;