import dotenv from 'dotenv';

dotenv.config();
console.log(process.env.MONGO_URL)
export default {
    mongo:{
        URL: process.env.MONGO_URL
    }
}