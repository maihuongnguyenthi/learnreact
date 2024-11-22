import { useState } from "react";

function TodoList() {
    
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(()=>{
        //phân tích một json đc lấy trong localStorage thành một đối tượng js 
        const storageJobs=JSON.parse(localStorage.getItem('jobs'))
        return storageJobs ?? [];
    })

    const handleSubmit = () => {
        setJobs(prev=>{
            const newJobs=[...prev,job]

            //Save to local storage
            //chuyển một đối tượng js thành một json 
            const jsonJobs=JSON.stringify(newJobs)
            localStorage.setItem("jobs",jsonJobs)
            return newJobs
        })
        setJob("")
    }
    return (
        <div style={{ padding: 20 }} className="App">
            <input 
                value={job}
                onChange={e=>setJob(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>

            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
