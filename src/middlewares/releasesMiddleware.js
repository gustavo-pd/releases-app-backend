const validName = async (req, res, next) => {
  const { name } = req.body;

  if (!name || name === '' || typeof name !== 'string') {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (name.length < 4) {
    return res.status(422).json({ message: '"name" length must be at least 4 characters long' });
  }
  next();
};

const validValue = async (req, res, next) => {
  const { totalValue } = req.body;

  if (!totalValue || totalValue === '') {
    return res.status(400).json({ message: '"totalValue" is required' });
  }
  if (totalValue.length < 1) {
    return res.status(422).json({ message: '"totalValue" length must be at least 1 character' });
  }
  next();
};

const validInstallment = async (req, res, next) => {
  const { installments } = req.body;

  if (!installments || installments === '') {
    return res.status(400).json({ message: '"installments" is required' });
  }
  if (installments.length < 1) {
    return res.status(422).json({ message: '"installments" length must be at least 1 character' });
  }
  next();
};

const validDate = async (req, res, next) => {
  const { releaseDate } = req.body;

  if (!releaseDate || releaseDate === '') {
    return res.status(400).json({ message: '"releaseDate" is required' });
  }
  if (releaseDate.length < 10) {
    return res.status(422).json({ message: '"releaseDate" length must be at least 1 character' });
  }
  next();
};

module.exports = {
  validName,
  validValue,
  validInstallment,
  validDate,
};