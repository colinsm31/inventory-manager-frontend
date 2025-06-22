import { useState,useEffect } from "react";
import './searchbar.css';

export default function Searchbar(){

  return(
    <div className='searchbar'>
      <input type="text" placeholder="Search" className="searchbar" id="searchbar"/>
    </div>
  )
}