const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
  table: {
    type: Array,
    required: true
  },
  over: {
    type: Boolean,
    required: true,
    default: false
  },
  solution: {
    type: Array,
    required: true
  },
  time: {
    type: Number,
    require: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Game', gameSchema)
