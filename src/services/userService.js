import Parse from 'parse/dist/parse.min.js';

export async function signupUser(username, password, email) {
     var currentUser = Parse.User.current();
     if (currentUser) {
          Parse.User.logOut();
     }
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
