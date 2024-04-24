const mongoose = require('mongoose');
const { Schema } = mongoose;
const ticketSchema = mongoose.Schema({
    ticketraised : {
        type : Boolean,
        default : true
    },
    forClients : {
        type: Schema.Types.ObjectId,
        ref: "clients",
    },
    toEmployee : {
        type: Schema.Types.ObjectId,
        ref: "employees",
    },
    services :{
        type : String,
        required : false
    },
    description :{
        type : String,
        required : false
    },
    issueDate  : {
        type : String,
        required : false
    },
    revertBack:{
        type : String,
        default : false
    },
    progressValue : {
        type : String,
        enum : ["accept", "done"],
        default : "accept"
    },
    revertIssue: { type: String, default : "" },
    
});

const TicketAssigned = mongoose.model('ticketAssigned', ticketSchema);
module.exports = TicketAssigned;