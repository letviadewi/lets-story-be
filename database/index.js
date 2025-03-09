const postgres = require("postgres");

const connectionString = 'postgresql://postgres.xvwzscddincribwsdvwz:SecurePassword12%23@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres'; // Pastikan ENV sudah diatur
const sql = postgres(connectionString, { ssl: "require" });

console.log(connectionString)


module.exports = sql;
