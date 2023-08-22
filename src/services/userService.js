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
          const createdUser = await newUser.signUp();
          return createdUser.toJSON();
     } catch (error) {
          console.log(`Error! ${error}`);
          return {};
     }
}
