import React, { useState } from "react";
import { motion } from "framer-motion";

export default function LuxuryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <motion.form
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="glass-card p-6 rounded-xl max-w-md mx-auto flex flex-col gap-4"
    >
      <label className="font-serif text-sm glow-hover">
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 p-2 rounded border border-gold-light focus:outline-none focus:ring-2 focus:ring-gold w-full bg-transparent text-ink dark:text-cream"
          placeholder="Your Name"
        />
      </label>

      <label className="font-serif text-sm glow-hover">
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 p-2 rounded border border-gold-light focus:outline-none focus:ring-2 focus:ring-gold w-full bg-transparent text-ink dark:text-cream"
          placeholder="you@example.com"
        />
      </label>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 p-2 font-serif text-sm bg-gold text-cream rounded shadow-lg glow-hover"
      >
        Submit
      </motion.button>
    </motion.form>
  );
}
