import React from "react";

const Add = ({
  name,
  setName,
  rollno,
  setRollno,
  dept,
  setDept,
  handleSubmit,
}) => {
  return (
    <form className="NewItems" onSubmit={handleSubmit}>
      <h1>Add a New Student Record</h1>
      <input
        type="text"
        id="name"
        required
        placeholder="Enter the name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        id="rollno"
        required
        placeholder="Enter the Rollno"
        value={rollno}
        onChange={(e) => setRollno(e.target.value)}
      />

      <input
        type="text"
        id="dept"
        required
        placeholder="Enter the dept"
        value={dept}
        onChange={(e) => setDept(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Add;
