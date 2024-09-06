import { sql } from './db.js'

sql`
CREATE TABLE users (
  id text PRIMARY KEY,
  name character varying(255),
  password character varying(50),
  profile text
);
`.then(() => {
  console.log('tabela criada');
}) 