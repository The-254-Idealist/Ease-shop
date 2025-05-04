const { initializeApp } = require('firebase/app');
const { getStorage, ref, uploadBytes, getDownloadURL } = require('firebase/storage');
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_BUCKET,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const upload = multer({ storage: multer.memoryStorage() });

const uploadToFirebase = async (file, path) => {
  const fileRef = ref(storage, `${path}/${uuidv4()}-${file.originalname}`);
  await uploadBytes(fileRef, file.buffer);
  return getDownloadURL(fileRef);
};

module.exports = { upload, uploadToFirebase };