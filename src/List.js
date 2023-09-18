import React from "react";
import Items from "./Items";

const List = ({ students }) => {
  return (
    <>
      {students.map((student) => (
        <Items key={student.id} student={student} />
      ))}
    </>
  );
};

export default List;

