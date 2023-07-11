import app from './src/app.js';
import connectDatabase from './src/configs/db.config.js';

const port = process.env.PORT || 8000;

app.listen(port, () => {
    connectDatabase();
    console.log("Server listening on port ", port);
})