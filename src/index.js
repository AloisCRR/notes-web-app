const app = require('./server');

app.listen(app.get('port'), ()=>{
    console.log('Hello world: server on port ', app.get('port'));
})