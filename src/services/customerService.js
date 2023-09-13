export const getCustomerByUserId = (userId) => {
  //originally went into browser search bar(postman is better practice) and added this
  //http://localhost:8088/customers?userId=2&_expand=user
  //to make sure the expand is giving me info i need
  //don't always want the userId=2 so replaced with interpolation
  return fetch(
    `http://localhost:8088/customers?userId=${userId}&_expand=user`
  ).then((response) => response.json());
};
