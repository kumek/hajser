import mongoose from 'mongoose';
import loadClass from 'mongoose-class-wrapper';

var userSchema = new mongoose.Schema({
    name: String,
    username: String
});

class User {
    static findById(id) {
        return this.findOne({id}).exec();
    }

    static findByPayerID(payerID) {
        return this.find({payerID}).exec();
    }
}

userSchema.plugin(loadClass, User);

export default mongoose.model('User', userSchema);