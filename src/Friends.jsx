import { useEffect } from "react";
import { useState } from "react"
import Friend from "./F";

export default function Friends(){
  const [Friends, setFriends] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setFriends(data))
  },[])
  return(
    <div>
      <h1>Friends : {Friends.length}</h1>
      {
        Friends.map(friend => <Friend fd={friend}></Friend>)
      }
    </div>
  )
}