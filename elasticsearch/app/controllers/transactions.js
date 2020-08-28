const transactionService = require('../services/transactions');

exports.getTransaction = async (req, res, next) => {
  try {
    const { hits } = await transactionService.getTransactionById();
    res.send(hits);
  } catch (err) {
    next(err);
  }
};
