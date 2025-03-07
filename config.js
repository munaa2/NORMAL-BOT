const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VWaY+qSBT9L/VV+zWbgCadDKjgBriwqJPJSwEFlqxShUq/+N8naHe6k7dMD58qRdW555577oUfIC8wQXPUgMEPUFb4DClql7QpERgAtY4iVIEuCCGFYADI0tIkReslgb2cHhjz6HhxnaQmKzSmYM8PRmTVcrPfpLnzAm5dUNZ+ioM/AJr9c0pfjWu+8iRsN3xM9ys0w4FsM9Fy6fRGuiZHx0pMVPkF3FpEiCucx+PygDJUwXSOmiXE1dfo17OGcnzqwKRUR7bjnfVFhhez6y5rlNR3dFf3dJ9JIsM1vkZ/vIaFcfQ5wgRuX3JXTcrt+JLtDa8LxqEnQcr6z0zHlBibPOgTHOconIYop5g2X9ZdN8nat/aGqWulf7mUY4UZ65PG5bZTc3asKGetXS2cRCFffFH3OlKyg6aldBqV22TxbJmjbexJlp/oWejwq4ZZaP2UBNvgM/Fl9e6V5P/obuhFPdxo8X5uc86oX+tnEsM1P7Is7TL34HnndmrsW/ueN/0afUPlznzRYSy3yFZZx0tUI0+DlWxInC+40wkS1HPQ9IoLv/ugD2ld/Ynl4lKb3EYIrdWkjA4Ny/Cw4xTTad2rn7m+v0DXY6zbGyd19ckCFXjBT6YXLcO9JmTkpX1QZ8OtFZVzIy2uOl6zPtIsdfVyzyhBzTQEA/bWBRWKMaEVpLjI2z1OYLsAhucNCipE7/KCVA7dvbXrr2X1VTQKlqs6bBYF5Qr1Si4x15ep66qkf0mj5AV0QVkVASIEhRNMaFE1BiIExoiAwd/3SrVJVygrKJrhEAwA1xMkVuQ4URB7f5FvlwOkBJbltxxR0AVRVWQGAgNa1agL7heE4VhTFIZTFIZnxTE3Zns9RhqNRkNeGXLjXpti9ghq4wwRCrMSDFhJYHmBlWTx9k8X5OhKH/5ps+bZLohwRaiT12VawPDdXO8vYRAUdU43TR4M2wWqwID52EaU4jwmbWZ1DqvggM9o2OYBBhFMCbp1QYjOOEAtHvjOvsqHhjmvFtx6//17Zs9VuLi0yh2K/HFE9HmWC6H/xAk9/0mAIXySw0B44iMk86IosxwSQCvHo3XbO791UoU3+VXbEuHENkV2Pm1CXbXmI7QwLnc3PCyAKhS+q+zDIKlLu0hQ/gdcQThQbrZeb1lzhZ4PI/0q8d48Tl4d5RPuw1pg8ONjXA6LsMVbb6QNJxocaKvVxvnJDQOe/9kQOWxPg2FR5SjFNWlDvdWhBQkRhTgl7YmFHwv7iz428PQkCbquKrEyjBXwUbf3Pnz43Cul3Wa3nzi19zxWkqI8yuXetRgztDvy8ugHpViMxGq9cXcvvwABA8AGI5/DvGriBJ/mKWFCVevMopFxdErb2CpBz116jX1geqoRHyqDk0ttN58R5UpGzeq5rizNeQ0bw9sW4ilBV6/zelTjlzbawz+fg8k7Md4xDl6mF3ypDelkFcFe05IzYg7H7auhFTJFm4lHYJ36K8U1VTi15e16FZl9UQxDlpky2cS4dkIyERWy2a4JM4wfE+I+odK3LwN+692H2yKM7oP2rQ7/Wa8P4zO37ieMt9H9G3Op7glx40xfs4v0fFVm8/nuee65Nh1tnefzSOD4OTopnRPjpB64tR1dppBGRZW1PwaZD0EXpJBQ5aNxfzUL2C7IGqUsNxTS934Hyv2RELj9C+0zBCiSCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254710772666,254106727593",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE_MESSAGES || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '2',
    ANTICALL : process.env.ANTICALL || 'yes',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





