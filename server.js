var bodyParser = require('body-parser');
var express = require('express');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var listCharacters = [
    {
        name: "jimmii",
        age: '18',
        force: "330"
    },
    {
        name: "johnny",
        age: '38',
        force: "30"
    },
    {
        name: "tonny",
        age: '28',
        force: "130"
    },
    {
        name: "demo user what what",
        age: '28',
        force: "130"
    }

];

app.get('/', (req,res) => {
    res.json(listCharacters);
});

app.get('/:character', (req,res) => {
    var requestCharacter = req.params.character;
    var found = false;
    listCharacters.forEach((character) => {
        if (character.name.toLocaleLowerCase() == requestCharacter.toLocaleLowerCase()) {
            found = true;
            return res.json(character); 
            
        }
    });
    if (found == false) {
        return res.json(false);
    }
    
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("listening on port");
})