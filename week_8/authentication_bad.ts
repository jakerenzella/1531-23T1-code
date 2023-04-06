// type Data = {
//   users: { [email: string]: string };
// };

// const data: Data = {
//   users: {},
// };

// function register(email: string, pw: string) {
//   // don't register a duplicate email
//   if (email in data.users) {
//     return false;
  
//   // let's register the user... 
//   } else {
//     data.users[email] = pw;
//     return true;
//   }
// }

// function login(email: string, pw: string) {
//   if (email in data.users) {
//     if (pw === data.users[email]) {
//       return true;
//     }
//   }
//   return false;
// }
