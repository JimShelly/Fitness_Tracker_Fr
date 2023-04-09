import React from "react";

const Message = () => {
    return(
        <h3> Message</h3>
    )}

    const postMessage = async (BASE_URL, TOKEN_STRING_HERE) => {
        try {
          const response = await fetch(`${BASE_URL}/posts/5e8929ddd439160017553e06/messages`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${TOKEN_STRING_HERE}`
            },
            body: JSON.stringify({
              message: {
                content: "Do you still have this?  Would you take $10 less?"
              }
            })
          });
          const result = await response.json();
          console.log(result);
          return result
        } catch (err) {
          console.error(err);
        }
      }
      
export default Message 