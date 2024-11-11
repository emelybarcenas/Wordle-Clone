import React from 'react'
function Keyboard(){
 const qwerty = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
return(
<div>
{qwerty.map((row) =>{
<div>
{row.split ('').map((key)=>(
    <div>{key}</div>
))}
</div>
})}


</div>
)

}
export default Keyboard