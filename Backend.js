//console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Flowers</title>
  </head>
  <link rel="stylesheet" href="CSS/Webstyle.css">
  <style>
      /*CSS Reset*/
      body {
          color: white;
          margin: 0px;
          padding: 0px;
          background: url('https://cdn.pixabay.com/photo/2018/04/16/13/37/flowers-3324689__340.jpg');
          background-repeat: no-repeat;
          /*background-position-x: center;
          background-position-y: center;*/
          background-size: cover;
  
      }
  
      .left {
          display: inline-block;
          position: absolute;
          left: 18px;
          top: 18px;
          border:2px solid rgb(184, 179, 179);
          padding:8px;
  
          /* border: 2px solid rgb(19, 83, 19);*/
      }
  
      .left img {
          width: 60px;
          margin: auto;
          padding: 4px 5px 5px 22px;
          /*filter:invert(100%);*/
      }
      
      
      .left div {
          text-align: center;
          color: rgb(12, 1, 1);
          font-weight: bold;
          font-size: 21px;
          line-height: 7px;
      }
  
      .mid {
          display: block;
          width: 36%;
          margin: 29px auto;
          /*border: 2px solid rgb(245, 106, 106);*/
      }
  
      .right {
          position: absolute;
          right: 34px;
          top: 30px;
          display: inline-block;
          /*border: 2px solid rgb(198, 250, 110);*/
      }
  
      .btn {
          background-color: rgb(0, 0, 0);
          color: white;
          border: 2px solid gray;
          border-radius: 5px;
          padding: 4px 14px;
          margin: 0px 9px;
          font-size: 17px;
          cursor: pointer;
      }
  
      .btn:hover {
          background-color: grey;
      }
  
      navbar {
          display: inline-block;
      }
  
      .navbar li {
          display: inline-block;
          font-size: 25px;
      }
  
      .navbar li a {
          color: white;
          text-decoration: none;
          padding: 0px 10px;
      }
  
      .navbar li a:hover,
      .navbar li a.active {
          color: rgb(46, 253, 98);
          text-decoration: underline;
      }
  
      .container {
          border: 2px solid white;
          font-family: cursive;
          margin: 106px 80px;
          padding: 75px;
          /*width: 33%;*/
          border-radius: 28px;
      }
  
      .form-group input {
          font-family: 'Times New Roman', Times, serif;
          font-size: 20px;
          text-align: center;
          display: block;
          /*width: 508px;*/
          padding: 1px;
          border: 2px solid black;
          border-radius: 8px;
          margin: 11px auto;
          color: black;
          /*font-weight: bold;*/
      }
  
      .container h1 {
          text-align: center;
          color:rgb(255, 142, 194);
          font-weight: bold;
          font-family: fantasy;
      }
  
      .container button {
          display: block;
          /*width: 74px;*/
          margin: 20px auto;
      }
  
      .btn2{
          background-color: rgb(0, 0, 0);
          color: rgb(247, 243, 243);
          border: 2px solid rgb(245, 242, 242);
          border-radius: 8px;
          margin: auto;
          padding: 1px 120px;
          font-size: 20px;
          cursor: pointer;
          text-align: center;
      } 
  </style>
  
  <body>
      <header class="header">
          <!--left box for logo-->
          <div class="left">
              <img src="https://cdn.pixabay.com/photo/2015/03/19/07/12/flower-680483__340.jpg">
              <div class="logo">My Flowers</div>
          </div>
  
          <!--mid box for navbar-->
          <div class="mid">
              <ul class="navbar">
                  <li><a href="#" class="active">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Flowers </a></li>
                  <li><a href="#">Contact Us</a></li>
              </ul>
          </div>
  
          <!--right box for buttons-->
          <div class="right">
              <button class="btn"> Call Us Now </button>
              <button class="btn"> Email Us </button>
          </div>
      </header>
      <div class="container">
          <h1>You are welcome to have the best and fresh flowers</h1>
          <form action="noaction-php">
              <div class="form-group">
                  <label id="name-label" for="name"></label>
                  <input type="text" placeholder="Enter Your Name">
              </div>
  
              <div class="form-group">
                  <label for="address-label"</label>
                  <input type="text" placeholder="Enter Your Address">
              </div>
  
              <div class="form-group">
                  <label id="email-label" for="Email"></label>
                  <input type="text" placeholder="Enter Your Email">
              </div>
  
              <div class="form-group">
                  <label id="number-label" for="phone"></label>
                  <input type="text" placeholder="Enter Your Phone number">
              </div>
  
              <div class="form-group">
                  <label for="date-label"></label>
                  <input type="date" placeholder="Enter your Preffered date">
              </div>
  
              <div>
              <button class="btn2">Submit</button>
          </div>
          </form>
      </div>
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
