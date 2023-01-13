
import './App.css';
// import { useState } from 'react';
// import Car from './counter';
// import Youtube from './assignmnent/day4/youtube';
// import SignUpBox from './assignmnent/day5/signUpBox';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TaskManager from './assignmnent/day6/taskManager';

// const Person = (props) => {
//   return (
//     <>
//     <h1> Name: {props.name} </h1>
//     <h2> Last Name: {props.lastName} </h2>
//     <h3> age:  {props.age} </h3>
//     </>
//   )
// }


const App=()=> {
  // const name = 'null';
  // const guest = 'guest';
  // const isNameShowing = true;
  // const [counter,setCounter] = useState(0);
  // let counter;

  return (
    
    <div >
      <div className='cards'>
      {/* <TaskManager /> */}
        {/* <SignUpBox /> */}
        <TaskManager />
      {/* <Youtube  /> */}
      </div>
      {/* <Car color='blue' />
      <Person
       name='ank' lastName='b' age={2+28} />
      <Person name='anv' lastName='b' age={2+88}/>
      <h1> hello, {isNameShowing?  name :  counter } </h1>
      {name ? (
        <>
        {name}
        </>
      ):(
        <h1> {guest} </h1>
      )}
      <button className='upper' onClick={()=> setCounter((prevCount)=> prevCount + 1)}> <h1>+</h1></button>
      <h1> {counter} </h1>
      <button className='lower' onClick={()=> setCounter((prevCount)=>prevCount === 0 ? 0: prevCount - 1)}><h1>-</h1></button> */}
     <ToastContainer />
    </div>
    
  );
}

export default App;
