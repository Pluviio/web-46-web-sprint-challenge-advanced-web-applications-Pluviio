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
    
    fetchColorService()
    .then(data => {
      setColors(data)
    })

  },[])

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
  };

  const deleteColor = (colorToDelete) => {
    // axiosWithAuth()
    // .delete(`/colors/${id}`)

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
