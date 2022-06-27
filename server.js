const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const { Router } = require('express');

const app = express();

app.use(fileUpload());
app.use(cors());

app.post('/upload', cors(), (req , res) => {
  if(req.files === null){
      return res.status(400).json({msg:'No file upload'});
  }

  const file = req.files.file;
  

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
     if(err) {
         console.error(err);
         return res.status(500).send(err);

     }

     res.json({fileName:file.name, filePath: `/uploads/${file.name}`});
  });

});

//Router.post('path',cors(),(req,res))
//JSON.parse(req.body)

app.listen(5000, () => console.log('Server Started...'));

