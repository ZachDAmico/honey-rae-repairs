import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeByUserId } from "../../services/employeeService";

//need to be walked through testing code like this
export const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({});
  const [ticketCount, setTicketCount] = useState(0);

  const { employeeId } = useParams();

  useEffect(() => {
    getEmployeeByUserId(employeeId).then((data) => {
      const employeeObj = data[0];
      setEmployee(employeeObj);

      const numberOfTickets = employeeObj.employeeTickets.length;
      setTicketCount(numberOfTickets);
    });
  }, [employeeId]);

  return (
    <section className="employee">
      <header className="employee-header">{employee.user?.fullName}</header>
      <div>
        <span className="employee-info">Email : </span>
        {employee.user?.email}
      </div>
      <div>
        <span className="employee-info">Specialty : </span>
        {employee.specialty}
      </div>
      <div>
        <span className="employee-info">Rate : </span>${employee.rate}
      </div>
      <div>
        <span className="employee-info"># of tickets working on : </span>
        {ticketCount}
      </div>
    </section>
  );
};
