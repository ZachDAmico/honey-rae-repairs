export const getAllEmployees = () => {
  return fetch(`http://localhost:8088/employees?_expand=user`).then(
    (response) => response.json()
  );
};
// This function is designed to fetch all employees without any specific filtering criteria. It retrieves a list of all employees without needing any additional information. Therefore, it doesn't require any parameters because it simply retrieves all available employees.

export const getEmployeeByUserId = (userId) => {
  return fetch(
    `http://localhost:8088/employees?userId=${userId}&_expand=user&_embed=employeeTickets`
  ).then((response) => response.json());
};

// In summary, the difference in parameter requirements between these two functions is related to the specific use case they serve.
// getAllEmployees is for retrieving all employees, whereas getEmployeeByUserId is for retrieving a single employee based on a specific user ID.
// If you need to filter, identify, or specify conditions for data retrieval, then parameters are a common and useful way to achieve that. However, when you want to retrieve all data without any specific criteria, parameters may not be necessary.
