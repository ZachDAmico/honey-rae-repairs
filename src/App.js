import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import { CustomerList } from "./components/customers/CustomersList";
import { EmployeeList } from "./components/employees/EmployeeList";
import { TicketList } from "./components/tickets/TicketList";
import { NavBar } from "./components/nav/NavBar";
import { Welcome } from "./components/welcome/Welcome";
import { CustomerDetails } from "./components/customers/CustomerDetails";
import { EmployeeDetails } from "./components/employees/EmployeeDetails";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        {/* whenever URL is at parent path("/" in this case), it will render index component in <Outlet /> */}
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList />} />
        <Route path="employees">
          <Route index element={<EmployeeList />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>
        <Route path="customers">
          {/* no parent element here so need for <Outlet /> so CustomerList will render when at /customers */}
          <Route index element={<CustomerList />} />
          {/* : is Route parameter, is key value pair 
          //customerId is key, whatever is at the URL is value 
          //this URl is /customers/(this
          position is now customerId) */}
          <Route path=":customerId" element={<CustomerDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};

//need to fetch employee from database
// when you click on Employee - onclick
// go to new page with name, email, specialty, rate, # of tickets working on
//some info under employees, some under users in database
//need to make sure entire employee list doesn't show when individual clicked
//import css

// DONE
//want to show list of employees when employees button clicked
//need to set up Routes in App.js
//need to ad Link so click sends to new page in EmployeeList.js
//need to capture employee id from route parameter with useParams() in EmployeeDetails.js
