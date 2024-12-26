import { db } from "../utils/firebaseInit";
import { Request, Response } from "express";

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id, name, email, age } = req.body;

  if (!id || !name || !email || !age) {
    res.status(400).send({ message: "Missing required fields." });
    return; // Ensure no further execution after sending a response.
  }

  try {
    await db
      .collection("USERS")
      .doc(id)
      .set({ name, email, age }, { merge: true });
    res.status(200).send({ message: "User data updated successfully." });
  } catch (error) {
    res.status(500).send({ message: "Error updating user data.", error });
  }
};

export const fetchUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.query;

  if (!id) {
    res.status(400).send({ message: "Missing user ID." });
    return; // Ensure no further execution after sending a response.
  }

  try {
    const userDoc = await db
      .collection("USERS")
      .doc(id as string)
      .get();

    if (!userDoc.exists) {
      res.status(404).send({ message: "User not found." });
      return; // Stop further execution after sending a response.
    }

    res.status(200).send(userDoc.data());
  } catch (error) {
    res.status(500).send({ message: "Error fetching user data.", error });
  }
};
