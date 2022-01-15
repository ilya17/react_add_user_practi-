import React, { useState } from 'react';
import { AddUser } from './components/Users/AddUser/AddUser';
import { users } from './components/Users/UserList/constants';
import { User } from './components/Users/UserList/interfaces';
import { UserList } from './components/Users/UserList/UserList';

function App() {
  const [userList, setUserList] = useState(users);

  const addUserHandler = (user: User) => {
    setUserList([user, ...userList])
  }

  const onRemoveUserHandler = (id: number) => {
    const newList = userList.filter(user => user.id !== id);
    setUserList(newList)
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList onRemoveUser={onRemoveUserHandler} users={userList} />
    </>
  );
}

export default App;
