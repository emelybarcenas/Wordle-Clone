import React from 'react'

function BackSpace({handleBackspace}){
return(
<div className="p-2 border rounded uppercase cursor-pointer" onClick={()=> handleBackspace()}>Backspace</div>
)
}
export default BackSpace