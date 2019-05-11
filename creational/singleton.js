/**
 * The Singleton pattern is distinguished by not allowing over one instance of a particular object to exist in our system.
 *
 * Another feature is that it must be possible to access this instance from anywhere in the system.
 */

let DBCInstance = null;

global.DatabaseConnection = class DatabaseConnection
{

    get url() {
        return 'mongodb://localhost:27017/myproject';
    }

    get username(){
        return 'admin';
    }

    get connection() {
        let connection;
        // Logic to open the connection
        return connection;
    }

    get password() {
        return 'password';
    }

    static get instance() {
        if (DBCInstance === null || DBCInstance.getConnection().isClosed()) {
            DBCInstance = new DatabaseConnection();
        }
        return DBCInstance;
    }
}

console.log(DatabaseConnection.instance);