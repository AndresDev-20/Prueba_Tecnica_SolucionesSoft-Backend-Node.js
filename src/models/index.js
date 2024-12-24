const Achievements = require("./Achievements");
const Education = require("./Education");
const Experience = require("./Experience");
const Image = require("./Image");
const User = require("./User");
const Work = require("./Work");

User.hasOne(Work);
Work.belongsTo(User);

User.hasMany(Education);
Education.belongsTo(User);

User.hasMany(Experience);
Experience.belongsTo(User);


User.hasMany(Achievements);
Achievements.belongsTo(User);

User.hasMany(Image, { foreignKey: 'userId' });
Image.belongsTo(User, { foreignKey: 'userId' });

Achievements.hasMany(Image);
Image.belongsTo(User);