const { releases, values } = require('../database/models');

async function getAll() {
  const result = await releases.findAll({ order: ['releaseDate'] });
  return result;
}

async function getById(id) {
  const result = await releases.findByPk(id, { include: { model: values, as: 'release' } });
  return result;
}

async function createValues(releaseId, name, installments, installmentValue, releaseDate) {
  let month = releaseDate.substr(5, 2);
  let day = releaseDate.substr(8, 2);
  let year = releaseDate.substr(0, 4);
  let dayInt = parseInt(day);
  if (dayInt > 28) {
  } else {
    for(let i = 0; i < installments; i += 1) {
      let monthInt = parseInt(month);
      let installmentMonth = monthInt + i;
      if (installmentMonth > 12) {
        let installmentZ = installmentMonth - 12;
        let yearInt = parseInt(year);
        let installmentYear = yearInt + 1;
        let yearStr = installmentYear.toString();
        let installStr = installmentZ.toString();
        if (installStr.length === 1) {
          installStr = '0' + installStr;
        }
        let installmentDate = yearStr + '-' + installStr + '-' + day;
        await values.create({ releaseId, name, installmentValue, installmentDate });
      } else {
      let installStr = installmentMonth.toString();
      if (installStr.length === 1) {
        installStr = '0' + installStr;
      }
      let installmentDate = year + '-' + installStr + '-' + day;
      await values.create({ releaseId, name, installmentValue, installmentDate });
      }
    }
  }
}

async function createOne({ name, totalValue, installments, releaseDate, paid }) {
  let day = releaseDate.substr(8, 2);
  let monthYear = releaseDate.substr(0, 8);
  let dayInt = parseInt(day);
  if (dayInt > 28) {
    dayInt = 28;
    let strDay = dayInt.toString();
    let date = monthYear + strDay;
    releaseDate = date;
  }
  const result = await releases.create({ name, totalValue, installments, releaseDate, paid });
  const installmentValue = totalValue / installments;
  await createValues(result.id, name, installments, installmentValue, result.releaseDate);
  return result;
}

async function changeStatus(id) {
  await releases.update({ paid: true }, { where: { id } });
}

async function deleteOne(id) {
  const result = await releases.destroy({ where: { id } });
  return result;
}

module.exports = {
  getAll,
  getById,
  changeStatus,
  createOne,
  deleteOne,
};