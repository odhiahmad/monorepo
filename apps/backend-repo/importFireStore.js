const admin = require("firebase-admin");
const fs = require("fs");

// Inisialisasi Firebase Admin SDK
const serviceAccount = require("./config/serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Fungsi untuk mengimpor data
async function importData() {
  try {
    const data = JSON.parse(fs.readFileSync("users.json", "utf8"));
    const collectionRef = db.collection("users");

    for (const item of data) {
      const docRef = collectionRef.doc(item.id); // Gunakan 'item.id' sebagai ID dokumen
      await docRef.set(item);
      console.log(`Document ${item.id} added successfully.`);
    }
    console.log("All data imported successfully!");
  } catch (error) {
    console.error("Error importing data:", error);
  }
}

// Jalankan fungsi impor
importData();
