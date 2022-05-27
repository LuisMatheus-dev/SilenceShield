import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js'

config();

const server = process.env.SERVER;
const api = process.env.API_KEY;

const database = createClient(server, api);


export default database;