import mongoose from 'mongoose';
 
const userSchema = new mongoose.Schema(
  {
    _id: {
        type: mongoose.Types.ObjectId
    },
    Name: {
      type: String,
      unique: false
    },
    Phone: {
        type: String,
        unique: false
      },
  }
);
 
const Users = mongoose.model('Users', userSchema);
 
export default Users;