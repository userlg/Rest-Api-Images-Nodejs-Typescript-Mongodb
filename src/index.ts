import app from './app';
import startConnection from './database';
import generateDate from './libs/functions';
import { v4 as uuid4 } from 'uuid';




let port = app.get('port');


const server = async () => {
    app.listen(port,  async () => {
        console.log(`\t\tServer listening on port--->${port}\n`);
       // await startConnection();
        console.log('\t\tDate:' + generateDate());
        console.log('\tID_SESSION:' + uuid4().toString())
    });
};

server();

