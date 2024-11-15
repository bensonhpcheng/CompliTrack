const mongoose = require('mongoose')

const SupplierSchema = new mongoose.Schema({
    name: String,
    contactInfo: String,
    ingredients: [String],
    documents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Document' }],
    // Include other fields as needed
})

module.exports = mongoose.model('Supplier', SupplierSchema)
