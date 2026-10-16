import {useState} from 'react'
function Accordion_tk() {
  const[open,setOpen]=useState();
  const data=[{
    id:1,iLike:"I liked to watch anime" },
{id:2,favourites:"Attack-on-Titan"}]
  return (
<div>
{data.map((item) => (
<div key={item.id}>
{item.iLike&& (
<>
<h2 onClick={() =>id}>
</h2>
{open === 1 && <p>{item.iLike}</p>}
</>
)}
{item.favourites && (
        <>
          <h2 onClick={() => setOpen(open === 2 )}>
           
          </h2>
          {open === 2 && <p>{item.favourites}</p>}
        </>
      )}
    </div>
  ))}
</div>

);
}

export default Accordion_tk;