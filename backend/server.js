// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Connect to MongoDB (replace with your MongoDB URI)
// mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });



// const formSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   phoneNumber: String,
//   email: String
// });

// const Form = mongoose.model('Form', formSchema);

// app.post('/submit', async (req, res) => {
//   const formData = new Form(req.body);
//   try {
//     await formData.save();
//     res.status(201).send('Form data saved successfully');
//   } catch (error) {
//     res.status(400).send('Error saving form data');
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'https://bharath-krypt.github.io/Ustaad/', // Replace with your frontend domain
  methods: ['GET', 'POST'],
  credentials: true
}));

// Connect to MongoDB (replace with your MongoDB URI)
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Schema and Model
const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true }
});

const Form = mongoose.model('Form', formSchema);

// Routes
app.post('/submit', async (req, res) => {
  const formData = new Form(req.body);
  try {
    await formData.save();
    res.status(201).send('Form data saved successfully');
  } catch (error) {
    res.status(400).send('Error saving form data');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
