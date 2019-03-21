import express from 'express'
import path from 'path'

const app = express();

app.use(express.static(__dirname + '/public'));
app.get('*', (req,res) => res.sendFile(path.join(__dirname+'/public/index.html'))).listen(3000,() => console.log('Server on port 3000'))