import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

const leftFrame = style({
    width:"25rem",
    height:"100%"
})

const initiale = style({
    textAlign:"center",
    justifyContent:"center",
})

export {leftFrame, initiale};