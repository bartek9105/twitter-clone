class User extends Model {}

User.init({
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    timestamps: true,
    createdAt: true
}, {
    sequelize,
    modelName: 'User'
})