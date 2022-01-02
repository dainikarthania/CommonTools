const io = require('socket.io')(3002,{
    allowEIO3: true 
});


io.on("connection", (socket) => {

    socket.send("hello message")
    socket.emit('custom-msg',{"hello":"msg"})

    socket.on('send-base64',(data)=>{
        socket.emit("receive-base64",data)
    })

    socket.join("room1")

    
    io.to('room1').emit('details',{
        "room":"room1",
        data:{"hello":"world"}
    })


    // console.log(socket)

    // console.log(socket.rooms); // Set { <socket.id> }
  
    // socket.join("room1");
  
    // console.log(socket.rooms); // Set { <socket.id>, "room1" }
  
  });

  io.on('custom-msg',(data)=>{
      console.log("data",data)
  })
  io.on('message',(data)=>{
    console.log("message",data)
})
io.on('details',(data)=>{
    console.log("message",data)
})

