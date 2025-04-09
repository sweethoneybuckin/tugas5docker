import { Sequelize } from "sequelize";

const db = new Sequelize('RECOVER_YOUR_DATA', 'root','password',{
    host: '34.128.101.39',
    dialect : 'mysql'
});

export default db;