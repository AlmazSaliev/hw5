import { Create } from "./Create"


export const Data=(props)=>{
    return(
        <div>
            <Create className='text' createText={props.getDatatext.map((i)=><div key={i.newid}><h3>{i.getText}</h3><h3>{i.getDate}</h3></div>)}/> 
        </div>
    )
}