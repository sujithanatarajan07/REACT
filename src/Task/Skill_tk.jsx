
function Skill_tk() {
  const data=[{
    Tskill:["Java "," MERN"],
    Sskill:["Communication","Team Work"]
 } ]
  return (
    <div>
      {data.map((item) => (
    <div>
      <p>SoftSkill: {item.Tskill}</p>
      <p>TechnicalSkill: {item.Sskill}</p>
      </div>
    ))}
    </div>
  )
}

export default Skill_tk