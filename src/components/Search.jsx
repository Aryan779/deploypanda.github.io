import React from 'react';
import {MdSearch} from 'react-icons/md';
import { useState } from 'react';

function Search({ handleSearchNote }){
  
  // const [filterDate,setFilterDate] = useState(false);
  
  return (
    <>
    <div className='flex items-center'>
      <div className=" border-[1px]  border-black flex items-center p-[5px] mb-5 mt-1 bg-[rgb(233,233,233)] rounded-xl ">
        <MdSearch className="" size="1em" />
        <input size="129"  className=" bg-[rgb(233,233,233)] focus:outline-none mb-1 ml-1 " onChange={(event)=>handleSearchNote(event.target.value)} type="text" placeholder="type to search"></input>
      </div>
      {/* <button className="border-[1px] bg-[rgb(233,233,233)] border-black w-20 h-10 mb-4 ml-4 rounded-xl hover:bg-gray-500 hover:text-white">Filter Date</button> */}
    </div>
    
    </>
  );
}
export default Search;