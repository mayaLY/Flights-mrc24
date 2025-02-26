import express from 'express'
<<<<<<< HEAD
import cookieParser from 'cookie-parser'; 
import 'dotenv/config';
import cors from 'cors';
import { testConnection } from './db';

=======
import pool from './db'
import usersRouter from './routes/users/usersRouter';
import adminRouter from './routes/sysAdmin/adminRouter';
>>>>>>> upstream/main
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

pool.getConnection()
const apiRouter = express.Router();
apiRouter.use("/users", usersRouter);
apiRouter.use("/admin", adminRouter);

app.use("/api", apiRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})