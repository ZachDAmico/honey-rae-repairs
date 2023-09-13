import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCustomerByUserId } from "../../services/customerService";
import "./Customers.css";

export const CustomerDetails = () => {
  const [customer, setCustomer] = useState({});
  // this is key - path="/customers/:customerId"
  // 3 is the value - at /customer/3
  const { customerId } = useParams(); // returns {customerId :/number}

  //once state declared, want to set customer with customer getting back from database
  //need useEffect, otherwise setting customer on component level which = infinite loop
  //we want this on initial render so empty dependency array
  //invoking getCustomerByUserId and passing customerId i'm getting from the URL via useParams
  //getting customer object INSIDE ARRAY back
  //then set customer with customer object that we get back from database
  //IMPORTANT to remember can't do dot notation on array - will be undefined
  //hence needing customerObj variable to store that
  //this is because json query(? mark) returns array of all matches, even if only 1 match
  //eslint says missing customerId in dependency array -
  useEffect(() => {
    getCustomerByUserId(customerId).then((data) => {
      //on initial render, we want to get that customer
      //id is actually userId, stored in customerId
      //made fetch call to get customer by userId and expanded user object to get all info
      //get back array with all results that match - which we expect/hope is only one so
      //customerObj would not be correct as .then parameter because it's bringing back array
      //so looking for first object in that array via indexing
      const customerObj = data[0];
      setCustomer(customerObj);
    });
  }, [customerId]);
  return (
    <section className="customer">
      {/* this dot notation because we're in customers array and under the expanded user key, looking for fullName
    need ?. because on initial render from useState, customer is set to empty object so user would be undefined
    and you can't dot notate on undefined */}
      <header className="customer-header">{customer.user?.fullName}</header>
      <div>
        <span className="customer-info">Email : </span>
        {/* email is on user object */}
        {customer.user?.email}
      </div>
      <div>
        <span className="customer-info">Address : </span>
        {customer.address}
      </div>
      <div>
        <span className="customer-info">Phone Number : </span>
        {customer.phoneNumber}
      </div>
    </section>
  );
};
//this shows Customer #{customerId} when a customer is clicked,
//i want to display all the details for that customer - name, email, address, phone #
//issue is name and email are under users, address and phone number under customers
//userId is foreign on customer object and getting access to userId via useParams() because we're storing
//URL info of /customers/customerId

//once component made to fetch data in customerService,
//want to get the customer one initial render of CustomerDetails component
//want to store customer(s) in state variable
