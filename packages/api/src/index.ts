import express from 'express';

const app = express();

app.use(express.json());

app.get('/batata', (request, response) => {
  return response.json({
    ok: true,
  });
});

app.listen(3333, () => {
  console.log('Rodou essa parada!');
});
