import mongoose from 'mongoose';
import loadClass from 'mongoose-class-wrapper';

var transactionSchema = new mongoose.Schema({
    //TODO: Change this payers numbers to refs to Users
    payerID: Number,
    //TODO: Change this payers numbers to refs to Users
    payeeID: Number,
    value: Number,
    done: {type: Boolean, default: false},
    createDate: {type: Date, default: Date.now}
});

class Transaction {
    static findById(id) {
        return this.findOne({id}).exec();
    }

    static findByPayerID(payerID) {
        return this.find({payerID}).exec();
    }
}

transactionSchema.plugin(loadClass, Transaction);

export default mongoose.model('Transaction', transactionSchema);