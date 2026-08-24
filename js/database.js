/**
 * Add IndexedDB functions here
 */
console.log("run database.js...");


/**
 * TODO:
 * Database
 * [/] initialization
 * [/] read database structure
 * 
 * [/] create data
 * [] read data
 * [] update data
 * [] delete data
 */

// CONSTANTS
const TABLE_ANNOUNCEMENTS = "announcements";
const TABLE_ACTIVITIES = "activities";
const TABLE_CLASSROOM_TASKS = "classroom_tasks";

let databaseConnection;
let databaseConnectionPromise;
const DB_NAME = "AgendaDB";
const DB_VERSION = 1;

/**
 * Attempt to open a database connection.
 * 
 * It should return only one instance of a Promise.
 * 
 * @returns databaseConnectionPromise
 */
function openDatabaseConnection() {
    if (databaseConnectionPromise) {
        return databaseConnectionPromise;
    }

    databaseConnectionPromise = new Promise((resolve, reject) => {
        console.log("Opening database connection...");

        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = function (event) {
            const db = event.target.result;

            if (!db.objectStoreNames.contains(TABLE_ANNOUNCEMENTS)) {
                db.createObjectStore(TABLE_ANNOUNCEMENTS, {
                    keyPath: "id",
                    autoIncrement: true
                });
                alert("Added " + TABLE_ANNOUNCEMENTS);
            }
        }

        request.onsuccess = function (event) {
            databaseConnection = event.target.result;
            console.log("Database connection retrieved!");
            resolve(event.target.result);
        }

        request.onerror = function (event) {
            alert("Error retrieving database connection! Check console for details");
            console.error("Database error: ", event.target.error);
            reject(event.target.error);
        }
    });

    return databaseConnectionPromise;
}

async function printDatabaseContents() {
    if (!databaseConnection) {
        await openDatabaseConnection(); // attempt to open database connection if none
    }
}

async function readDatabaseTables() {
    if (!databaseConnection) {
        await openDatabaseConnection(); // attempt to open database connection if none
    }

    return databaseConnection.objectStoreNames;
}

async function readDatabaseTableContents(tableName) {
    if (!databaseConnection) {
        await openDatabaseConnection(); // attempt to open database connection if none
    }

    const transaction = databaseConnection.transaction(tableName, "readonly");
    const store = transaction.objectStore(tableName);
    const request = store.getAll();

    let content;

    request.onsuccess = (event) => {
        
        console.log()
    };

    return typeof content;
}

readDatabaseTableContents(TABLE_ANNOUNCEMENTS).then(v => console.log("result: " + v));


/**
 * Creates data in the database
 *
 * @param {string} tableName name of the table to store the data
 * @param {string[]} attributeKeys attribute keys associated with the data
 * @param {*[]} attributeValues attribute values associated with the data
 */
async function createDatabaseData(tableName, attributeKeys, attributeValues) {
    if (!databaseConnection) {
        await openDatabaseConnection();
    }

    const transaction = databaseConnection.transaction(tableName, "readwrite");
    const store = transaction.objectStore(tableName);

    let dataBundle = "";

    dataBundle = dataBundle.concat("{");

    for (let i = 0; i < attributeKeys.length; i++) {
        // data attribute key
        dataBundle = dataBundle.concat("\"");
        dataBundle = dataBundle.concat(attributeKeys[i]);
        dataBundle = dataBundle.concat("\": ");

        // data attribute value
        if (typeof attributeValues[i] === "string") {
            dataBundle = dataBundle.concat("\"");
            dataBundle = dataBundle.concat(attributeValues[i]);
            dataBundle = dataBundle.concat("\"");
        } else {
            dataBundle = dataBundle.concat(attributeValues[i]);
        }

        // delimeter
        if (i < attributeKeys.length - 1) {
            dataBundle = dataBundle.concat(", ");
        }
    }

    dataBundle = dataBundle.concat("}");

    store.add(JSON.parse(dataBundle));
}
