import { useState } from "react"
import './Input.css'

export const Input=(props)=>{
    let[value, setValue]=useState('')
    
    function getValue(e){
        setValue(e.target.value);
    }

    function a(event){
        event.preventDefault()
        props.func(value);
    }
    
    return(
        <div>
            <form onSubmit={a} className='form'>
                <input className="input" type="text" onChange={getValue} value={value}/>
                <input className="btn" type="submit" value="push" />
            </form>
            
        </div>
    )
}