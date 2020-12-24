import mongoose from 'mongoose';
 
const userSchema = new mongoose.Schema(
  {
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