import mongoose from 'mongoose';
import loadClass from 'mongoose-class-wrapper';

var paymentSchema = new mongoose.Schema({
    //TODO: Change this payers numbers to refs to Users
    creatorId: Number,
    value: Number,
    createDate: {type: Date, default: Date.now},
    transactionsId: Array
});

class Payment {
    static findById(id) {
        return this.findOne({id}).exec();
    }

    static findByCreatorId(creatorId) {
        return this.find({creatorId}).exec();
    }
    
    static createPayment(newPayment, callback) {
	    newPayment.save(callback);
}
}

paymentSchema.plugin(loadClass, Payment);

export default mongoose.model('Payment', paymentSchema);