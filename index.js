let http = require('http')
let fs = require('fs')
let url = require('url')



//   let server = http.createServer(function(req,res){
//       let pathObj = url.parse(req.url,true);
//       console.log(pathObj.pathname)
//       console.log(typeof pathObj.pathname)
//       console.log(pathObj.pathname ==='/getWeather' )
//       switch (pathObj.pathname) {
//         case '/getweather':
//           var ret
//           if(pathObj.query.city == 'beijing'){
              
//             ret = {
//               city: 'beijing',
//               weather: '晴天'
//             }
//           }else{
//             ret = {
//               city: pathObj.query.city,
//               weather: '不知道'
//             }
//           }
//           res.end(JSON.stringify(ret))
//           break;
//         case '/user/123':
    
//           res.end( fs.readFileSync(__dirname + '/sample/user.tpl' ))
//           break;
//         default:
//           res.end( fs.readFileSync(__dirname + '/sample' + pathObj.pathname) )
//       }
//     });
//   server.listen(8080);
//   console.log("visit http://127.0.0.1:8080");


let server = http.createServer(function(req,res){
     let pathObj = url.parse(req.url,true);
     let ret;
     console.log(pathObj.pathname);
     switch(pathObj.pathname){
         case '/getweather':
         
         if(pathObj.query.city === "hefei"){
             ret = {
                 city:"合肥",
                 天气:"多云"
             }
            }
        else{
            ret = {
                city:pathObj.query.city,
                天气:"dont know"
                 }
             }
             res.end(JSON.stringify(ret));
             break;
        default:
              res.end(fs.readFileSync(__dirname+'/sample'+pathObj.pathname))
         }
     });

     server.listen(8080);
     console.log("visit http://127.0.0.1:8080");