import { globalStyle, fontFace} from "@vanilla-extract/css";
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
  fontFamily: vars.fonts.body,
  background: vars.colors.background,
  color: vars.colors.text.normal,
  minHeight: "100vh",
  width:"100vw"
});

globalStyle("#mainContainer", {
  fontFamily: vars.fonts.body,
  background: vars.colors.backgroundTransparent,
  color: vars.colors.text.normal,
  minHeight: "100vh",
  width:"100vw",
  display:'flex',
  flexDirection:'row'
})

globalStyle("#mainFrame", {
  padding: vars.space.large,
  width:"100%",
  height:"100vh",
  background: vars.colors.background,
})

globalStyle("button",{
    backgroundColor: `${vars.colors.background} !important`,
    color: vars.colors.text.normal
})


globalStyle(".text-center",{
  textAlign:"center"
})

globalStyle('.glassCard',{
  background: "rgba(255, 255, 255, 0.14)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.25)",
  height:"100%",
  width:"100%",
  flexGrow:1
})

globalStyle('css-doodle', {
  position:'fixed',
  top:0,
  left:0,
  zIndex:-1
})