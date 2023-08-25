import Parse from 'parse/dist/parse.min.js';

export async function addQuiz(creatorId, name) {
     const Quiz = Parse.Object.extend('Quiz');
     const quiz = new Quiz({
          name,
          creatorId,
     });

     try {
          const response = await quiz.save();
          return response.toJSON();
     } catch (error) {
          console.log(`Error: ${error}`);
          return {};
     }
}

export async function getQuizzesByUser(userId) {
     const Quiz = Parse.Object.extend('Quiz');
     const query = new Parse.Query(Quiz);
     query.equalTo('creatorId', userId);

     try {
          const quizzes = await query.find({ json: true });
          return quizzes;
     } catch (error) {
          console.log(`Error: ${error}`);
     }
}
