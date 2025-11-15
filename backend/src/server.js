require('dotenv').config()
const app = require('./config/app')
const cors = require("cors"); 


const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Batch API server listening on ${port}`))

app.use(cors({
  origin: "*"
}));
