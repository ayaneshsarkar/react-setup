import React from 'react';
import UserList from './UserList';

const Users = ({ allUsers, deleteUser, findUser, updateUser, value }) => {
  return (
    <ul class="list-group mb-5">
      { allUsers ? 
        allUsers.map((user, index) => 
        <UserList 
          user={user} 
          deleteUser={deleteUser} 
          findUser={findUser} 
          updateUser={updateUser}
          index={index} 
          value={value} 
        />) : null 
      }
    </ul>
  )
}

export default Users;