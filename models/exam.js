const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Record = require("./record");
const ExamSchema = new Schema({
    course: {
        type: Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
    semester: {
        type: Number,
        enum: [1, 2],
    },
    startTime: {
        type: Date,
    },
    endTime: {
        type: Date,
    },
    students: [
        {
            type: Schema.Types.ObjectId,
            ref: "Student",
            required: true,
        },
    ],
    room: {
        type: String,
    },
});

ExamSchema.post("save", async function (exam, next) {
    for (let student of exam.students) {
        const record = new Record({
            courseID: exam.course,
            studentID: student,
        });
        await record.save();
    }
    next();
});

const Exam = mongoose.model("Exam", ExamSchema);

module.exports = Exam;
