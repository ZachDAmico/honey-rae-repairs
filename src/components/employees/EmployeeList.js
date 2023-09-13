import { useEffect, useState } from "react";
import { getFilteredEmployees } from "../../services/userService";
import { User } from "../../users/User";
import "./Employees.css";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    getFilteredEmployees().then((employeesArray) => {
      setEmployees(employeesArray);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employeeObj) => {
        return (
          <Link to={`/employees/${employeeObj.id}`}>
            <User user={employeeObj} key={employeeObj.id} />;
          </Link>
        );
      })}
    </div>
  );
};

//want to show employee list on first render
//fetch employees from database
//export and define component to render employee list
//needs state set up and populated - .then and setter function
//needs to be told when to render - useEffect
//needs to know what to render - return with html and map each employee from database
//needs styling - CSS
