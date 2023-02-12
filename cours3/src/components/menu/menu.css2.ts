import {style} from '@vanilla-extract/css'
import { vars } from '../theme.css';

export const sidebar = style({
    color: vars.colors.primary,
    backgroundColor: "white",
    boxShadow:'0 2px 20px 0 rgba(0, 0, 0, 0.05)',
    position:"fixed"
});