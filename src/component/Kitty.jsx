import { Create } from "./Create"

export const Kitty=(props)=>{
    return(
        <div >
            <Create className='img' picture = {props.url.map((i)=><div key={i.newid}><img src={i.getUrl} alt="#"/><h2>{i.getName}</h2></div>)}/>
        </div>
    )

}