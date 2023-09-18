import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Edit = ({
  setEditDept,
  setEditName,
  setEditRollno,
  editRollno,
  editName,
  editDept,
  handleEdit,
  students,
}) => {
  const { id } = useParams();

  const student = students.find((student) => student.id.toString() === id);
  useEffect(() => {
    setEditName(student.name);
    setEditRollno(student.rollno);
    setEditDept(student.dept);
  }, [student, setEditDept, setEditName, setEditRollno]);

  return (
    <form className="NewItems" onSubmit={(e) => e.preventDefault()}>
      <h1>Edit a student record</h1>
      <input
        type="text"
        id="name"
        required
        placeholder="Enter the name"
        value={editName}
        onChange={(e) => setEditName(e.target.value)}
      />

      <input
        type="text"
        id="rollno"
        required
        placeholder="Enter the Rollno"
        value={editRollno}
        onChange={(e) => setEditRollno(e.target.value)}
      />
      <input
        type="text"
        id="dept"
        required
        placeholder="Enter the dept"
        value={editDept}
        onChange={(e) => setEditDept(e.target.value)}
      />
      <button
        type="submit"
        onClick={() => {
          handleEdit(student.id);
        }}>
        Submit
      </button>
    </form>
  );
};

export default Edit;
