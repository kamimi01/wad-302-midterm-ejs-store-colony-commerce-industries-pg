import { NextFunction, Request, Response } from "express";

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const session = req.session as { id?: string };
  if (!session || !session.id) {
    res.redirect("/products");
  } else {
    next();
  }
};
