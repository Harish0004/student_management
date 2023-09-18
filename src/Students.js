import React from "react";
import { useParams, Link } from "react-router-dom";

const Students = ({ handleDelete, students }) => {
  const { id } = useParams();
  const student = students.find((student) => student.id.toString() === id);
  return (
    <article>
      <h1>Name: {student.name}</h1>
      <h2>Roll No: {student.rollno}</h2>
      <h3>Department: {student.dept}</h3>
      <button
        id="delete"
        onClick={() => {
          handleDelete(student.id);
        }}>
        Delete
      </button>
      <Link to={`/edit/${student.id}`}>
        <button id="delete">Edit</button>
      </Link>
    </article>
  );
};

export default Students;
