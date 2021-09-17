import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from '../services/fetchColorService';
import axiosWithAuth from "../helpers/axiosWithAuth";
// import axios from "axios";

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  // useEffect (() => {
  //   // console.log(fetchColorService())
  //   // setColors( fetchColorService() )
  //   axiosWithAuth()
  //   .get("/colors")
  //   .then(res => {
  //     console.log(res)
  //     setColors(
  //       fetchColorService()
  //     )
  //     return res.data
  //   })
  //   .catch(err => {
  //     console.log(err.response)
  //   })

  // }, [])

  useEffect(() => {
    // axiosWithAuth()
    // .get('/colors')
    fetchColorService()
    .then(res => {
      setColors(res.data)
    })

  },[])

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    axiosWithAuth()
    .put(`http://localhost:5000/api/colors/${editColor.id}`, editColor)
    .then(res => {
      console.log(res.data)
      setColors(colors.map(c => {
        if(c.id == editColor.id) return res.data
        return c
      }))
    }).catch(err =>{
      console.log(err)
    })
  };

  const deleteColor = (colorToDelete) => {
    axiosWithAuth()
    .delete(`http://localhost:5000/api/colors/${colorToDelete.id}`)
    .then(res => {
      console.log(res.data)
      setColors(colors.filter(c => {
        if(c.id != colorToDelete.id) return res.data
        
      }))
    }).catch(err =>{
      console.log(err)
    })
  };

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
