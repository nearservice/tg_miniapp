import { createPool, sql } from '@vercel/postgres';

async function seedPage() {
    await sql`
        CREATE TABLE IF NOT EXISTS page (
            id SERIAL PRIMARY KEY,
            logo VARCHAR(512),
            title VARCHAR(512),
            description VARCHAR(512),
            slogan VARCHAR(512),
            first_button VARCHAR(512),
            second_button VARCHAR(512)
        );
    `;
    await sql`
        INSERT INTO page (logo, title, description, slogan, first_button, second_button)
        VALUES ('images/logo.svg', 'Инфлюенсеры, посевы и медиа', 'Дружим с блогерами, размещаем контент, с нуля создаем хорошие и успешные медиа.', 'Happiness is near.', 'Поработать с нами', 'позвать в тендер')
        ON CONFLICT (id) DO NOTHING;
    `;
}

async function seedServices() {
    await sql`
        CREATE TABLE IF NOT EXISTS services (
            id SERIAL PRIMARY KEY,
            image VARCHAR(512)
        );
    `;
    await sql`
        INSERT INTO services (image)
        VALUES 
        ('images/services/service-1.png'),
        ('images/services/service-2.png'),
        ('images/services/service-3.png'),
        ('images/services/service-4.png'),
        ('images/services/service-5.png')
        ON CONFLICT (id) DO NOTHING;
    `;
}

async function seedClients() {
    await sql`
        CREATE TABLE IF NOT EXISTS clients (
            id SERIAL PRIMARY KEY,
            logo VARCHAR(512),
            link VARCHAR(512)
        );
    `;
    await sql`
        INSERT INTO clients (logo, link)
        VALUES 
        ('images/clients/vk.png', 'https://vk.com'),
        ('images/clients/lenta.png', 'https://lenta.ru'),
        ('images/clients/one-two-trip.png', 'https://onetwotrip.com'),
        ('images/clients/yandex-dzen.png', 'https://dzen.ru.com'),
        ('images/clients/ozon.png', 'https://ozon.ru'),
        ('images/clients/reo.png', 'https://reo.ru'),
        ('images/clients/vk-text.png', 'https://vk.com'),
        ('images/clients/yandex-market.png', 'https://market.yandex.ru'),
        ('images/clients/citydrive.png', 'https://citydrive.ru'),
        ('images/clients/okko.webp', 'https://okko.tv'),
        ('images/clients/invitro.png', 'https://www.invitro.com'),
        ('images/clients/yandex-lavka.png', 'https://lavka.yandex.ru')
        ON CONFLICT (id) DO NOTHING;
    `;
}

export default defineEventHandler(async () => {
    const db = createPool();
    try {
        await db.query('SELECT 1 FROM page LIMIT 1');
    } catch (error) {
        await seedPage();
    }

    try {
        await db.query('SELECT 1 FROM services LIMIT 1');
    } catch (error) {
        await seedServices();
    }

    try {
        await db.query('SELECT 1 FROM clients LIMIT 1');
    } catch (error) {
        await seedClients();
    }

    const { rows: page } = await db.query('SELECT * FROM page WHERE id = 1');
    const { rows: services } = await db.query('SELECT * FROM services');
    const { rows: clients } = await db.query('SELECT * FROM clients ORDER BY id');
    return {
        info: page[0],
        services: services,
        clients: clients,
    };
});
