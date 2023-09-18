import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Add from "./Add";
import About from "./About";
import { Route, Routes, Link, useNavigate, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Students from "./Students";
import Edit from "./Edit";
import api from "./api/students";
function App() {
  const [name, setName] = useState();
  const [rollno, setRollno] = useState();
  const [dept, setDept] = useState();
  const [editName, setEditName] = useState();
  const [editRollno, setEditRollno] = useState();
  const [editDept, setEditDept] = useState();
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await api.get("/students");
      setStudents(response.data);
    };
    fetchdata();
  }, []);

  const handleDelete = async (id) => {
    await api.delete(`/students/${id}`);
    const newList = students.filter((student) => student.id !== id);
    setStudents(newList);
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = students.length ? students[students.length - 1].id + 1 : 1;
    const newStudent = {
      id: id,
      name: name,
      rollno: rollno,
      dept: dept,
    };
    await api.post("/students", newStudent);
    const allStudents = [...students, newStudent];
    setStudents(allStudents);
    setDept("");
    setName("");
    setRollno("");
    navigate("/");
  };

  const handleEdit = async (id) => {
    const editRecord = {
      id: id,
      rollno: editRollno,
      name: editName,
      dept: editDept,
    };
    await api.put(`/students/${id}`, editRecord);
    setStudents(
      students.map((student) =>
        student.id === id ? { ...editRecord } : student
      )
    );
    navigate("/");
  };
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Home students={students} setStudents={setStudents} />}
        />
        <Route path="Add">
          <Route
            index
            element={
              <Add
                name={name}
                rollno={rollno}
                dept={dept}
                setName={setName}
                setDept={setDept}
                setRollno={setRollno}
                handleSubmit={handleSubmit}
              />
            }
          />
        </Route>
        <Route
          path="student/:id"
          element={<Students handleDelete={handleDelete} students={students} />}
        />
        <Route
          path="edit/:id"
          element={
            <Edit
              editName={editName}
              editRollno={editRollno}
              editDept={editDept}
              setEditName={setEditName}
              setEditRollno={setEditRollno}
              setEditDept={setEditDept}
              students={students}
              handleEdit={handleEdit}
            />
          }
        />

        <Route path="About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
