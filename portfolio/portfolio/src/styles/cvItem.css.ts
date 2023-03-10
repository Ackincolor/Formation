import { vars } from "./theme.css";
import { globalStyle,style} from '@vanilla-extract/css';

const cvItem = style({
   display: 'flex',
   flexDirection:'column',
   width:'350px',
   height:'350px',
   padding:'0.5em', 
   margin:'1em'
})

const cvItemHeader = style({
    display: 'flex',
    width:'100%',
    height:'3em',
    fontSize:'1.3em',
    textAlign:'center'
 })

 globalStyle(`${cvItemHeader} > span`,{
    width: "100%",
    textAlign:'center'
 })


export {cvItem , cvItemHeader};