buat folder
masuk ke folder yang baru dibuat
npm init
npm install --save express express-group-routes body-parser mysql nodemon sequelize sequelize-cli mysql2 pg
buat index.js dan folder controller
Buat db
nanti setting di folder config/config.json
npx sequelize init maka akan generate folder config,models,seeders,migrations
npx sequelize-cli model:generate --name namaModel --attributes namafields:type
npx sequelize-cli db:migrate