//import React from 'react'
function Project_tk() {
  const data =[{
    proname:"Smart Attendance",
    proAbout:"Attendace automatically taken for students & convey to parents & Teachers"
  }]
  return (
    <div>
      {data.map((item) => (
        <div>
          <p>Project: {item.proname}</p>
           <p>About: {item.proAbout}</p>
        </div>
      )
    )}
    </div>
  )
}

export default Project_tk