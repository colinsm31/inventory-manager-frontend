import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import './sidebar.css';

export default function Sidebar(){

  return(
    <div className='sidebar'>
      <div className="container">
        User Info
      </div>
      <div className="container">
        Container
      </div>
      <div className="container">
        Container
      </div>
      <div className="container">
        Container
      </div>
    </div>
  )
}