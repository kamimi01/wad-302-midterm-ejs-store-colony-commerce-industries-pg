import session from "cookie-session";
import express, { Request, Response } from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import { SESSIONKEY } from "./env";
import { authMiddleware } from "./middleware/auth";
import { router as authRouter } from "./routes/auth.router";
import { router as cartRouter } from "./routes/cart.router";
import { router as checkoutRouter } from "./routes/checkout.router";
import { router as indexRouter } from "./routes/indexRouter";
import { router as orderRouter } from "./routes/order.router";
import { router as productRouter } from "./routes/products.router";

export const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(
  session({
    name: "session",
    keys: [SESSIONKEY],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  })
);

// setup ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// setup layout
app.set("layout", path.join(__dirname, "views/layouts/layout"));
app.use(expressEjsLayouts);

// setup to let express know where to find static files are
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/products", productRouter);
app.use("/cart", authMiddleware, cartRouter);
app.use("/checkout", authMiddleware, checkoutRouter);
app.use("/order", authMiddleware, orderRouter);

app.all("*", (req: Request, res: Response) => {
  res.status(404).send({ error: `Not Found Route - ${req.method} ${req.path}` });
});
