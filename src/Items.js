import React from "react";
import { Link } from "react-router-dom";

const Items = ({ student }) => {
  return (
    <article>
      <Link to={`/student/${student.id}`}>
        <h1>Name: {student.name}</h1>
        <h2>Roll No: {student.rollno}</h2>
        <h3>Department: {student.dept}</h3>
      </Link>
    </article>
  );
};

export default Items;
