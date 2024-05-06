import { migrate } from "drizzle-orm/postgres-js/migrator";
import { client, db } from "./db";
import path from 'path';

(async () => {
    await migrate(db, { migrationsFolder: path.join(__dirname, "./migrations/") });
    await client.end();
})();
