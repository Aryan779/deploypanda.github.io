import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

function Note({ id, text, date, handleDeleteNote }){
  return(
    <>
    <div className="bg-[#fef68a] rounded-lg p-4 flex flex-col min-h-44 justify-between whitespace-pre-wrap">
      <span>{text}</span>
      <div className="flex items-center justify-between">
        <small> {date}</small>
        <MdDeleteForever onClick={() => handleDeleteNote(id)} className="cursor-pointer"  size="1em" />
      </div>
    </div>
    </>
  )
};

export default Note;