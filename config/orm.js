connection = require("./connection");

const ORM = {
showBurgers: function(cb){
        connection.query('SELECT * FROM burgers;',function(err, data) {
        if (err) {
            throw err;
          };
       cb(data);
        })
},

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
