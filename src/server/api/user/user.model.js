import passportLocalSequelize from 'passport-local-sequelize';

export default function(sequelize, DataTypes) {
  return passportLocalSequelize.defineUser(sequelize, {
    active: DataTypes.BOOLEAN
  });
}
