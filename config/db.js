import mongoose from "mongoose"





const connect=()=>{
    return mongoose.connect('mongodb+srv://vishnu:vishnu123@cluster0.tzb9uas.mongodb.net/?retryWrites=true&w=majority')
}

export default connect