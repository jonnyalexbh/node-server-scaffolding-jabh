import express from 'express';

const port = 9000;
const app = express();

app.get('/', (req: Request, res: any) => {
  res.json('hello world');
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
