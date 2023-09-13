export const getCustomers = () => {
  //can type directly into json serve "search" bar to filter like so
  return fetch(`http://localhost:8088/users?isStaff=false`).then((response) =>
    response.json()
  );
};

export const getFilteredEmployees = () => {
  return fetch(`http://localhost:8088/users?isStaff=true`).then((response) =>
    response.json()
  );
};
export const getUserByEmail = (email) => {
  return fetch(`http://localhost:8088/users?email=${email}`).then((res) =>
    res.json()
  )
}

export const createUser = (customer) => {
  return fetch("http://localhost:8088/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  }).then((res) => res.json())
}
