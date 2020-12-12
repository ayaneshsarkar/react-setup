import React from 'react';

const UserList = ({ user, deleteUser, findUser, updateUser, index, value }) => {
  return (
    <li key={user.id} class="list-group-item">
      <div className="d-flex align-items-center justify-content-between">
        <div className="m-0">
          <span onClick={() => findUser(user.id)} className="m-0 pointer">{user.name}</span><br />
          <div className="form-group">
            <input 
              onChange={(e) => updateUser(e, user.id)} 
              type="text" 
              className="form-control mt-2" 
              defaultValue={value}
            />
          </div>
        </div>

        <p onClick={() => deleteUser(index)} className="bg-danger text-white linkable">
          Delete
        </p>
      </div>
    </li>
  );
}

export default UserList;