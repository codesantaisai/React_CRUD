import { useState } from "react";
const AddUSerForm = (props)=>{

    const initialFormData = {id:null,name:"",username:""}
    const [user, setUser]=useState(initialFormData)

    const handleUsersData = (event)=>{
                const {name,value} = event.target;
                setUser({...user, [name]:value})

    }



    return(
        <form onSubmit={
           event => {
                event.preventDefault(); {/** prevent loading */}
                if(!user.name||!user.username) return; {/**if empty then don't submit */}
                props.addUsers(user);
                setUser(initialFormData);
            }
             }>
            <label>Name</label>
            <input  onChange={handleUsersData} type ="text" name="name" value= {user.name}/>
            <label>Username</label>
            <input onChange={handleUsersData} type ="text" name="username" value= {user.username}/>
            <button >Add New User</button>
        </form>
    )

}
export default AddUSerForm;