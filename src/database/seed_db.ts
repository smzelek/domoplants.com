import { accounts, plants, users, waterings } from "./schema";
import { eq } from 'drizzle-orm';
import { logFunction, dbNow } from '../service/utils';
import { client, db } from './db';

const seedDb = async () => {
    const _accounts: (typeof accounts.$inferInsert)[] = [
        {
            id: 1,
            owner_user_id: null,
            name: "KZ House",
            updated_at: dbNow(),
            created_at: dbNow(),
        },
    ];

    const _users: (typeof users.$inferInsert)[] = [
        {
            id: 1,
            name: "Steve Zelek",
            account_id: 1,
            username: "smzelek@gmail.com",
            role: "write",
            updated_at: dbNow(),
            created_at: dbNow(),
        },
        {
            id: 2,
            name: "Marina Kapes",
            account_id: 1,
            username: "marinajkapes@gmail.com",
            role: "read",
            updated_at: dbNow(),
            created_at: dbNow(),
        },
    ];

    const _plants: (typeof plants.$inferInsert)[] = [
        {
            id: 1,
            account_id: 1,
            scientific_name: 'Epipremnum aureum',
            common_name: 'Pothos',
            acquired_at: new Date('11/11/23'),
            updated_at: dbNow(),
            created_at: dbNow(),
        },
        {
            id: 2,
            account_id: 1,
            scientific_name: 'Dracaena deremensis',
            common_name: 'Janet Craig Compacta',
            acquired_at: new Date('12/19/23'),
            updated_at: dbNow(),
            created_at: dbNow(),
        },
        {
            id: 3,
            account_id: 1,
            scientific_name: 'Calathea makoyana',
            common_name: 'Peacock plant',
            acquired_at: new Date('12/25/23'),
            updated_at: dbNow(),
            created_at: dbNow(),
        },
        {
            id: 4,
            account_id: 1,
            scientific_name: 'Zamioculcas zamiifolia',
            common_name: 'Zanzibar Gem',
            acquired_at: new Date('3/25/24'),
            updated_at: dbNow(),
            created_at: dbNow(),
        },
        {
            id: 5,
            account_id: 1,
            scientific_name: 'Tradescantia',
            common_name: 'Spiderwort',
            acquired_at: new Date('3/25/24'),
            updated_at: dbNow(),
            created_at: dbNow(),
        },
        {
            id: 6,
            account_id: 1,
            scientific_name: 'Chamaedorea elegans',
            common_name: 'Parlor Palm',
            acquired_at: new Date('3/25/24'),
            updated_at: dbNow(),
            created_at: dbNow(),
        },
        {
            id: 7,
            account_id: 1,
            scientific_name: 'Plerandra elegantissima',
            common_name: 'Gold Crest False Aralia',
            acquired_at: new Date('3/25/24'),
            updated_at: dbNow(),
            created_at: dbNow(),
        },
        {
            id: 8,
            account_id: 1,
            scientific_name: 'Portulacaria afra',
            common_name: 'Dwarf Jade Bonsai',
            acquired_at: new Date('3/25/24'),
            updated_at: dbNow(),
            created_at: dbNow(),
        },
        {
            id: 9,
            account_id: 1,
            scientific_name: 'Ficus elastica',
            common_name: 'Rubber Tree',
            acquired_at: new Date('3/25/24'),
            updated_at: dbNow(),
            created_at: dbNow(),
        },
    ];

    const _waterings: (typeof waterings.$inferInsert)[] = [
    ];

    logFunction(seedDb, 'Dropping all data');
    await db.delete(accounts);
    await db.delete(plants);
    await db.delete(waterings);
    await db.delete(users);

    await db.transaction(async (tx) => {
        await tx.insert(accounts).values(_accounts);
        await tx.insert(users).values(_users);
        await tx.insert(plants).values(_plants);
        await tx.update(accounts).set({
            owner_user_id: 1,
        }).where(eq(accounts.id, 1));
        // await tx.insert(waterings).values(_waterings);
    });

    logFunction(seedDb, 'Seeded db successfully!');
    await client.end();
    process.exit(0);
};

seedDb();
