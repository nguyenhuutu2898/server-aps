const express = require("express");
const { PORT } = require("./config.js");


let app = express();
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


app.use(express.static("wwwroot"));
app.use(require("./routes/auth.js"));
app.use(require("./routes/models.js"));
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}...`);
});
