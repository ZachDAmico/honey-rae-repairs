import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketService";
import "./Tickets.css";
import { Ticket } from "./Ticket";
import { TicketFilterBar } from "./TicketFilterBar";

//naming convention for react -
//name function/component same as module it's in and with capital letter
export const TicketList = () => {
  //set function for useState() re-renders our component
  //so by setting tickets below with setAllTickets(ticketsArray),
  //creating infinite loop continuously triggering re-rendering
  //that's why useEffect needed
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);
  //new state to capture user's input in filter bar
  const [searchTerm, setSearchTerm] = useState("");

  //useState() above is set to undefined so when we try to map filteredTickets below
  //error comes up, can't map undefined
  //important to give state an initial value of what you expect the state to be
  //so initial value here would be empty array because we know we're trying to map it

  useEffect(() => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray);
      console.log("tickets set");
    });
  }, []); //takes function and dependency array - function is what we want to happen, array is when
  //when dependency array empty, telling useEffect to ONLY run function on initial render of component
  useEffect(() => {
    //same as if showEmergencyOnly === true
    if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter(
        (ticket) => ticket.emergency === true
      );
      setFilteredTickets(emergencyTickets);
    } else {
      setFilteredTickets(allTickets);
    }
  }, [showEmergencyOnly, allTickets]);

  useEffect(() => {
    //watching for when searchTerm changes, want to filter tickets off that input
    //need to filter each ticket want ticket description
    const foundTickets = allTickets.filter((ticket) =>
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTickets(foundTickets);
  }, [searchTerm, allTickets]);

  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <TicketFilterBar
        setShowEmergencyOnly={setShowEmergencyOnly}
        setSearchTerm={setSearchTerm}
      />

      <article className="tickets">
        {filteredTickets.map((ticketObj) => {
          //will get squiggle if you don't import
          //for each filteredTicket, returning new Ticket component
          //this is passing prop(ticket={ticketObj}) to the Ticket component
          return <Ticket ticket={ticketObj} key={ticketObj.id} />;
        })}
      </article>
    </div>
  );
};
