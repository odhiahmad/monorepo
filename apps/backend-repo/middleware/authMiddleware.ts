import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).send({ message: 'Unauthorized: No token provided.' });
    return; // Ensure the function exits after sending a response.
  }

  if (token !== 'VALID_TOKEN') {
    res.status(403).send({ message: 'Unauthorized: Invalid token.' });
    return; // Ensure the function exits after sending a response.
  }

  next(); // Continue to the next middleware or route handler if authorized.
};