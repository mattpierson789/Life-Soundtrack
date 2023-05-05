// const express = require('express');
// const app = express();
// const cors = require('cors');
// const fetch = require('node-fetch');


// app.use(express.json());
// app.use(cors());

// app.post('/openai-proxy', async (req, res) => {
//   try {
//     const apiKey = '<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>';
//     const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

//     const response = await fetch.default(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${apiKey}`,
//       },
//       body: JSON.stringify(req.body)
//     });

//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(3000, () => console.log('Server running on port 3000'));
