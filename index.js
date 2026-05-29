const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');

const app = express();
app.use(cors());
app.use(express.json());

const path = require('path');
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.post('/api/echo', (req, res) => {
  const { session } = req.body;
  if (!session) return res.status(400).json({ error: 'No session provided' });

  const prompt = `Run the echo-hunt skill on this vibe coding session log. Return ONLY valid JSON, no extra text:\n\n${session}`;
  const escaped = prompt.replace(/"/g, '\\"').replace(/\n/g, '\\n');

  exec(`hermes -z "${escaped}"`, { timeout: 120000 }, (error, stdout, stderr) => {
    if (error) {
      console.error('Error:', error.message);
      return res.status(500).json({ error: 'Hunt failed', message: error.message });
    }
    try {
      const clean = stdout.replace(/```json|```/g, '').trim();
      const parsed = JSON.parse(clean);
      res.json(parsed);
    } catch (e) {
      console.error('Parse error:', e.message);
      console.error('Raw output:', stdout);
      res.status(500).json({ error: 'Parse failed', raw: stdout });
    }
  });
});

app.listen(3000, () => console.log('ECHO running on port 3000'));