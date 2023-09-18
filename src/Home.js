import React from "react";

import List from "./List";

const Home = ({ students, setStudents }) => {
  return (
    <main className="Home">
      {students.length ? (
        <List students={students} />
      ) : (
        <h1>No details to display</h1>
      )}
    </main>
  );
};

export default Home;
