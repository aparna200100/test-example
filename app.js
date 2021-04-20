const express = require('express')
const app = express()

var handlebars = require('express3-handlebars')
            .create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static("public"));
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/requ', (req, res) => {
    res.send("<h1>We are at /requ</h1>")
})
app.set('port',3000);
var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "Whenever possible, keep it simple.",
];
app.get('/mypage',function(req,res){
    res.render('about',{fortunes})
});

app.use((req, res) => {
    res.status(400)
        // .send("This ia custom 404 page")
        .render('404')
})

app.listen(3000, () => {
    console.log("Server is running...")
})