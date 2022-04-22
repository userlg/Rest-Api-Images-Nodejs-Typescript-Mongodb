import app from './app';




function main(){
    app.listen( () =>{
    console.log("\n\t Server running on port-->:" + app.get('port'));
});
}

main();