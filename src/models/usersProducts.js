const DiaryUserProduct = require('../models/schemas/diaryUserProduct');

const getUserProductsByDate = async (userId, date) => {
    const userProductsByDate = await DiaryUserProduct.find({
        owner: userId,
        date,
    }).catch(() => null);

    return userProductsByDate;
};

const createUserProduct = async (userId, date, { productName, productWeight, productCalories }) => {
    const userProductsByDate = await DiaryUserProduct.create({
        owner: userId,
        date,
        productName,
        productWeight,
        productCalories,
    }).catch(() => null);

    return userProductsByDate;
};

module.exports = {
    getUserProductsByDate,
    createUserProduct,
};
