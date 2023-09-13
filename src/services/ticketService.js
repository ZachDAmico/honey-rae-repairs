export const getAllTickets = () => {
  return fetch(
    //back ticks and not quotes?
    `http://localhost:8088/serviceTickets?_embed=employeeTickets`
  ).then((response) => response.json());
};
