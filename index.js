// Add your code here


function submitData(user_name, user_email) {
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: user_name,
      email: user_email
    })
  });  
  
}