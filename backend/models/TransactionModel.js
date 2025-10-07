const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
},
  type: { 
    type: String, 
    enum: ['income','expense'], 
    required: true 
},
  title: { 
    type: String,
    required: true,
    trim: true,
    maxLength: 100 
},
  amount: { 
    type: Number, 
    required: true,
    maxLength: 20,
    trim: true 
},
  category: { 
    type: String,
    required: true,
    trim: true 
},
  description: { 
    type: String,
    required: true,
    trim: true 
},
  date: { 
    type: Date, 
    required: true, 
    default: Date.now 
},
  createdAt: { 
    type: Date, 
    default: Date.now 
}
});

module.exports = mongoose.model('transaction', TransactionSchema);
