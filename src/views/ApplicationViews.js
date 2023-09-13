import { Route, Outlet, Routes } from "react-router-dom";
import { NavBar } from "./components/nav/NavBar";
import { Welcome } from "./components/welcome/Welcome";
import { EmployeeDetails } from "./components/employees/EmployeeDetails";
import { EmployeeList } from "./components/employees/EmployeeList";
import { TicketList } from "./components/tickets/TicketList";
import { CustomerList } from "./components/customers/CustomersList";
import { CustomerDetails } from "./components/customers/CustomerDetails";

export const ApplicationViews = () => {
  return (
    //on original pasting from App.js - shows now issues after importing, but will still have problem because all individual <Route>s need to be wrapped in parent <Routes>
    <>
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
    </>
  );
};
