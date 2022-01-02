import mongoose from "mongoose";

interface IGenre {
    slug: string;
    name: string;
    cover: {};
}

const Schema = mongoose.Schema;
const modelSchema = new Schema(
    {
        slug: {
            type: String,
            validate: /^\S+$/,
            required: true,
            minlength: 3,
            unique: true,
        },
        name: {
            type: String,
            required: true,
            minlength: 3,
            unique: true,
        },
        cover: {
            type: {},
        },

    },
    { timestamps: true }
);


modelSchema.index({ name: "text", slug: "text" });


const Genre: mongoose.Model<IGenre> = mongoose.model("Genre", modelSchema);

export default Genre;