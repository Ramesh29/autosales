import mongoose, {Schema} from 'mongoose';

const carSchema = mongoose.Schema(

    {

        name: {
            type: String,
            required : [ true, "Please enter name "]
        },
        year: {
            type: String,
            required: [ true, "Please enter year"]
        },
        price: {
            type : String,
            required : [ true, "Please enter price"]
        },
        specs: {
            type : String,
            required: [ true, "Please enter specs"]
        },
        imageurl: {
            type: String,
            required: [ true, "Please enter url image"]
        }
    }
)

const Car = mongoose.models.Car ||  mongoose.model('Car', carSchema);

export default Car;