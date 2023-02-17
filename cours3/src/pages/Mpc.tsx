import { useState, useEffect } from "react";
import CardViewer from "../components/cardViewer/CardViewer";


function Mpc() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <>
      <h1>I've rendered {count} times!</h1>
      <CardViewer />
    </>
  );
};
  
export default Mpc;
  