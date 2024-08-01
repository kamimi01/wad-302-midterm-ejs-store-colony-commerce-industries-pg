import { client } from "..";

const run = async () => {
  try {
    await client.connect();

    await client.query(`
      DROP TABLE IF EXISTS users CASCADE;

      CREATE TABLE users (
        id VARCHAR(100) PRIMARY KEY,
        email VARCHAR(100),
        password VARCHAR(100)
      );
    `);

    console.log("table is generated");
    console.log("testing... if we can send query");

    const data = await client.query("SELECT * FROM users;");

    console.log(`currently the project in database is ${JSON.stringify(data.rows)}`);

    console.log("Successfully the table is generated and confirmed!");
  } catch (err) {
    console.error(`Oh no... something has gone wrong see the error: ${err}`);
  }
};

run().then(() => client.end());
