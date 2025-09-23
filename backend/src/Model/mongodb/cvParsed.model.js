const mongoose = require("mongoose");

const cvParsedSchema = new mongoose.Schema({
  cv_id: { type: mongoose.Schema.Types.ObjectId, ref: "CV", required: true },
  parsed_json: { type: Object }, // có thể lưu JSON NLP
  extracted_summary: { type: String },
  parsed_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("CV_Parsed", cvParsedSchema);
