import express from "express";
import crypto from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());
app.use(express.static(path.join(root, "public")));
app.post("/api", (req, res) => {
  const n = Math.min(20, Math.max(1, Number(req.body.n) || 5));
  res.json({ ids: Array.from({length: n}, () => crypto.randomUUID()) });
});
app.listen(process.env.PORT || 8127);
