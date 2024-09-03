const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const GridFsStorage = require('multer-gridfs-storage');
const cors = require('cors');

// Enable CORS
app.use(cors());


const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const conn = mongoose.connection;
let gfs;

conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

const storage = new GridFsStorage({
  url: 'mongodb://localhost:27017/Employees.Organ-Donation_Images',
  file: (req, file) => {
    return {
      filename: file.originalname,
    };
  },
});

const upload = multer({ storage });

app.post('/upload-image', upload.single('image'), (req, res) => {
  res.json({ message: 'Image uploaded successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
