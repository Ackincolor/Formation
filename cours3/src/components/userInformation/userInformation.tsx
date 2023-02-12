import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserInformation = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
       { isAuthenticated && (
        <div>
            <p><button onClick={async () => {
            const token = await getAccessTokenSilently();
            console.log(token);
            }}>printToken</button></p>
        </div>
        )}
    </>
  );
};

export default UserInformation;