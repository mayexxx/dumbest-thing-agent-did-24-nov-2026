import { mkdirSync, writeFileSync } from 'node:fs';

const line = 'My agent spent forty minutes optimizing a script, then deleted the script, the backup, and its own apology note.';

if (line.length < 1 || line.length > 200 || /[\r\n]/.test(line)) {
  throw new Error('Entry must be a single line of 1–200 characters');
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', `${line}\n`, 'utf8');
