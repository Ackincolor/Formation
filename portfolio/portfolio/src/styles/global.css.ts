import { globalStyle, keyframes} from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box"
});

globalStyle("html", {
  fontSize: "100%"
});

globalStyle("body", {
  margin: 0,
  
});

globalStyle("#app", {
  padding: vars.space.large,
  fontFamily: vars.fonts.body,
  background: vars.colors.background,
  color: vars.colors.text.normal,
  minHeight: "100vh",
  width:"100vw"
});

globalStyle("button",{
    backgroundColor: `${vars.colors.background} !important`,
    color: vars.colors.text.normal
})

globalStyle(".container",{
  width:"100%",
  height:"100%"
})

globalStyle(".card",{
  boxShadow: `0px 0px 5px ${vars.colors.shadowColor}`,
  borderRadius:"5px",
  WebkitTransition: 'box-shadow 0.3s linear'
})
globalStyle(".card:hover",{
  boxShadow: `0px 0px 10px ${vars.colors.shadowColor}`,
  borderRadius:"5px"
})

globalStyle(".text-center",{
  textAlign:"center"
})