import './Create.css'

export const Create=(props)=>{
    let classes = 'box '+ props.className
    return(
        <div className={classes}>
            <div>{props.picture}</div>
            <div>{props.createText}</div>
        </div>
    )
}