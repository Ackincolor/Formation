declare global {
    namespace JSX {
       interface IntrinsicElements {
       'css-doodle': {}
     }
   }
 }

import "css-doodle";

export default ({ rule = "" }) => <css-doodle>{rule}</css-doodle>;
