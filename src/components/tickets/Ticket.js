//wanted to return brand new component for each ticket we mapped
//originally in TicketList-filteredTickets.map
//need to go back to original place(^) and render
//need prop and adjusting code here for render to communicate properly with this?
//components receives prop object which has key value pair data
//naming prop object in parameter of component - inside ()
//could do second example, but destructuring is more common

import { useEffect, useState } from "react";
import { getAllEmployees } from "../../services/employeeService";

//can go to dev tools -> component and click on Ticket to see props
export const Ticket = ({ ticket }) => {
  //once we implement state here, first thing is to populate state with data from database
  //so need to import getAllEmployees to get that database info here
  //useEffect dictates when and where we want it to happen
  //want to invoke getAllEmployees to fetch database info in component
  //once we have that database info, going to set employees state(setEmployees) with database info
  //useEffect needed to prevent infinite loop because setEmployees changes state, which invokes setEmployees
  //once employees set, we want to search employees array to match employee id with that on service ticket
  //HOW DO WE KNOW WHEN EMPLOYEES HAS VALUE? WHEN IS IT SET? - need to watch for when employee state changes
  //employees need to be set before they have value/state changes so that's why another useEffect i think
  const [employees, setEmployees] = useState([]);
  const [assignedEmployee, setAssignedEmployee] = useState({});

  useEffect(() => {
    getAllEmployees().then((employeesArray) => {
      //remember setEmployees isn't instantaneous
      setEmployees(employeesArray);
    });
  }, []);

  useEffect(() => {
    //once employees state changes, want to find matching employee
    //using find method to find employee where employee.id strictly equals ticket
    //which has employee tickets, which was array, if anything in array, it'd be at index 0
    //employee id for that
    const foundEmployee = employees.find(
      //with this code, getting error employeeId undefined
      //   (employee) => employee.id === ticket.employeeTickets[0].employeeId
      //if ticket doesn't have an assigned employee, employeeTickets is going to be empty array
      //which means trying to access index 0 on empty array would be undefined
      //could wrap this function in if statement that checks for
      //if ticket.employeeTickets.length
      //could also use optional chaining operator ...?
      //runs ticket, then evaluate employeeTickets
      //if comes back undefined, employee.id === undefined - essentially stops it before error
      //now if we don't find matching employee, setAssignedEmployee to undefined,
      //which is beneficial here
      (employee) => employee.id === ticket.employeeTickets[0]?.employeeId
    );
    //once we find that employee, want to set assigned employee with the found employee that matches
    setAssignedEmployee(foundEmployee);
    //watching for whenever employees state changes here
    //with just employees in dependency array, saying it's missing ticket.employeeTicket
    //so adding ticket because we're dependent on the ticket
    //if value of ticket were to change, we would run the code again
    //double check by going to component tab in dev tools
    //should see multiple states showing all employees and assigned employee
    //ticket 3 has no assigned employee so undefined under employee
  }, [employees, ticket]);

  return (
    //this was originally the outer most layer, so it would get the key=
    //now it is the <Ticket /> prop
    <section className="ticket">
      <header className="ticket-info">#{ticket.id}</header>
      <div>{ticket.description}</div>
      <footer>
        <div>
          <div className="ticket-info">assignee</div>
          <div>
            {assignedEmployee ? assignedEmployee.user?.fullName : "None"}
          </div>
        </div>
        <div>
          <div className="ticket-info">emergency</div>
          <div>{ticket.emergency ? "yes" : "no"}</div>
        </div>
      </footer>
    </section>
  );
};

// export const Ticket = (props) => {
//     return (
//       <section className="ticket" key={props.ticket.id}>
//         <header className="ticket-info">#{props.ticket.id}</header>
//         <div>{props.ticket.description}</div>
//         <footer>
//           <div>
//             <div className="ticket-info">emergency</div>
//             <div>{props.ticket.emergency ? "yes" : "no"}</div>
//           </div>
//         </footer>
//       </section>
//     );
//   };
