import { vars } from "./theme.css";
import { globalStyle,style,createVar,fallbackVar} from '@vanilla-extract/css';


const dashoffsetVar = createVar();

const cv = style({
    display:"flex",
    position:"relative",
    flexDirection:'column',
    margin:'0 2em 0 2em'
})

const cvRight = style({
    marginLeft:'auto'
})

const cvPath = style({
    position: "absolute",
    top:"25px",
    left:"15px",
    height:"100%",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: vars.colors.shadowColor
})

const cvPathDot = style({
    strokeDasharray:"1px, 1000000px",
    strokeDashoffset:"10px",
    strokeWidth: "12px",
    stroke: vars.colors.shadowColor,
    filter: ` drop-shadow(0 0 1px ${vars.colors.shadowColor});`
    
})
const cvPathGrey = style({
    /*strokeDasharray:`calc( ${fallbackVar(dashoffsetVar)} + 500px ) 15000px`,
    strokeDashoffset:fallbackVar(dashoffsetVar),*/
    strokeDashoffset: "-55907.8px",
    strokeDasharray: "1522.21px, 1000000px",
    strokeWidth: "8px",
    stroke: "grey",
    filter: ` drop-shadow(0 0 1px ${vars.colors.shadowColor});`
    
})
const cvPathBlack = style({
    strokeDashoffset: "-55907.8px",
    strokeDasharray: "522.21px, 1000000px",
    strokeWidth: "10px",
    stroke: "black",
    filter: ` drop-shadow(0 0 1px ${vars.colors.shadowColor});`
    
})

export {cv, cvRight, cvPath, cvPathDot, cvPathGrey, cvPathBlack, dashoffsetVar}