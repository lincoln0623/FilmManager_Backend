const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

class Utilities {
    static generateUniqueID() {
        return uuidv4();
    }

    static async hashPassword(password) {
        const saltRounds = 10;
        return await bcrypt.hash(password, saltRounds);
    }

    static async comparePassword(password, hash) {
        return await bcrypt.compare(password, hash);
    }
}

module.exports = Utilities;