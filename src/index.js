import express from 'express'; 
import { route } from './routes/pages.route.js';
import { setExpressConfig } from './configs/app.config.js';

const app = express(); 
const port = 3000; 
 

setExpressConfig(app)
 
app.use('/', route)
 
// Запуск сервера 
app.listen(port, (err) => { 
    if(err){
        console.error(err);
        return;
    }
  console.log(`Сервер запущен на http://localhost:${port}`); 
}); 