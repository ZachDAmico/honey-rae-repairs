import "./User.css";

//need prop for user - why?
export const User = ({ user }) => {
  //now wrapping each individual customer in own <div>
  //want to have separate <divs> for name and email
  return (
    <div className="user">
      <div>
        <div className="user-info">Name</div>
        <div>{user.fullName}</div>
      </div>
      <div>
        <div className="user-info">Email</div>
        <div>{user.email}</div>
      </div>
    </div>
  );
};
