import mongoose from 'mongoose';
import Users from './users';
 
const connectDb = () => (mongoose.connect(process.env.DATABASE_URL), {useNewUrlParser: true});
 
const models = { Users };
 
export { connectDb };
 
export default models;