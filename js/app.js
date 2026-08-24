/**
 * Add main startup functionality here
 */
console.log("run app.js...");

openDatabaseConnection();
createDatabaseData(TABLE_ANNOUNCEMENTS, ["title", "description"], ["Title 1", "Description 1"]);
// initDatabase();
// createDatabaseData(TABLE_ANNOUNCEMENTS, "anct1", ["title", "description"], ["Title 1", "Description 1"]);
// readDatabaseContents();

// console.log(databaseConnectionPromise);

// printDatabaseContents();
// console.log("table: " + readDatabaseTable(TABLE_ANNOUNCEMENTS));
// console.log("data: " + readDatabaseData(TABLE_ANNOUNCEMENTS, "anct1"));