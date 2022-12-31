import e from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import "./passport/discord";

// Settings
const app = e();
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(e.json());
app.use(e.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(
  session({
    secret: "80b54ce5-66f5-44df-a56d-7d7ad9023441",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

// Listen
app.listen(app.get("port"), () => {
  console.log(`Server on port: ${app.get("port")}`);
});
