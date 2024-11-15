const mongoose = require('mongoose')

const DocumentSchema = new mongoose.Schema({
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
    name: String,
    documentType: String,
    documentID: String,
    dateIssued: Date,
    dateReceived: Date,
    expiryDate: Date,
    responsibleDep: String,
    status: String,
    notes: String,
    version: Number,
    filePath: String,
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})

module.exports = mongoose.model('Document', DocumentSchema)
