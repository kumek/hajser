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
    static findByPayerID(payerID) {
        return this.find({payerID}).exec();
    }
    
    static createTransaction(newTransaction, callback) {
	    newTransaction.save(callback);
}
}

transactionSchema.plugin(loadClass, Transaction);

export default mongoose.model('Transaction', transactionSchema);