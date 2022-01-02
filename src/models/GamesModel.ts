import mongoose, {ObjectId} from "mongoose";

interface IGame {
    slug: string;
    name: string;
    releaseDate: Date;
    cover: {};
    rating: number;
    ratingCount: number;
    description: string;
    screenshots: {}[];
    price: number;
    stock: number;
    publisher: string;
    genres: string[];
    reqiurementsMin: {};
    requirementsBest: {};
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
        releaseDate: {
            type: Date,
        },
        cover: {
            type: {},
        },
        rating: {
            type: Number,
            min: 0,
            max: 5,
        },
        ratingCount: {
            type: Number,
        },
        description: {
            type: String,
            minlength: 10,
        },
        screenshots: {
            type: [{}],
        },
        price: {
            type: Number,
            required: true,
            min: 5,
            max: 70,
        },
        stock: {
            type: Number,
            required: true,
        },
        publisher: {
            type: String,
            required: true,
        },
        genres: {
            type: [String],
            required: true,
        },
        reqiurementsMin: {
            type: {},
        },
        requirementsBest: {
            type: {},
        },


    },
    { timestamps: true }
);


modelSchema.index({ name: "text", slug: "text" });


const Game: mongoose.Model<IGame> = mongoose.model("Game", modelSchema);

export default Game;