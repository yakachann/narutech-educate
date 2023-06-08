const express = require('express');
const app = express();

app.set('view engine', 'ejs');
//app.use(logger);

// app.get("/", (req, res) => {
//   console.log("Here");
//   res.render("index", { text: "World" });
// })

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //ミドルウェアにより、フォームからの情報にアクセス可能(body部分)

const userRouter = require('./routes/users');

app.use('/users', userRouter);

// function logger(req, res, next){
//   console.log(req.originalUrl);
//   next();
// }

app.listen(3000);