const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '597ea5efa142c5f316524635';
//
// if(!ObjectID.isValid(id)) {
//   console.log("ID not valid");
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then({
//   _id: id
// }).then((todo) => {
//   if (!todo) {
//     return console.log("Id not found");
//   }
//   console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));

User.findById('597eadbafcf5da601b6725b9').then((user) => {
  if(!user) {
    return console.log('User not found');
  }
    console.log('User by ID', user);
}).catch((e) => console.log(e));
