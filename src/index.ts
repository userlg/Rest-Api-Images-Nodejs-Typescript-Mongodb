import app from './app';
import startConnection from './database';
import generateDate from './libs/functions';




let port = app.get('port');


const server = async () => {
    app.listen(port,  async () => {
        console.log(`\t\tServer listening on port--->${port}\n`);
        await startConnection();
        console.log(generateDate());
    });
};

server();

