const mongoose = require("mongoose");
const DB =
'mongodb+srv://eden:eden@cluster0.bqfktxm.mongodb.net/eden?retryWrites=true&w=majority';
const menuSchema = mongoose.Schema({
  name: String,
  price: String,
  category: String,
  desc: String,
  image: String
});
const Menu = mongoose.model("menu", menuSchema);

exports.getAllFoodsByCategory = category => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(DB)
      .then(() => {
        return Menu.find({ category: category });
      })
      .then((foods) => {
        mongoose.disconnect();
        resolve(foods);
      })
      .catch((err) => {
        mongoose.disconnect();
      });
  });
};
exports.addFoods = (data) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(DB)
      .then(() => {
        const food = new Menu(data)
        food.save()
        resolve()
      })
  });
};

exports.deleteMenu = id =>{
  return new Promise((resolve, reject)=>{
    mongoose.connect(DB).then(()=>{
      Menu.findOneAndDelete({_id:id}).then(()=>{
        resolve()
      }).catch(err=>{
        reject(err)
      })
    })
  })
}