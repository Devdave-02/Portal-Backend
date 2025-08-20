const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

dotenv.config(); // ✅ loads .env variables

// Import route files
const assignmentRoutes = require('./routes/assignmentRoutes');
const resultRoutes = require('./routes/resultRoutes');
const courseRoutes = require('./routes/courseRoutes');
const clearanceRoutes = require('./routes/clearanceRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// 🔐 Middleware
app.use(cors());
app.use(express.json());

// Static route to serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 🚦 Mount routes
app.use('/api/assignments', assignmentRoutes);
app.use('/api/results', resultRoutes);
app.use('/api/registration', courseRoutes); 
app.use('/api/clearance', clearanceRoutes);



// 🌐 Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// 📢 Optional base route
app.get('/', (req, res) => {
  res.send('🚀 API Server is Running...');
});

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});