import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "By Friday, the sun will find your favorite leaf on the windowsill, and you will photosynthesize like you invented it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
