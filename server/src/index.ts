import express from 'express'
import cookieParser from 'cookie-parser'; 
import 'dotenv/config';
import cors from 'cors';
import { testConnection } from './db';

const app = express()
const port = 3000
app.use(cors({
  origin: 'http://localhost:5174', // allow to server to accept request from different origin
  credentials: true
}))

app.use(express.json());
app.use(express.static('client/build'));
app.use(cookieParser());

testConnection();

app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})