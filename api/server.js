import { createServer } from "@vercel/node";
import app from "../app"; // Import Express dari app.js

export default createServer(app);
