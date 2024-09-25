import { MdDeleteForever } from 'react-icons/md';
import { useContext, useState } from 'react';
import { NoteContext } from '../context/NoteContext';

function Note({ id, text, date}){

  const {deleteNote} = useContext(NoteContext);

  return(
    <>
    <div className="bg-[#fef68a] rounded-lg p-4 flex flex-col min-h-44 justify-between whitespace-pre-wrap">
      <span>{text}</span>
      <div className="flex items-center justify-between">
        <small> {date}</small>
        <MdDeleteForever onClick={() => deleteNote(id)} className="cursor-pointer"  size="1em" />
      </div>
    </div>
    </>
  )
};

export default Note;