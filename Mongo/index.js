const mongoose = require('mongoose');

main().then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String, // String is shorthand for {type: String}
    email: String,
    age: Number,
  });

  const User = mongoose.model("User", userSchema);

  User.deleteOne({name: "Tony"})
  .then((res) => {
    console.log(res);
  });

  // User.findOneAndUpdate({name: "Tony"}, {age: 51}, {new: false})
  // .then((res) => {
  //   console.log(res);
  // })

  // User.updateOne({name: "Tony"}, {age: 49}).then((res) => {
  //   console.log(res);
  // })

//   User.findById( "6507ce890f91c9710038c18f" )
//   .then((data) => {
//     console.log(data);
//   });

//   User.findOne( { _id: "6507ce890f91c9710038c18f" } )
//   .then((data) => {
//     console.log(data);
//   });

//   User.insertMany([
//     { name: "Tony", email: "tony@email.com", age: 50},
//     { name: "lee", email: "lee@email.com", age: 30},
//     { name: "alva", email: "alva@email.com", age: 45},
//   ]).then((res) => {
//     console.log(res);
//   });

//   const user2 = new User ({
//     name : "Eve",
//     email : "eve@yahoo.in",
//     age : 48,
//   });

//   user2
//   .save()
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err);
//   }) 

