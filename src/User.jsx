// import { useEffect } from "react";
// import { useState } from "react"

import { useEffect, useState } from "react"

// export default function User(){
//     const [user, setUser] = useState([]);
//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then(res => res.json())
//         .then(data => setUser(data))
//     },[])
//     return (
//         <div>
//             <h2>User : {user.length}</h2>
//         </div>
//     )
// }

// export default function Users(){
//     const [users, setUsers] = useState([]);
//     useEffect(() => {

//         const fetchData = async() =>{
//             const res = await fetch("https://jsonplaceholder.typicode.com/users");
//             const data = await res.json();
//             setUsers(data)
//         }
//         fetchData();

//     },[])
//         return(
//         <div>
//             <h1>Users : {users.length}</h1>
//         </div>
//     )
// }
