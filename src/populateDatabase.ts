// function randomNumber(min: number, max: number) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// async function getGenres(genres: []) {

//     const genreIDs = [];

//     for (let i: number = 0; i < genres.length; i++) {
//         const genre = await Genre.findOne({ name: genres[i].name })
//         // console.log("eeeeeeeeeeeeeeeeeeeeeeeee");
//         // console.log(genre._id);
//         genreIDs.push(genre._id);
//     }

//     return genreIDs;
// }

// async function generateGames() {
//     try {
//         const axiosInstance = axios.create();
//         const res = await axiosInstance.get("https://api.rawg.io/api/games?key=eb7f00a43fc244ab92523e254cba80fd")

//         res.data.results.forEach(async (it: any) => {
//             const currentGame = {
//                 slug: it.slug,
//                 name: it.name,
//                 releaseDate: new Date(it.released),
//                 rating: it.rating,
//                 ratingCount: it.ratings_count,
//                 cover: it.background_image,
//                 screenshots: it.short_screenshots,
//                 price: randomNumber(10, 60),
//                 stock: randomNumber(0, 100),
//                 genres: it.genres.map(it => it.slug),
//                 // tags: it.tags,
//                 publisher: "eeee"

//             }

//             console.log(currentGame);

//             const saveGame = new Game(currentGame);
//             saveGame.save();
//         })


//     } catch (e) {
//         console.log(e);
//     }
// };

// // generateGames();

// async function generateGenres() {
//     try {
//         const axiosInstance = axios.create();
//         const res = await axiosInstance.get("https://api.rawg.io/api/genres?key=eb7f00a43fc244ab92523e254cba80fd")

//         res.data.results.forEach((it: any) => {
//             const current = {
//                 slug: it.slug,
//                 name: it.name,
//                 cover: it.image_background,
//             }

//             console.log(current);

//             const save = new Genre(current);
//             save.save();
//         })


//     } catch (e) {
//         console.log(e);
//     }
// }

// // generateGenres();


