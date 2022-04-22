import app from './app';


/*
async function main() {
    app.listen((app.get('port')), () => {
    console.log('\n\tServer running on port ' + app.get('port'));
});

}

main(); */

let port = app.get('port');


const server = async () => {
  await  app.listen(port, () => {
        console.log(`Server listening on port--->${port}`);
    });
};

server();

