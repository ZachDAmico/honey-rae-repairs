import { useEffect, useState } from "react";
import { getCustomers } from "../../services/userService";
import { User } from "../../users/User";
import { Link } from "react-router-dom";
import "./Customers.css";

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    //want to show customer list on initial render
    //want to bring in the getCustomers function so we can get the data from database
    //THEN do something with that array
    //use setter function to set customers with the users fetched from database
    //good place to stop and test code
    //remember won't show on webpage until rendered in App.js
    getCustomers().then((customerArray) => {
      setCustomers(customerArray);
    });
  }, []);

  //need to include html here so that it renders with component in App.js on webpage
  //wrapping all customers in <div>
  //want to get each customer so need to iterate/map customers array by each customer object
  return (
    <div className="customers">
      {customers.map((customerObj) => {
        return (
          <Link to={`/customers/${customerObj.id}`}>
            <User user={customerObj} key={customerObj.id} />
            {/* id here is userId still, just stored under customerObj.id */}
          </Link>
        );
      })}
    </div>
  );
};

//SUMMARY
// i'm creating a function called CustomerList which contains the state of a customers array and the setter function for that customers array.
// it's initial value is set to an empty array because that's what i'm expecting.
// the useEffect is invoking the getCustomers function(which was a fetch request) and getting the customerArray in return,
// which i'm then using to set the customers array from the state to, it is only running on the initial render because of the empty dependency array.
// the functions purpose is to get the info for each customer in my database and i need to get each individual customer's info so i need to map each customer in the customers array.
//  within the map function, i need to the html i created for the users in another module, but i need the users function to have the data for each individual customer so i need to pass it the prop of customerObj
