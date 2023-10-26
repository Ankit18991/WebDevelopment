// console.log("Hello world");
const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');  --> for string
  res.setHeader('Content-Type', 'text/html');  // for serving Html file
//   res.end('Hello World this is Utkarsh');      ---> // Serving the given string to the backend
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>StopWatch | HTML | CSS | Javascript</title>
        <link href='https://unpkg.com/css.gg@2.0.0/icons/css/play-button-o.css' rel='stylesheet'>
        <style>
        *{
          /* background-color:  rgb(3, 21, 37); */
          color: whitesmoke;
          box-sizing: border-box;
      }
      
      html{
          font-size: 10px;
      }
      
      /* Styling of Header */
      header{
          text-align: center;
          border: 4px solid lightgreen;
          font-weight: 600;
          background-color:  rgb(3, 21, 37); 
      }
      /* Styling the container */
      .container{
          border: 4px solid lightblue;
          display:flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          background-color: black;
          height: 70vh;
          width: auto;
      }
      
      .container::before{
          content: "";
          /* background: url('stopwatch_background.jpg') center center/cover; */
          background: url('timerbackgound3.jpg') center center/cover;
          position: absolute;
          top: 2%;
          left: 0%;
          width: 100%;
          height: 100%;
          z-index: 1;
          filter: saturate(100%);
      }
      
      /* Styling the icons */
      .container #icons{
          border: 4px solid white;
          display: flex;
          /* justify-content: center; --> To keep the menu of the stopwatch manipulation in the middle*/
          justify-content: center;
          align-items: center;
          background-color: rgb(14, 41, 55);
          overflow: hidden;
          z-index: 3;
          flex-wrap: wrap;
          border-radius:10%;
          cursor: all-scroll;
      }
      
      .container #icons img:hover{
          scale: 1.1;
          transition: all ease 1s;
          cursor: pointer;
          /* filter: contrast(10); */
      }
      
      .container #icons img:active{
          scale: 1.1;
          transition: all ease 1s;
          filter: brightness(12);
      }
      
      #icons img:first-child{
          width: 3.5%;
          height: auto;
          margin-right: 4%;
          border-radius: 50%;
      }
      
      #icons img:nth-child(2){
          width: 4%;
          height: auto;
          margin-right: 4%;
          border-radius: 50%;
      }
      
      #icons img:nth-child(3){
          width: 3.5%;
          height: auto;
          border-radius: 50%;
      }
      
      /* Styling the stopwatch */
      #time{
          /* margin: auto; --> to place the element in the middle*/
          /* align-self: center; --> To align it in center(try it out) if you want to */
          /* border: 4px solid green; */
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: flex-start;
          height: 40vh;
          width: 65%;
          box-sizing: border-box;
          border-radius: 10%;
          font-size: 6rem;
          font-weight: bolder;
          z-index: 2;
          position: relative;
          animation-name: timer;
          animation-duration: 2s;
          animation-delay: 2s;
          animation-fill-mode: forwards;
          animation-iteration-count: infinite;
          animation-direction: reverse;
          transition-delay: 2s;
          transition: all ease 1s;
      }
      
      #time:hover{
          scale: 1.2;
      }
      
      @keyframes timer{
          0%{
              top: 0px;
              left: 0px;
          }
      
          50%{
              top: 5%;
          }
      
          100%{
              top: 0;
              left: 0;
          }
      }
      
      #hour{
          align-self: center;
          background: rgb(25, 46, 67) center center/cover;
      }
      
      #minute{
          align-self: center;
          background: rgb(31, 110, 5) center center/cover;
      }
      
      #second{
          align-self: center;
          background: rgb(207, 15, 73) center center/cover;
      }
      
      /* Styling Of Footer */
      footer{
          border: 6px solid wheat;
          display: flex;
          flex-direction: column-reverse;
          align-items: left;
          background-color:  rgb(3, 21, 37); 
          filter: opacity(1);
          position: relative;
          margin-top: 3%;
          z-index: 7;
          font-size: 3rem;
      }
      
      footer::before{
          content: "";
          background: url('contact_Background.jpg') center center/cover;
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          z-index: -1;
      }
      
      footer div h2{
          text-align: center;
          border: 4px solid blue;
      }
      
      /* Media - Queries */
      @media (max-width: 1000px) 
      { 
          #time{ 
              font-size: 3.5rem; 
          } 
      
          .container::before{ 
              top: 40%; 
          } 
      
          #icons{
            width: 80vw;
            background-color: darkgrey;
            height: 20vh;
          }
      
          footer pre{
            font-size: 10px;
          }
      
          footer h2{
              font-size: 1.5rem;
          }
      
          footer p{
              font-size: 1.5rem;
              background-color: rgb(39, 255, 183);
              color: black;
          }
      
           .container::before{
             background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJw4TntPbtPHTEbn2hDVB27wx5KAuNCla3sw&usqp=CAU') center center/cover;
             top:0px;
           }
      
           #icons{
              width: 80vw;
              height: 10vh;
              background-color: rgb(54, 21, 44);
           }
      
      }

      </style>
    
    </head>
    <body>
        <header>
            <h2>
                StopWatch: A Mini project
            </h2>
        </header>
    
        <main>
            <section>
                <article class="container">
                    <div id="time">
                        <div id="hour"> 00 : </div>
                        <div id="minute"> 00 :  </div>
                        <div id="second"> 00  </div>
                    </div>
    
                    <div id="icons">
                        <img src="refresh.jpg" alt="">
                        <img src="play.jpg" alt="">
                        <img src="pause.jpg" alt="">
                    </div>
                </article>
            </section>
    
            <footer>
                <p>
                    Code With Me &copy;
                </p>
    
                <div>
                    <h2>Contact Details</h2>
                    <div id="info">
                        <pre>
                            Phone : 6345087658
                            Address : East Champaran, Bihar
                            Pin Code: 845413
                            Mail Address: Chakia
                            Email : utkarshkumararms@gmail.com
                        </pre>
                    </div>
                </div>
            </footer>
        </main>
    
        <script>
        let sec = new Date(2023, 10,30, 0, 0 , 0, 0);
        let s = sec.getSeconds();
        let m  = sec.getMinutes();
        let h = sec.getHours();
        
        function stopwatch(){
            s++;
            if(s == 60)
            {
                s  =0;
                m++;
            }
        
            if(m == 60)
            {
                m = 0;
                h++;
            }
        
            so = (s < 10) ? ("0" + s) : s;
            mo = (m < 10) ? ("0" + m) : m;
            ho = (h < 10) ? ("0" + h) : h;
        
            document.getElementById('second').innerHTML = so;
        
            document.getElementById('minute').innerHTML = mo + " : ";
        
            document.getElementById('hour').innerHTML = ho + " : ";
        }
        var id=0;
        function stopwatchCaller() {
            id= setInterval(stopwatch,1000);
        }
        
        function stopwatch_stopper(){
            clearInterval(id);
        }
        
        const start = document.querySelector('#icons img:nth-child(2)');
        start.addEventListener('click', stopwatchCaller);
        
        const stop = document.querySelector('#icons img:nth-child(3)');
        stop.addEventListener('click',stopwatch_stopper);
        
        function refresher(){
            s = -1;
            m = 0;
            h = 0;
            stopwatch();
            stopwatch_stopper();
        }
        
        const refresh = document.querySelector('#icons img:first-child');
        refresh.addEventListener('click', refresher);
        
        let control_Panel = document.querySelector('#icons');
        control_Panel.addEventListener(
            'click', function run(){
                control_Panel.style.transform = 'translateY(60%)';
                control_Panel.style.backgroundColor = 'rgb(2, 47, 86)';
                control_Panel.style.transition = 'all ease 1.5s';
            }
        );

      </script>
    </body>
    </html>`);
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// It starts a server of Node js
// To restart the server press ctrl + c in the terminal :)