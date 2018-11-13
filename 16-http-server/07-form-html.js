#!/usr/bin/node

const http = require('http'),

            qs   = require('querystring');



            var items = [];



            http.createServer((req, res) => {

              if(req.url != '/') {

                    err(res);

                        return;

                          
              }



                console.log(req.headers);

                  console.log('');



                  switch(req.method) {

                        case 'GET':

                                show(res);

                                      break;



                                          case 'POST':

                                            add(req, res);

                                                  break;



                                                      default:

                                                        err(res);

                                                              break;

                                                                
                  }


            }).listen(8080);



function show(res) {
  var html=fs.readFileSync('todo-list-template.html')
  
  res.end(html);
}



function add(req, res) {

    var body = '';
    req.on('data', function(chunk) { body += chunk;  });
    req.on('end', function() {
      console.log(body);
      if(body != '') {
        items.push(qs.parse(body).item);
      }



                show(res);

                  
      });


}



function err(res) {

    var msg = 'Not found!';



      res.statusCode = 404;

        res.setHeader('Content-Length', msg.length);

          res.setHeader('Content-Type', 'text/plain');



            res.end(msg);


}
