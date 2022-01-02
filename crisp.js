var Crisp = require("node-crisp-api");
var CrispClient  = new Crisp();
CrispClient.authenticate("21f419eb-00eb-440b-9195-7f6e6187e150", "3ba373e0f2be64af02c7006c99c1cfb0ce3d158efb966a7dd3049c0902bd77c8");

CrispClient.userProfile.get().then(function(myProfile) {
    console.log("Hello " + myProfile.first_name);
  });

  CrispClient.on("message:send", function(message) {
    CrispClient.websiteConversations.sendMessage(
      message.website_id,
      message.session_id, {
        type : "text",
        content : "I'm a bot",
        from : "operator", //or user
        origin : "chat"
      }
    );
  });
  

  
//   CrispClient.websiteConversations.create("871df62b-4283-4888-a563-189486b860a9").then(value=>{
        
// })
  
