//import React from 'react'

function Contact_tk() {
  const data=[{
     Email:"suji@123",
     Mobilenumber:"9123456780",
     Linkdin:"https//linkdIn.suji/profile"
  }]
 

  return (
    <div>
  {data.map((item) => (
    <div>
      <p>Email: {item.Email}</p>
      <p>Mobilenumber: {item.Mobilenumber}</p>
      <p>LinkedIn: {item.Linkdin}</p>
      </div>
    ))}
    </div>
  )
}

export default Contact_tk