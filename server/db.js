const Sequelize = require('sequelize');

const sequelize = new Sequelize('Module12', 'postgres', 'Programming360', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('Connected to Module12 postgres database');
    },
    function(err){
        console.log(err);
    }
);

module.exports = sequelize;