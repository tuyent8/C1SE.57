const mongoose = require("mongoose");

const cvSchema = new mongoose.Schema({
  candidate_id: { type: Number, required: true }, // liên kết với CandidateProfile bên SQL
  file_url: { type: String, required: true },
  file_type: { type: String, required: true },
  uploaded_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("CV", cvSchema);
