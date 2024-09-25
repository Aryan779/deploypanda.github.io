import React from 'react';
import Note from './Note';
import AddNote from './AddNote';

// function NotesList({ notes,handleAddNote, handleDeleteNote }){ before context api used
function NotesList({ notes}){
  return(
    <>
    <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4'>
      {notes.map((note)=> (<Note key={note.id} id={note.id} text={note.text} date={note.date}/>))}
      <AddNote />
      {/* no context api
      
      {notes.map((note)=> (<Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>))}
      <AddNote handleAddNote={handleAddNote} /> */}
    </div>
    </>
  );
}

export default NotesList;