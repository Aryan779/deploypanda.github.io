import { useContext, useState } from 'react';
import { NoteContext } from '../context/NoteContext';

function AddNote(){

  const {addNote}=useContext(NoteContext);
  
  const [noteText, setNoteText] = useState('');
  const [date, setdate] = useState('');
  const characterLimit = 200;

  const handleChange = (event) => {

    if(characterLimit>=event.target.value.length){
    setNoteText(event.target.value);
    }
    
  };

  const handleDateChange = (event) => {

    const selectedDate = event.target.value;

    
    const date = new Date(selectedDate);

    
    const day = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;

    setdate(day);    
  };

  const handleSaveClick = () => {
    if(noteText.trim().length > 0){
        addNote(noteText,date)
        setNoteText('');
    }
  };

  return(
  <div className="bg-[#67d7cc] rounded-lg p-4 flex flex-col  min-h-44 justify-between">
    <span>Content</span>
      <textarea 
        className='focus:outline-none resize-none bg-[#67d7cc] border-black border-[1px]' 
        rows="5" 
        cols="8" 
        placeholder="Type to add a note" 
        value={noteText} 
        onChange={handleChange} required></textarea>
    
    <span>Date</span>
    <input type="date" className='bg-[#67d7cc] focus:outline-none border-black border-[1px]' onChange={handleDateChange}/>


    <div className="flex items-center justify-between pt-2">
      <small>{characterLimit - noteText.length} Remaining</small>
      <button className="bg-[#e1e1e1] border-0 rounded-xl w-12 hover:bg-blue-700 hover:cursor-pointer  " onClick={handleSaveClick}>Save</button>
    </div>
 
  </div>
  );
} 

export default AddNote;