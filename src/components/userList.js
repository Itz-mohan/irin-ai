import React, { useEffect } from 'react';

import '../styles/userList.css';

export default function UserList(props) {
  const { userList, handleEdit, handleDelete, handleLoadMore } = props;

  return (
    <div className='user-list-component'>
      <h1 className='user-list-title'>User Details</h1>

      {userList?.map((data, i) => {
        return (
          <table className={`list-${i}`} key={i}>
            <td className='list-name'>{data?.name}</td>
            <td className='list-email'>{data?.email}</td>
            <td className='list-edit' onClick={() => handleEdit(i)}>
              <img src='/logos/edit-97.svg' />
            </td>
            <td className='list-delete' onClick={() => handleDelete(i)}>
              <img src='/logos/delete-181.svg' />
            </td>
          </table>
        );
      })}

      <button className='load-btn' onClick={handleLoadMore}>
        <label className='load-btn-label'>Load More</label>
      </button>
    </div>
  );
}
