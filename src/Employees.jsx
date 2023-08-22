import { useState } from "react";
 const Employees = () => {
      const [employees, setEmployees] = useState([
         {
            id:1,
            fullName:"heidy",
            designation:"estudiante",
            gender:"female",
            teamName:"TeamA"
        
         },
         {
            id:2,
            fullName:"pedro",
            designation:"profesor",
            gender:"male",
            teamName:"TeamA"
        
         },
         {
            id:3,
            fullName:"adriana",
            designation:"estudiante",
            gender:"female",
            teamName:"TeamA"
        
         },
         {
            id:4,
            fullName:"sebastian",
            designation:"estudiante",
            gender:"male",
            teamName:"TeamA"
        
         },
         {
            id:5,
            fullName:"felipe",
            designation:"estudiante",
            gender:"male",
            teamName:"TeamB"
        
         },
         {
            id:6,
            fullName:"estevan",
            designation:"estudiante",
            gender:"male",
            teamName:"TeamB"
        
         },
         {
            id:7,
            fullName:"Dayanna",
            designation:"estudiante",
            gender:"female",
            teamName:"TeamB"
        
         },
        
         {
            id:8,
            fullName:"martinez",
            designation:"estudiante",
            gender:"male",
            teamName:"TeamB"
        
         },
         {
            id:9,
            fullName:"hola",
            designation:"estudiante",
            gender:"male",
            teamName:"TeamC"
        
         },
         {
            id:10,
            fullName:"cardenas",
            designation:"estudiante",
            gender:"female",
            teamName:"TeamC"
        
         },
         {
            id:11,
            fullName:"Geraldine",
            designation:"estudiante",
            gender:"female",
            teamName:"TeamC"
        
         },
         {
            id:12,
            fullName:"carlos",
            designation:"estudiante",
            gender:"male",
            teamName:"TeamC"
        
  } ]);
    
      return (
        <div className="main-container">
          <main>
            <h1>Lista de Empleados</h1>
            <table className="employee-table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Empleado</th>
                  <th>Género</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.fullName}</td>
                    <td>{employee.designation === "estudiante" ? "Sí" : "No"}</td>
                    <td>{employee.gender === "female" ? "Femenino" : "Masculino"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>Total de empleados: {employees.length}</p>
          </main>
        </div>
      );
    };
    
export default Employees;
