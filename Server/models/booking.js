const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true
    },
    DocumentType: {
        type: String,
        required: true
    },
    AppointmentDate: {
        type: Date,
        required: true
    },
    TimeSlot: {
        type: String,
        required: true
    }
})
const BookingModel = mongoose.model('Bookings', BookingSchema);

module.exports = BookingModel;