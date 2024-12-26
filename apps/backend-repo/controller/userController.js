"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUser = exports.updateUser = void 0;
const firebaseInit_1 = require("../utils/firebaseInit");
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name, email, age } = req.body;
    if (!id || !name || !email || !age) {
        res.status(400).send({ message: "Missing required fields." });
        return; // Ensure no further execution after sending a response.
    }
    try {
        yield firebaseInit_1.db
            .collection("USERS")
            .doc(id)
            .set({ name, email, age }, { merge: true });
        res.status(200).send({ message: "User data updated successfully." });
    }
    catch (error) {
        res.status(500).send({ message: "Error updating user data.", error });
    }
});
exports.updateUser = updateUser;
const fetchUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    if (!id) {
        res.status(400).send({ message: "Missing user ID." });
        return; // Ensure no further execution after sending a response.
    }
    try {
        const userDoc = yield firebaseInit_1.db
            .collection("USERS")
            .doc(id)
            .get();
        if (!userDoc.exists) {
            res.status(404).send({ message: "User not found." });
            return; // Stop further execution after sending a response.
        }
        res.status(200).send(userDoc.data());
    }
    catch (error) {
        res.status(500).send({ message: "Error fetching user data.", error });
    }
});
exports.fetchUser = fetchUser;
