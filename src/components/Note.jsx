import { MdDeleteForever } from 'react-icons/md';
import { useContext, useState } from 'react';
import { NoteContext } from '../context/NoteContext';

function Note({ id, text, date}){

  const {deleteNote,editNote} = useContext(NoteContext);

  return(
    <>
    <div className="bg-[#fef68a] rounded-lg p-4 flex flex-col min-h-44 justify-between whitespace-pre-wrap">
      <span>{text}</span>
      <div className="flex items-center justify-between">
        <small> {date}</small>
        <div className='flex items-center'>
        <button className="bg-[#e1e1e1] border-0 rounded-xl w-12 hover:bg-blue-700 hover:cursor-pointer mr-1" onClick={()=> editNote(id)} >Edit</button>
        <MdDeleteForever onClick={() => deleteNote(id)} className="cursor-pointer ml-1"  size="1em" />
            
        </div>
        
      </div>
    </div>
    </>
  )
};

export default Note;