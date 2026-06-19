const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection (Optional)
const MONGODB_URI = process.env.MONGODB_URI;

if (MONGODB_URI) {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ MongoDB connected successfully');
  })
  .catch((err) => {
    console.log('❌ MongoDB connection error:', err);
  });
} else {
  console.log('⚠️ No MongoDB URI provided. Using in-memory storage.');
}

// MongoDB Schema (Optional)
let Enquiry;
if (MONGODB_URI) {
  const enquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });
  Enquiry = mongoose.model('Enquiry', enquirySchema);
}

// In-memory storage fallback
let enquiries = [];

// Root route - to fix "Cannot GET /"
app.get('/', (req, res) => {
  res.json({
    message: 'Kidrove Workshop API is running!',
    endpoints: {
      POST: '/api/enquiry - Submit registration',
      GET: '/api/enquiries - View all enquiries',
    },
    status: MONGODB_URI ? 'Connected to MongoDB' : 'Using in-memory storage',
  });
});

// API Endpoint: POST /api/enquiry
app.post('/api/enquiry', async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // Validation
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required: name, email, phone',
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format',
      });
    }

    // Phone validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
      return res.status(400).json({
        success: false,
        message: 'Phone number must be 10 digits',
      });
    }

    // Save to database (if connected) or in-memory
    let savedEnquiry;
    if (MONGODB_URI && mongoose.connection.readyState === 1) {
      savedEnquiry = new Enquiry({ name, email, phone });
      await savedEnquiry.save();
    } else {
      savedEnquiry = { 
        id: enquiries.length + 1, 
        name, 
        email, 
        phone, 
        createdAt: new Date() 
      };
      enquiries.push(savedEnquiry);
    }

    res.status(200).json({
      success: true,
      message: 'Enquiry submitted successfully',
      data: savedEnquiry,
    });
  } catch (error) {
    console.error('Error processing enquiry:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
});

// Optional: GET all enquiries (for testing)
app.get('/api/enquiries', async (req, res) => {
  try {
    if (MONGODB_URI && mongoose.connection.readyState === 1) {
      const allEnquiries = await Enquiry.find();
      res.json({
        success: true,
        count: allEnquiries.length,
        data: allEnquiries,
      });
    } else {
      res.json({
        success: true,
        count: enquiries.length,
        data: enquiries,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching enquiries',
      error: error.message,
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📝 Test the API: http://localhost:${PORT}/api/enquiry`);
  console.log(`📋 View enquiries: http://localhost:${PORT}/api/enquiries`);
});