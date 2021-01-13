import express from 'express';
import http from 'http';
import * as path from 'path';

const app = express();

app.use('/index_bundle.js', (_req, res) => {
  res.sendFile(require.resolve('./src/index_bundle.js'));
});

app.use('/wasm/:file', (req,res) => {
  res.sendFile(
    path.join(
      __dirname,
      './external/npm/node_modules/@tensorflow/tfjs-backend-wasm/dist/',
      req.params.file
    )
  )
});

app.use('/', (_req,res) => {
  res.sendFile(require.resolve('./index.html'));
});


const httpServer = http.createServer(app);
httpServer.listen(8000, () => {
  console.log('Seving on port 8000');
});
