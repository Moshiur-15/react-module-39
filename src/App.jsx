// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import ImageS from './ImageS'
// import Friends from './Friend'
// import Counter from './count'
// import User from './User'
// import Friends from './Friends'
function App() {
  {/* module 39-2 */}
  /*function handale (){
    alert('hello ')
  }
  function handale2 (){
    alert(' world')
  }
  const handel4 =(num)=>{
    alert(num+5)
  }
  */
 function handleClick(){
  console.log("dslkgjh")
 }

  return (
    <>
      <h1>Vite + React</h1>
      <button onClick={handleClick}>Click Me</button>
      {/* <ImageS></ImageS> */}
      {/* <Friends></Friends> */}
      {/* <User></User> */}
      {/* <User></User> */}
      {/* module 39-2 */}
      {/* <button onClick={handale}>click </button>
      <button onClick={handale2}>click 2</button>
      <button onClick={()=>{alert('click 3')}}>click 3</button>
      <button onClick={()=>handel4(5)}>click 4</button> */}

      {/* <Counter></Counter> */}
    </>
  )
}

export default App
