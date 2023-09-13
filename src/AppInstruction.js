// import { useState } from "react";

// //export const App = () => {
//   //good naming convention to use set"whatever state variable you chose"
//   //always use const with useState()
//   //setterFunction from useState() is what tells react to rerender to show on page
//   const [count, setCount] = useState(0); // [stateVariable, setterFunction]
//   //can use blank function in button, but could be better to define function like this
//   const handleButtonClick = () => {
//     //we're saying count + 1, but initial count is what?
//     //with useState, we give initial value inside () - so when left empty it's set to undefined
//     setCount(count + 1);
//     //instead of console.log - can look in devtools
//     //go to component tab, click app and under hooks is state which updates when clicked for this app
//     // console.log(count);
//   };
//   return (
//     //<> </> is react fragment
//     <>
//       <h1>Hello</h1>
//       <div>This is amazing!</div>
//       <button className="btn-secondary" onClick={handleButtonClick}>
//         Click Me!
//       </button>
//       <div>Count: {count}</div>
//     </>
//   ); //important to not invoke function here because we don't want return value
//   //you'd return value if invoked, we just want to pass function itself so can be invoked when button clicked
//   //chose btn-secondary because we wanted blue, it's a class based on .
//   //we use className attribute
// };
