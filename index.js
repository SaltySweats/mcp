import express from 'express';
import { echoTool } from './tools/echoTool.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const TOOLS = {
  'echo': echoTool
};

app.post('/call', async (req, res) => {
  const { tool_name, input } = req.body;
  if (!TOOLS[tool_name]) {
    return res.status(404).json({ error: `Tool '${tool_name}' not found. ` });
  }

  try {
    const output = await TOOLS[tool_name](input);
    res.json({ output });
  } catch (err) {
    res.status(500).json({ error: 'Tool execution failed.', detail: err.message });
  }
});

app.get('/home', (req, res) => res.send('MCP Server Running'));

app.listen(port, () => console.log(`Listening on port ${port}`));