import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

const header = style({
    marginTop:"0",
    width:"100%",
    display: "flex",
    justifyContent:"flex-end"
})

export {header};