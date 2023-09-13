import { Routes, Route } from "react-router-dom";
import "./App.css";
// import { CustomerList } from "./components/customers/CustomersList";
// import { EmployeeList } from "./components/employees/EmployeeList";
// import { TicketList } from "./components/tickets/TicketList";
// import { NavBar } from "./components/nav/NavBar";
// import { Welcome } from "./components/welcome/Welcome";
// import { CustomerDetails } from "./components/customers/CustomerDetails";
// import { EmployeeDetails } from "./components/employees/EmployeeDetails";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { ApplicationViews } from "./views/ApplicationViews";
import { Authorized } from "./views/Authorized";

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="*"
        element={
          // check if user is authorized first - does Authorized find the honey_user object
          // if authorized, then ...
          <Authorized>
            {/* it will return the children aka protected routes in AuthorizedViews */}
            <ApplicationViews />
          </Authorized>
        }
      />
      {/* eventually want to make these Routes below protected so only accessible when user logs in */}
      {/* PROTECTED ROUTES  - moved to ApplicationViews.js*/}
    </Routes>
  );
};

// TO DO
//want to add logout button to nav bar
//need to create logout component?
//link to login page?
//create jsx
//add css
//copy and paste from instructions
//still had to import useNavigate and define navigate as useNavigate()

// DONE
//want to show list of employees when employees button clicked
//need to set up Routes in App.js
//need to ad Link so click sends to new page in EmployeeList.js
//need to capture employee id from route parameter with useParams() in EmployeeDetails.js
//need to fetch employee from database
// when you click on Employee - onclick
// go to new page with name, email, specialty, rate, # of tickets working on
//some info under employees, some under users in database
//need to make sure entire employee list doesn't show when individual clicked
//import css

// add Routes to login and Register.js pages - add <Routes> is there any index or path?
//once Routes are set up, can check by typing url into search bar
//when user logs in, can look in local storage under application tab in dev tools
//creates new object(in this case called honey_user) shows {"id":4, "isStaff": true}
//going to see if user object exists and that tells app whether user is logged in
//want to set up so protects routes only accessible when user logged in - moved to ApplicationViews.js

//all application page views in ApplicationViews.js
//want to only render those routes in App.js if user is authorized/logged in
//use Authorized.js component
//going to make ApplicationViews.js child component of Authorized.js
