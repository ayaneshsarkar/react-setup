import React from 'react';
import UserList from './UserList';

const Users = ({ allUsers, deleteUser, findUser, updateUser, value }) => {
  return (
    <ul class="list-group mb-5">
      { 
        allUsers.map((user, index) => {
          if(user) {
            return (
              <UserList 
                user={user} 
                deleteUser={deleteUser} 
                findUser={findUser} 
                updateUser={updateUser}
                index={index} 
                value={value} 
              />
            );
          }
        }
        
      )}
    </ul>
  )
}

export default Users;