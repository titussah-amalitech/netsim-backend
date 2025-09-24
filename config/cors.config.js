const allowedOrigins = [
  "http://localhost:3000",       // web frontend dev
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow non-browser tools like Postman
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("CORS policy: This origin is not allowed"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // Allow cookies and auth headers
};

export default corsOptions;
