import mongoose from 'mongoose';


function buildDatabase(uri: string) {

    mongoose.connect(uri, {}, () => { console.log("connected to database") });

    //logState();
}

function logState() {
    const dbConnection = mongoose.connection;
    dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
    dbConnection.once("open", () => console.log("Connected to DB!"));
}

export default { buildDatabase };