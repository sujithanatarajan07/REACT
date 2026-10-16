//import React from 'react'

function About_tsk() {
  const data =[{
    collegename:"MEC",
    year_of_study:"3rd year",
    career:["IT " , " DataAnalytics"],
    hobbies:["Problem Solving "," ListeningSongs"]
  }]
  return (
    <div>{data.map((item) => (
    <div>
      <p>Collegename: {item.collegename}</p>
      <p>Year of Study: {item.year_of_study}</p>
      <p>Career: {item.career}</p>
      <p>Hobbies: {item.hobbies}</p>
      </div>
    ))}

    </div>
  )
}

export default About_tsk