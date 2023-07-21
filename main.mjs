import express from 'express'
import path from 'path';
const __dirname = path.resolve();

const app = express()
app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));


app.use("/apiv1", express.static(path.join(__dirname, './apiv1/login')))
app.use("/apiv1/signup", express.static(path.join(__dirname, './apiv1/signup')))
app.use("/apiv1/login", express.static(path.join(__dirname, './apiv1/login')))
app.use("/apiv1/thread", express.static(path.join(__dirname, './apiv1/threads')))


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`server listining on  ${PORT}`);
});
