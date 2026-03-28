import { useEffect, useState } from "react";
import API from "../../api/axios";

export default function Timetable() {

  const [timetable,setTimetable] = useState([]);

  useEffect(()=>{

    API.get("/student/timetable")
    .then(res=>{
      setTimetable(res.data);
    })
    .catch(err=>{
      console.log("Timetable API error:",err);
    })

  },[])

  return (
    <div style={styles.container}>
      <h2>Class Timetable</h2>

      <div style={styles.card}>

        <table style={styles.table}>

          <thead>
            <tr>
              <th>Day</th>
              <th>Subject</th>
              <th>Time</th>
              <th>Teacher</th>
            </tr>
          </thead>

          <tbody>

            {timetable.map((row,index)=>(
              <tr key={index}>
                <td>{row.day}</td>
                <td>{row.subject}</td>
                <td>{row.time}</td>
                <td>{row.teacher}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
}

const styles = {
  container:{
    padding:"20px",
    background:"#ffffff"
  },

  card:{
    background:"#ebf5ff",
    padding:"20px",
    borderRadius:"10px"
  },

  table:{
    width:"100%",
    borderCollapse:"collapse"
  }
};