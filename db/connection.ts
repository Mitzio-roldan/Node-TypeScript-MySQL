import { Sequelize, Model, DataTypes } from 'sequelize';

const db = new Sequelize('curso-node', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db