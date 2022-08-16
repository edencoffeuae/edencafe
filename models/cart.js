const mongoose = require("mongoose");
const DB =
'mongodb+srv://eden:eden@cluster0.bqfktxm.mongodb.net/eden?retryWrites=true&w=majority';
const cartSchema = mongoose.Schema({
  name: String,
  image: String,
  desc:String,
  price: String,
  amount: String,
  productId: String,
  userId: String,
  timestamp: Date,
});
const cartItem = mongoose.model("cart", cartSchema);

exports.addCartItem = (data)=>{
    return new Promise((resolve, reject)=>{
        mongoose.connect(DB).then(()=>{
            let item = new cartItem(data)
            item.save()
            resolve()
        }).catch(err=>{
            reject(err)
        })
    })
}

exports.getCartItems = id =>{
  return new Promise((resolve, reject)=>{
    mongoose.connect(DB).then(()=>{
      cartItem.find({userId:id}).then((items)=>{
        resolve(items)
      }).catch(err=>reject(err))
    })
  })
}
exports.deleteItem = (userId,productId) =>{
  return new Promise((resolve, reject)=>{
    mongoose.connect(DB).then(()=>{
      cartItem.findOneAndDelete({userId:userId,productId:productId}).then(()=>{
        resolve()
      }).catch((err)=>{
        reject(err)
      })
    })
  })
}
exports.deleteCart =  id =>{
  return new Promise((resolve, reject)=>{
    mongoose.connect(DB).then(()=>{
      cartItem.deleteMany({userId:id}).then(()=>{
        resolve()
      })
    }).catch(err=>{
      console.log(err)
    })
  })
}