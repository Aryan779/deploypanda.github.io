import React from 'react';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

function App() {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "02/14/2022"
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
  

  const newNote = {
    id: nanoid(),
    text: text,
    date: date
  }

  const newNotes = [...notes, newNote];
  setNotes(newNotes);
};

const deleteNote = (id) => {

  const newNotes = notes.filter((note)=> note.id !== id);
  setNotes(newNotes);
}

  return ( 
    <>
      <div className={`${darkMode && 'bg-black h1-white'}`}>
        <div className="mx-auto max-w-[1040px] min-h-screen px-3 ">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText}/>
        <NotesList notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))}  handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div>
    </div>
  </>
  );
};

export default App;