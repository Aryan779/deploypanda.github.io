import React from 'react';

function Header({ handleToggleDarkMode }){

  const handleThemeChange=(e)=>{
    handleToggleDarkMode((previousDarkMode)=> !previousDarkMode)
    if(e.target.textContent=="Dark Mode"){
        e.target.textContent="Light Mode"
    }
    else{
      e.target.textContent="Dark Mode"
    }
  }
  return(
    <div className="flex items-center justify-between py-5">
      <h1 className='text-2xl font-bold'>Notes</h1>
      <button className="border-[1px] border-black bg-[rgb(233,233,233)] hover:bg-gray-400 rounded-xl p-1" onClick={handleThemeChange}>
            Dark Mode
      </button>
      
      
    </div>
  )
}

export default Header;