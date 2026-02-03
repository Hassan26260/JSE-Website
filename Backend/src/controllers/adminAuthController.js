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

  // Optimize: Compare directly if using simple env auth, or use bcrypt.compare if we want to simulate real auth.
  // The previous code was: const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
  // This means it was generating a NEW hash every time and comparing, which is valid bcrypt usage but creates a hash cost.
  // Since we only have one user, we can just compare the password directly to the ENV variable (if it's plain text).
  // Assuming ADMIN_PASSWORD in .env is the PLAIN TEXT password.

  if (password !== process.env.ADMIN_PASSWORD) {
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
