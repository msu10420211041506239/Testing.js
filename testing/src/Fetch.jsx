import React, { useRef } from 'react';

const Fetch = () => {
  const inputRef = useRef(0);
  const handleClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter something" />
      <button onClick={handleClick}>Show Input Value</button>
    </div>
  );
}

export default Fetch;
