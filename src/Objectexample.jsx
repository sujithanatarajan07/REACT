const Objectexample=()=> {
    const student= [
         {id:1,
        name:"Arujun",
        age:19,
        department:"IT",
        mark:90
         }
    ]
   // const data=student.map((i) => {
    //return (
      //  <>
        //{i.name}
        //</>
    //)
     //} )
     //console.log(data);
     const numbers=[1,2,3,4,5,6];
     console.log("pop",numbers.pop(),numbers)
     console.log("push",numbers.push(7),numbers)
     console.log("shift",numbers.shift(2),numbers)// remove first element
     console.log("unshift",numbers.unshift(0),numbers)
     const filtered=numbers.filter (
        function(x) {
            return x>5
        }
     )
     console.log(filtered)
     const names=["madhu","kani","priya","suji"]
     const result=names.slice(1,3)
     console.log("result",result,names)
     const spliceresult = names.splice(0,1,"added")//start from 1 till count 2 add the value
     console.log(names)
     console.log(">>>>>",spliceresult)
     //const datamark=student.filter(
     // function(i) {
     //return i.marks > 80
     //}
     //)
     //console.log(datamark)
     const datamark =student.filter((i) =>i.mark >80)
     console.log(datamark)
    return (
        <>
        <table>
            <thead>
                <tr>
                <th>name</th>
                <th>age</th>
                <th>mark</th>
                <th>type</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Myna</td>
                <td>20</td>
                <td>80</td>
                <td>Mental</td>
                </tr>
                <tr>
                    <td>Suji</td>
                    <td>19</td>
                    <td>85</td>
                    <td>Goodu..</td>
                </tr>
            </tbody>

        </table>
        {datamark.map((i)=> {
            return (
                <>
                {i.name}
                </>
            )
        }
       ) }
        </>
        
    )
     
}
export default Objectexample

    