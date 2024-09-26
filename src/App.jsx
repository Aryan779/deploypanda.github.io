// import React from 'react';
import { nanoid } from 'nanoid';
import { useState, useEffect, } from 'react';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

import { NoteContext } from './context/NoteContext';

function App() {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "02/14/2022",
      toEdit: false
    } 
  ]);


const [searchText, setSearchText] = useState('');

const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
  );

  if(savedNotes) {
    setNotes(savedNotes);
  }
},[]);

useEffect(() => {
  localStorage.setItem('react-notes-app-data', JSON.stringify(notes)
  );
}, [notes]);

const addNote = (text,date) => {
  const id = nanoid();
  const newNote = {
    id: id,
    text: text,
    date: date,
    toEdit: false
  }

  const newNotes = [...notes, newNote];
  setNotes(newNotes);
};

const deleteNote = (id) => {

  const newNotes = notes.filter((note)=> note.id !== id);
  setNotes(newNotes);
}

const editNote = (id) => {
  const newNotes = notes.map((note) => {
    if (note.id === id) {
      return { ...note, toEdit: true }; // Update `toEdit` to true for the matching note
    } else {
      return note; // Return other notes unchanged
    }
  });
    
  setNotes(newNotes);
  }

  const addEditedNote = (id,text,date) => {

    const newNotes = notes.map((note) => {
      if (note.id === id) {
        return { id:id, text:text, date:date, toEdit:false };
      } else {
        return note;
      }
    });
      
    setNotes(newNotes);
  };

  return ( 
    <>
      <NoteContext.Provider value={{addNote,deleteNote,editNote,addEditedNote}}>
        <div className={`${darkMode && 'bg-black h1-white'}`}>
          <div className="mx-auto max-w-[1040px] min-h-screen px-3 ">
            <Header handleToggleDarkMode={setDarkMode} />
            <Search handleSearchNote={setSearchText}/>
            {/* no conext api below line */}
            {/* <NotesList notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))}  handleAddNote={addNote} handleDeleteNote={deleteNote}/> */}
            <NotesList notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))}/> 
          </div>
        </div>
      </NoteContext.Provider>
      
  </>
  );
};

export default App;