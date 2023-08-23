import Parse from 'parse/dist/parse.min.js';

export async function signupUser(username, password, email) {
     const newUser = new Parse.User();
     newUser.setUsername(username);
     newUser.setEmail(email);
     newUser.setPassword(password);

     try {
          await newUser.signUp();
          return Parse.User.current().toJSON();
     } catch (error) {
          console.log(`Error! ${error}`);
          return {};
     }
}

export async function loginUser(username, password) {
     try {
          await Parse.User.logIn(username, password);
          return Parse.User.current().toJSON();
     } catch (error) {
          console.log(`Error! ${error}`);
          return null;
     }
}

export function checkCurrentUser() {
     const currentUser = Parse.User.current();
     return currentUser ? currentUser.toJSON() : null;
}

export function logout() {
     Parse.User.logOut();
}
