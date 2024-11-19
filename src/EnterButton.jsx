import React from 'react'

function EnterButton ({handleEnter}){
const enter = "Enter"
return(
<div className = "p-2 border rounded uppercase cursor-pointer" onClick={()=> handleEnter()}>enter</div>
)
}
export default EnterButton