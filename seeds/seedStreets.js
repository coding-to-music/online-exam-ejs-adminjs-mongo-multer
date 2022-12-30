const mongoose = require("mongoose");
const Street = require("../models/street");

const streetDetail = require("./streetDetail");

require("dotenv").config();

const mongoDB = process.env.MONGO_URI;

mongoose
    .connect(mongoDB, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log("CONNECTED TO MONGODB"))
    .catch((err) => console.log(err));

const clearAll = async function () {
    console.log("clearAll BEGIN");
    await Street.deleteMany();
    console.log("clearAll END");
};

const seedStreet = async function () {
    // const studentList = await Student.find();
    // await Street.deleteMany();

    for (let i = 0; i <= streetDetail.length - 1; i++) {
        // let streets = [];
        const name = streetDetail[i].name;
        const from = streetDetail[i].froms;
        const to = streetDetail[i].to;
        const width = streetDetail[i].width;
        const length = streetDetail[i].length;
        const date = streetDetail[i].date;
        const noncity = streetDetail[i].noncity;
        const unnacceptedlength = streetDetail[i].unnacceptedlength;

        if (length == "825+/-") {
            length = "825";
        }

        // const area = streetDetail[i].area;

        // const _id = streetDetail[i]._id;
        // const subjectID = streetDetail[i].subjectID;
        // const name = streetDetail[i].name;
        // const credit = streetDetail[i].credit;
        // for (let j = 0; j <= studentList.length - 1; j++) {
        //     if (studentList[j].streets.includes(_id)) {
        //         console.log("hello");
        //         students.push(studentList[j]._id);
        //     } else {
        //         console.log("hi");
        //     }
        // }

        const street = new Street({
            name,
            from,
            to,
            width,
            length,
            date,
            noncity,
            unnacceptedlength,
            // area,

            // name,
            // subjectID,
            // _id,
            // credit,
            // students,
        });
        await street.save();
        console.log("created newStreet Save ", name);
    }
};
seedStreet();
