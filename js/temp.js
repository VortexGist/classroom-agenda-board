/**
 * Temporary place to store script drafts
 */


// /**
//  * Gets contents of specified table in Database
//  *
//  * @param {string} tableName
//  * @returns a Promise for table contents
//  */
// async function readDatabaseTable(tableName) {
//     const db = await getDatabaseConnection();

//     // Gets the data
//     const promise = new Promise((resolve, reject) => {
//         const transaction = db.transaction(tableName, "readonly");
//         const store = transaction.objectStore(tableName);

//         const dataRequest = store.getAll();

//         dataRequest.onsuccess = function () {
//             // console.log(dataRequest.result);

//             for (let i = 0; i < dataRequest.result.length; i++) {
//                 console.log(dataRequest.result[i]);
//             }

//             resolve(dataRequest.result);
//         };

//         dataRequest.onerror = function () {
//             reject(dataRequest.error);
//         }
//     });

//     return promise;
// }

// async function readDatabaseData(tableName, name) {
//     const tableContents = await readDatabaseTable(tableName);

//     for (let i of tableContents) {
//         console.log(i);
//     }

//     return tableContents[0];
// }

// async function updateDatabaseData(name, attributeName, newValue) {

// }

// async function deleteDatabaseTableContent(tableName) {
//     const db = await getDatabaseConnection();

//     const transaction = db.transaction(tableName, "readonly");
//     const store = transaction.objectStore(tableName);

//     store.clear();
// }

// async function deleteDatabaseData(tableName, primaryKey) {
//     const db = await getDatabaseConnection();

//     const transaction = db.transaction(tableName, "readonly");
//     const store = transaction.objectStore(tableName);

//     const request = store.delete(primaryKey);

//     request.onsuccess = (event) => {
//         console.log("Deleted " + primaryKey + " in " + tableName);
//     };

//     request.onerror = (event) => {
//         alert("Error in deleting " + primaryKey + " in " + tableName + ". See console for details");
//         console.error("Deletion error: " + event.target.error);
//     };
// }



// function getDatabaseConnection() {
//     if (databaseConnectionPromise) {
//         return databaseConnectionPromise;
//     }

//     databaseConnectionPromise = new Promise((resolve, reject) => {
//         const dbRequest = indexedDB.open(databaseName, databaseVersion);

//         dbRequest.onupgradeneeded = function (event) {
//             const db = event.target.result;

//             if (!db.objectStoreNames.contains(TABLE_ANNOUNCEMENTS)) {
//                 db.createObjectStore(TABLE_ANNOUNCEMENTS, {
//                     keyPath: "id",
//                     autoIncrement: true
//                 });
//                 alert("Added " + TABLE_ANNOUNCEMENTS);
//             }
//         }

//         dbRequest.onsuccess = function (event) {
//             console.log("Database opened!");
//             resolve(event.target.result);
//         }

//         dbRequest.onerror = function (event) {
//             alert("Database Error! Check console for details");
//             console.error("Database error: ", event.target.error);
//             reject(event.target.error);
//         }
//     });

//     return databaseConnectionPromise;
// }

// async function readDatabaseContents() {
//     const db = await getDatabaseConnection();

//     console.log(db.objectStoreNames);

//     for (let i of db.objectStoreNames) {
//         console.log(i);
//     }

//     return db.objectStoreNames;
// }

// async function printDatabaseContents() {
//     let contents = await readDatabaseContents();
//     console.log("Database contents: " + contents);
// }
