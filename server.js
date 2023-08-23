const express = require('express');
const app = express();

app.set('view engine', 'ejs');
//loggerはミドルウェア（呼ばれたときに最初に行うもの）
//app.use(logger);

// app.get("/", (req, res) => {
//   console.log("Here");
//   res.render("index", { text: "World" });
// })

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //ミドルウェアにより、フォームからの情報にアクセス可能(body部分)
app.use(express.json()); //JSON情報の解析

const userRouter = require('./routes/users');

app.use('/users', userRouter);

//nextはコールバック関数（関数の中で呼ばれる関数）
//nextを引数として渡さないとこの関数が次の処理に進むことができない
// function logger(req, res, next){
//   console.log(req.originalUrl);
//   next();
// }

app.listen(3000);