const sql = require("mssql/msnodesqlv8");

const config = {
  server: process.env.SQL_SERVER,
  database: process.env.SQL_DATABASE,
  options: {
    trustedConnection: true, // Windows Authentication
    trustServerCertificate: true
  },
  driver: "msnodesqlv8"
};

const connectSQL = async () => {
  try {
    const pool = await sql.connect(config);
    console.log("Connected to SQL Server");
    return pool;
  } catch (err) {
    console.error("SQL Server Connection Error:", err);
    throw err;
  }
};

module.exports = connectSQL;
