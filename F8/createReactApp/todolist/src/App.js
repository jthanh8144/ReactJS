import { useState } from 'react';

function App() {
  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs')) ?? [];
    return storageJobs;
  });

  const handleSubmit = () => {
    if (job !== '') {
      setJobs(prev => {
        const newJobs = [...prev, job];
        const jsonJobs = JSON.stringify(newJobs);
        localStorage.setItem('jobs', jsonJobs);
        return newJobs;
      });
      setJob('');
    }
  }

  const handleDelete = (element) => {
    while (!element.matches('li')) {
      element = element.parentElement;
    }
    const index = element.getAttribute('data');
    setJobs(prev => {
      let newJobs = [];
      jobs.forEach((job, i) => {
        if (i != index) {
          newJobs = [...newJobs, job];
        }
      });
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem('jobs', jsonJobs);
      return newJobs;
    });
  }

  return (
    <div className="App">
      <input value={job} onChange={e => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index} data={index}>
            {job}
            <button onClick={(e) => handleDelete(e.target)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
