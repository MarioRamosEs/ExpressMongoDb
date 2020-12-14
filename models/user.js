import mongoose from 'mongoose';
 
const userSchema = new mongoose.Schema(
  {
    _id: {
        type: mongoose.Types.ObjectId
    },
    Name: {
      type: String,
      unique: true,
      required: true,
    },
    Phone: {
        type: String,
        unique: false,
        required: false,
      },
  }
);
 
const User = mongoose.model('User', userSchema);
 
export default User;