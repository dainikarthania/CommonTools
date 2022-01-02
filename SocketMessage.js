let io = require('socket.io')



io = io(server,{
    handlePreflightRequest: function (req, res) {
      console.log(`req origin `,req.headers.origin)

      var headers = {
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Origin': req.headers.origin,
        'Access-Control-Allow-Credentials': true
      };
      res.writeHead(200, headers);
      res.end();
    }
  })

  io.on('connection',async (socket)=>{

    console.log("socket.id",socket.id)

  })

  server.listen(3000);
