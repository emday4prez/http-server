// const superagent = require('superagent')

// function add(){
//    const firstName = faker.name.firstName();
//   const lastName = faker.name.lastName();
//   const email = faker.internet.email(firstName, lastName);

//   const user = {firstName, lastName, email}

//   const url = 'http://localhost:8000/add';
  
//   superagent
//    .post(url)
//    .send(user)
//    .end((err, res) => {
//     if(err){
//      console.log(err)
//     }else{
//      console.log(res);
//      if(res.statusCode === 200){
//       document.getElementById('status').innerHTML = `
//       <b>Response: status code 200 </b> The HTTP 200 ok success status response code indicates the HTTP request has succeeded. <br>
//       User: ${firstName} ${lastName}<br>
//       ${new Date()}
//       `;
//      }
//     }
//    });
// }
