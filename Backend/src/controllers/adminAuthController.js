import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Pre-hash the admin password functionality logic
// Since the admin password is in .env and static, we can compare it directly if we trust the server environment.
// However, the previous implementation hashed the ENV password every time, which is slow.
// A better simple approach for a single admin account is to verify against the env value directly
// IF we assume the env value is the plain text password.
// OR we can hash it once at server start.

// Let's optimize by just comparing carefully if we store plain text in ENV (common for single admin config).
// If the previous code was `bcrypt.hash(process.env.ADMIN_PASSWORD)`, it implies `ADMIN_PASSWORD` is plain text.

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  // Check email
  if (email !== process.env.ADMIN_EMAIL) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Optimize: Compare against the pre-hashed password stored in the ENV variable
  const isMatch = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH);
  
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Generate token
  const token = jwt.sign(
    { role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({
    message: "Login successful",
    token,
    name: "Admin",
    email: process.env.ADMIN_EMAIL,
    isAdmin: true
  });
};
