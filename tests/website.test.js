const { createToken, verifyToken } = require("../jwtLogin");

profileSave(req, res, token) ;{
   let data = "";
   req.on("data", (chunk) => {
     data += chunk.toString();
     console.log("show data ", data);
   });

   req.on("end", async () => {


describe("The function saves verify and update the user profile", () =>{


     
    test('Verify user data', () => { 
     const profileObj = parse(data);
   })


     test('Saves yser data', () => { 
     const { perception, input, processing, understanding } = profileObj;
   })


     test('verify Email', () => {
         const email = verifyToken(token).id;
   })

        
     try {
       // update data in database 



test('pdates users data', () => {
            const result = await updateValuesInDatabaseQuery(perception, input, processing, understanding, email);

   })

});



       if (result[0]) {
         res.writeHead(200, {
           "Content-Type": "text/html",
           location: "/profile",
         });
         res.end();
       }
       res.writeHead(301, { location: "/profile" });
       res.end();
     })
     } catch (error) {
       // Error handling
       console.log(error);
       res.writeHead(301, { location: "/profile" });
       res.end();
     }
   });