import UserTable from "./Tables/UserTable";
import {useState} from 'react'
import AddUSerForm from "./form/AddUSerForm";

function App() {

  /**storing data to property UserData */
  const UserData = [
    {id:1, name:"jathu" , username:"jathurshan"},
    {id:2, name:"isai" , username:"isaiarasan"},
    {id:3, name:"mei" , username:"mei"}
  ];

  /*then UserData array is assign to users property  */
  const [users, setUsers] = useState(UserData)

  /** function for Adding new users */
  const addUsers = (user)=>{
    user.id = users.lenght +1; 
    setUsers([...users, user])

  }

  return (
    <>
    <h1>CRUD App with Hooks</h1>
    <div className="flex-row">
      <div className="flex-large">
        <h2>Add User</h2>
        <AddUSerForm/>
      </div>
      <div className="flex-large">
        <h2>View Users</h2>
        <UserTable users = {users} /> {/**sending users property to UserTable component using props */}
      </div>
    </div>
    
    </>
  );
}

export default App;
