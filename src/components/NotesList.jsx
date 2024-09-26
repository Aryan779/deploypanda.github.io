import React from 'react';
import Note from './Note';
import AddNote from './AddNote';
import EditNote from './EditNote';

// function NotesList({ notes,handleAddNote, handleDeleteNote }){ before context api used
function NotesList({ notes}){
  return(
    <>
    <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4'>
      {notes.map((note)=>{if(note.toEdit==false){return <Note key={note.id} id={note.id} text={note.text} date={note.date} />}})}
      {notes.map((note)=>{if(note.toEdit==true){return  <EditNote key={note.id} id={note.id} text={note.text} orgDate={note.date}/>}})}
      <AddNote />
      {/* no context api
      
      {notes.map((note)=> (<Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>))}
      <AddNote handleAddNote={handleAddNote} /> */}
    </div>
    </>
  );
}

export default NotesList;