// geting datas from props

const UserTable = (props)=>{
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {/**users data array il irunthaal display aakum or no users message display aakum */}
                {props.users.length>0?(
                    props.users.map((user)=>{ return(

                        <tr key = {user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <button className="button muted-button">Edit</button>
                            <button className="button muted-button">Delete</button>
                        </td>
                    </tr>
                    )})
                ):(
                    <tr colspan={3}>No Users</tr>
                )
                }
               

            </tbody>
        </table>
    )
}

export default UserTable;