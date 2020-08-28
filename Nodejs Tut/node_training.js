// window : console.log('pooja');

// 2.time out is use for some seconds delay : 
// setTimeout(function(){console.log('3 seconds have passed')},3000);

/*3. when we have to set interval :
var time =0;
setInterval(function()
{
   time +=2;

   console.log(time+ 'seconds have passed');

},2000); */ 


//4.  Normal function statement : 
  /*function sayHi()
{
    console.log('Hi');
}
sayHi();*/

/*5.  there is function is in the function :
function callfunction(fun)
  {
      fun();
  }
 var sayHi=function()
  {
      console.log('hi');
  };
  callfunction(sayHi);*/

                                          /* 6 * .using count function and array it counts the elements present in the array*/
  /*var counter = function (arr)
  {
      return 'there are '  +arr.length+  ' elements in this array'
  };
  module.exports = counter; */
  //console.log (counter(['rainy' ,'winter','summer'])); 
  

                                           /*7. by using module export it can link with another page 
var counter = function (arr)
  {
      return 'there are '  +arr.length+  ' elements in this array';
  };
var adder=function (a,b)
{
    return 'the sum of two numbers is ${a+b}'
};
var pi=3.142;
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;

OR

module.exports ={
counter : counter,
adder : adder,
pi:pi
};
*/


                                     /*8 * :  THE NODE EVENT EMITTER
 var events = require ('events');
 var util = require ('util');

 var Person=function (name)
 {
     this.name=name;
 };

 util.inherits(Person,events.EventEmitter);

 var abc = new Person('abc');
 var efg = new Person('efg');
 var hij = new Person('hij');
 var people = (abc,efg,hij);
 people.forEach(function(person)
 {
     person.on ('speak',function(msg) 
     {
         console.log(Person.name + 'said:' + msg);

     });

 });
  abc.emit('speak','hey gm');
  */

                                            /* 9: READING FILES FROM ANOTHER TEXT FILES

  var fs = require('fs');
  var readMe= fs.readFileSync('readMe.txt','utf8');
  console.log(readMe);

  OR */
  /*
  var fs = require('fs');
  fs.readFile('readMe.txt','utf8',function(err,data)
{
  console.log(data);
});*/
  
//console.log('test'); // it declare after data then also it prints before data as test

                                               /* WRITING FILE  :
var fs = require('fs');
  fs.readFile('readMe.txt','utf8',function(err,data)
  {
  fs.writeFile('writeMe.txt',data);
});
*/



                                                 //10: CREATING AND REMOVING DIRECTORY : 
 
 // var fs = require('fs');
 // fs.mkdirSync('stuff'); // to make directory as stuff 

 // fs.unlink('./stuff/writeMe.txt',function(){
 //* fs.rmdir('stuff'); // for remove directory 
//});

                                                  // Creating server 

 /*var http = require ('http');                    

 var server = http.createServer(function(req,res) {
 res.writeHead(200,{'content-type': 'text/plain'});
 res.end('hello');

 });

 server.listen(3000,'127.0.0.1');
 console.log('hieee this is pooja '); */


                                      // 14. READABLE STREAM:
 /*var http = require ('http');  
 var fs = require ('fs');  

 var myReadStream = fs.createReadStream(_dirname + '/readMe.txt','utf8' );
 var myWriteStream = fs.createWriteStream(_dirname + '/WriteMe.txt' );  //15. WRITABLE STREAM :

 myReadStream.on('data',function(chunk)
 {
   console.log('new chunk received');
   myWriteStream.write(chunk);
   console.log(chunk);
      
 });*/

 //16. PIPES : pipes can be used multiple streams together.
        // one of the most common example is to pipe read and write stream together for transfer of data from one file to another.
        
        /* 
        var http = require ('http');  
        var fs = require ('fs');  
       
        var myReadStream = fs.createReadStream(_dirname + '/readMe.txt','utf8' );
         var myWriteStream = fs.createWriteStream(_dirname + '/WriteMe.txt' ); 

        myReadStream.pipe(myWritestream); */

  //17. SERVING HTML PAGES TO THE CLIENT : it requires new html file which we have to design for web page and this html file name has to be written
  // in this code
       
        
       /* var http = require ('http');  
        var fs = require ('fs');  
       
        var server = http.createServer(function(req,res) {
          console.log('request was made: +req.url');
          res.writeHead(200,{'content-type': 'text/html'});
        var myReadStream = fs.createReadStream(_dirname + '/index.html','utf8' );


        myReadStream.pipe(res);
        });

        server.listen(3000,'127.0.0.1');
        console.log('hey...');*/
        

    //18. serving json data to the client : 


      /* var http = require ('http');    
        var fs = require ('fs');  
       
        var server = http.createServer(function(req,res) {
          console.log('request was made: +req.url');
          res.writeHead(200,{'content-type': 'application/json'}); //only difference here that at the place of .html file we have to use json file
          var myObj={
            name : pooja,
            job : software,
            age: 21

          };
           res.end(JSON.stringify(myObj));
    
        });
        */

        //19. basic routing : Routing refers to how an application's endpoints  respond to client requests.
        // now on web page whatever we searched like host/home ,host/api, host/contact it shows same text for that we have to implement (if else)
       // to check the request and send something depenent on that.
      /* var http = require ('http');  
        var fs = require ('fs');  
       
        var server = http.createServer(function(req,res) {
          console.log('request was made: +req.url');

          if (req.url === '/home' || req.url === '/'){
          res.writeHead(200,{'content-type': 'text/html'});
          fs.createReadStream(_dirname + 'index.html').pipe(res);
          }
        });
        server.listen(3000,'127.0.0.1');
        console.log('heyy..'); */

      
        //20. THE NODE PACKAGE MANAGER (NPM):  Its basically a bunch a command line which can helps for installing third party packages or modules  

       /*
        var http = require ('http');  
        var fs = require ('fs');  
        const { endianness } = require('os');
       
          var server = http.createServer(function(req,res) {
          console.log('request was made: +req.url');

          if (req.url === '/home' || req.url === '/'){
          res.writeHead(200,{'content-type': 'text/html'});
          fs.createReadStream(_dirname + 'index.html').pipe(res);
          } else if(req.url === '/contact'){
            res.writeHead(200,{'content-type': 'text/html'});
            fs.createReadStream(_dirname + 'contact.html').pipe(res);

          } else if(req.url === '/api/ninjas')
            var ninjas = [{name: 'pooja',age: '21'}]
            res.writeHead(200,{'content-type': 'application/json'});
            res.end(JSON.stringify(ninjas));
           });*/

           //211. PACKAGE JSON:

          /* var http = require ('http');  
        var fs = require ('fs');  
        const { endianness } = require('os');
       
          var server = http.createServer(function(req,res) {
          console.log('request was made:' +req.url);

          if (req.url === '/home' || req.url === '/'){
          res.writeHead(200,{'content-type': 'text/html'});
          fs.createReadStream(_dirname + 'index.html').pipe(res);
          } else if(req.url === '/contact-us'){
            res.writeHead(200,{'content-type': 'text/html'});
            fs.createReadStream(_dirname + 'contact.html').pipe(res);

          } else if(req.url === '/api/ninjas'){
            var ninjas = [{name: 'pooja',age: '21'}]
            res.writeHead(200,{'content-type': 'application/json'});
            res.end(JSON.stringify(ninjas));
        }   else
              {
               res.writeHead(404,{'content=-type':'text/html'});
               fs.createReadstream(-dirnaame + '404.html').pipe(res);
               

        }
           });
*/
           
           


