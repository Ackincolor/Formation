import {cvItem , cvItemHeader} from '../styles/cvItem.css'
import logocv from '../assets/img/logocv1.svg'

type CvItemProps ={
    title:string,
    image:string,
    content:string,
    period:string
}


function CvItem(props:CvItemProps) {
    return (
        <>
            <div className={cvItem + " "}>
                <div className={cvItemHeader}>
                    <span className='text-center'>{props.title}</span>
                </div>
                <div>
                    <p>{props.content}</p>
                </div>
                <img src={ logocv }></img>
            </div>
            
        </>
    )
}

export default CvItem;