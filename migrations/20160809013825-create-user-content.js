'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('userContents', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            data: {
                type: Sequelize.STRING
            },
            dataType: {
                type: Sequelize.STRING
            },
            pageID: {
                type: Sequelize.INTEGER
            },
            pagePosition:{
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date()
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date()
            }
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('userContents');
    }
};
