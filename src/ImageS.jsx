import { useEffect } from "react";
import { useState } from "react"
import Img from'./Img'

export default function ImageS(){
    const [Image, setImage] =  useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => setImage(data))
    },[])
    return(
        <div>
            <h2>Title : {Image.length}</h2>
            {
                Image.map( data => <Img img={data}></Img>)
            }
        </div>
    )
}