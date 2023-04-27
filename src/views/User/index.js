import React, { useEffect, useState } from 'react';

import '../../styles/user.css';

//Components
import UserInput from '../../components/userInput';
import UserList from '../../components/userList';
import Header from '../../components/header';

export default function User() {
  const [values, setValues] = useState({
    name: '',
    email: '',
  });
  const [users, setUsers] = useState([]);
  const [userList, setUserList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(3);
  const [edit, setEdit] = useState(false);
  const [editUserIndex, setEditUserIndex] = useState(null);

  useEffect(() => {
    let storage = localStorage.getItem('userData');
    if (storage && storage.length > 0) {
      let userData = JSON.parse(storage);
      let userDataList = userData.slice(0, 3);

      setUsers(userData);
      setUserList(userDataList);
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    if (edit) {
      let arr = [...users];
      arr[editUserIndex] = values;

      let dataList = arr.slice(offset, limit);

      setUsers(arr);
      setUserList(dataList);
      localStorage.setItem('userData', JSON.stringify(arr));
      setValues({ ...values, name: '', email: '' });
      setEdit(false);
      alert('User edited successfully');
    } else {
      let name = values.name;
      let email = values.email;

      if (name.length === 0 || email.length === 0) {
        alert('Please fill all the fields');
      } else {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          let data = [...users, values];
          let dataList = data.slice(offset, limit);

          setUsers(data);
          setUserList(dataList);
          localStorage.setItem('userData', JSON.stringify(data));
          setValues({ ...values, name: '', email: '' });
          alert('User created successfully');
        } else {
          alert('Please enter a valid email');
        }
      }
    }
  };

  const handleClear = () => {
    setValues({ ...values, name: '', email: '' });
  };

  const handleEdit = (index) => {
    setEdit(true);
    let user = [...users];
    let ind = user.findIndex(
      (obj) =>
        obj.name === userList[index].name || obj.email === userList[index].email
    );
    setEditUserIndex(ind);
    setValues({ name: userList[index].name, email: userList[index].email });
  };

  const handleDelete = (index) => {
    let user = [...users];

    let findIndex = user.findIndex(
      (obj) =>
        obj.name === userList[index].name || obj.email === userList[index].email
    );

    user.splice(findIndex, 1);

    let dataList = user.slice(offset, limit);

    setUsers(user);
    setUserList(dataList);
    localStorage.setItem('userData', JSON.stringify(user));
    alert('User deleted successfully');
  };

  const handleLoadMore = () => {
    let range = offset + 3;

    let data = users.slice(range, range + limit);

    setOffset(range);
    setUserList(data);
  };

  return (
    <div>
      <Header />
      <UserInput
        value={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleClear={handleClear}
      />
      <UserList
        userList={userList}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleLoadMore={handleLoadMore}
      />
    </div>
  );
}
