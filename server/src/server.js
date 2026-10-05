require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigins = (process.env.CLIENT_URL || 'http://localhost:5173')
  .split(',')
  .map(origin => origin.trim())
  .filter(Boolean);

app.use(cors({
  origin: allowedOrigins
}));
app.use(express.json({ limit: '1mb' }));

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 80 },
  email: { type: String, required: true, trim: true, lowercase: true, maxlength: 160 },
  message: { type: String, required: true, trim: true, maxlength: 2000 },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Portfolio API is running' });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email and message are required.'
      });
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim(),
      message: message.trim()
    });

    res.status(201).json({
      success: true,
      message: 'Your message has been saved.',
      id: contact._id
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

async function start() {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error('MONGODB_URI is missing. Create server/.env first.');
    }

    await mongoose.connect(mongoUri);
    console.log('MongoDB connected');

    app.listen(PORT, () => {
      console.log(`Portfolio API running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Startup failed:', error.message);
    process.exit(1);
  }
}

start();
