import { style, fontFace } from "@vanilla-extract/css";
import { vars } from "./theme.css";


const listMenu = style({
    marginTop:"auto",
    width:"100%",
    height:"150px",
    listStyle: "none",
    display:"flex",
    flexDirection:'row',
    justifyContent: "space-between"
})

const listMenuItem = style({
    display: "inline-block",
    fontFamily: "Tusker",
    fontSize:48,
    fontVariationSettings:"'hght' 10;",
   
})

const hoverLetter = style({
    backgroundColor:"transparent",
    color: vars.colors.text.normal,
    ':hover': {
        fontVariationSettings:"'hght' 100;"
    },
})

export {listMenu, listMenuItem, hoverLetter};