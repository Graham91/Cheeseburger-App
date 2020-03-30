connection = require("./connection");

const ORM = {
AddBurger: function(burgerName){

connection.query("INSERT INTO burgers (burgername) VALUES (?);", [burgerName], function(err, result){
    if (err) {
        throw err;
      }
console.log(result);
})

},
devourBurger: function(burgerName){
    
    connection.query("UPDATE burgers SET devoured=1 WHERE burgername='?';",[burgerName], function(err, result){
        if (err) {
            throw err;
          }
    console.log(result);
    })

},
deleteBurger: function(burgerName){

    connection.query("DELETE FROM burgers WHERE burgername='?';",[burgerName], function(err, result){
        if (err) {
            throw err;
          }
    console.log(result);
    })

}

};

module.exports = ORM;
