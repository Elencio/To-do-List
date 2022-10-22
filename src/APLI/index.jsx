import React, { useState, useMemo, useEffect } from "react";
import "./app.css";
import Card from "../components/Card";

function App() {
  const [muda, setMuda] = useState("");
  const [students, setStudents] = useState([]);
  const [tasks, setTasks] = useState([]);

  /* function handlecontador(newstudent) {
    this._contador = 0;
    alert(this._contador);
    const icontador = document.querySelector("button");
    if (icontador) {
      icontador.addEventListener("click", this.incrementa);
    }
    setContador(icontador);
  }*/

  function handleaddstudents() {
    const newstudent = {
      status: ``,
      nome: muda,
      tempo: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
    setStudents((prevState) => [...prevState, newstudent]);
  }
  function handleRemoveStudents(id) {
    const newstudent = students.filter((_, index) => index !== id);
    setStudents(newstudent);
  }

  function handleDoneStudents(id) {
    const newstudent = students.map((student, index) =>
      index === id
        ? (student = {
            status: `done`,
            nome: student.nome,
            tempo: new Date().toLocaleTimeString("pt-BR", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }),
          })
        : student
    );
    setStudents(newstudent);
  }
  const onChangeCompleted = (id) => {
    const newstudent = students.findIndex((_, index) => index === id);

    const updatedstudents = [...students];
    updatedstudents[studentsIndex].completed =
      !updatedstudents[studentsIndex].completed;

    setStudents(updatedstudents);
  };

  const totalstudents = useMemo(() => {
    return students.length;
  }, [students]);

  const totalCompletedstudents = useMemo(() => {
    return students.filter((student) => student.completed).length;
  });

  return (
    <>
      <div className="container">
        <h1 className="gradient">List To Do</h1>
        <input
          type="text"
          placeholder="Digite a sua tarefa"
          onChange={(e) => setMuda(e.target.value)}
        ></input>
        <button type="button" onClick={() => handleaddstudents()}>
          Submeter
        </button>
        <div className="cont">Tarefas: {totalstudents}</div>
        {students.map((student, index) => (
          <Card
            status={student.status}
            key={student.nome}
            handleRemove={() => handleRemoveStudents(index)}
            handleComplete={() => handleDoneStudents(index)}
            onChangeCompletedTask={() => onChangeCompleted(index)}
            nome={student.nome}
            tempo={student.tempo}
          />
        ))}
      </div>
    </>
  );
}

export default App;
