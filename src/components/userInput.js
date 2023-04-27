import React from 'react';

//Styles
import '../styles/userInput.css';

export default function UserInput(props) {
  const { value, handleChange, handleSubmit, handleClear } = props;

  return (
    <div className='user-input-component'>
      <h1 className='title'>Enter User Details</h1>

      <form>
        <label className='name-label'>Name</label>
        <input
          id='name-id'
          name='name'
          className='name-input'
          value={value.name}
          onChange={handleChange}
        />
        <label className='email-label'>Email</label>
        <input
          id='email-id'
          name='email'
          className='email-input'
          value={value.email}
          onChange={handleChange}
        />
      </form>

      <button className='submit-btn' onClick={handleSubmit}>
        <label className='submit-btn-label'>Submit</label>
      </button>
      <button className='clear-btn' onClick={handleClear}>
        <label className='clear-btn-label'>Clear</label>
      </button>
    </div>
  );
}
