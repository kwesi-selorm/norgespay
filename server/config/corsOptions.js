const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

// const whitelist = [
//   "https://www.website.com",
//   "http://127.0.0.1:5500",
//   "http://localhost:3000",
// ];

// const corsOptions = {
//     origin: (origin, callback) => {
//         if (whitelist.indexOf(origin) !== -1 || !origin) {
//             callback(null, true);
//         } else {
//             callback(new Error("Not allowed by CORS"));
//         }
//     }, optionSuccessStatus: 200;
// }

export default corsOptions;
