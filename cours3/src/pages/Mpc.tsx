import { useState, useEffect } from "react";


function Mpc() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((count) => count + 1);
  }, []);

  return <h1>I've rendered {count} times!</h1>;
};
  
export default Mpc;
  