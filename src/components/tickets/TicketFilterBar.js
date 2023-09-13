export const TicketFilterBar = ({ setShowEmergencyOnly, setSearchTerm }) => {
  return (
    <div className="filter-bar">
      <button
        className="filter-button btn-primary"
        onClick={() => {
          //setShowEmergencyOnly and setSearchTerm are showing squiggles
          //because we're invoking them, but never defining them in this component
          //defined in parent function in TicketList
          //need to pass them from parent to TicketFilterBar as props
          setShowEmergencyOnly(true);
        }}
      >
        Emergency
      </button>
      <button
        className="filter-button btn-info"
        onClick={() => {
          setShowEmergencyOnly(false);
        }}
      >
        Show All
      </button>
      <input
        //goal of search bar is to capture any value typed in and filter based off input value
        //capture input and set search term with it
        //only setting value of search term, so no handler function
        //change event will pass event to function so that's why event in ()
        //if ever forget how to access user's input, console.log event and look
        //now check dev tools and click TicketList
        //should see new state of "", should populate whatever you type in filter bar
        //still need to know when search term state changes - perfect case of useEffect
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        type="text"
        placeholder="Search Tickets"
        className="ticket-search"
      />
    </div>
  );
};
