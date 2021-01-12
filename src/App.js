import logo from './logo.svg';
import './App.css';

function App() {
  let jobs = [{name: "Dali", desc: "Dev dev dev", hourly: 13},{name: "Foco Dishwasher", desc: "wash wash wash", hourly: 10},{name: "Tutor", desc: "teach teach teach", hourly: 12}]
  return (
    <div className="App">
      <h1>Dartmouth On-Campus Jobs</h1>
      <table>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Pay (hourly)</th>
          </tr>
        {jobs.map((job)=>{
          return(
            <tr>
              <td>{job.name}</td>
              <td>{job.desc}</td>
              <td>${job.hourly}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
