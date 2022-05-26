import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js'

config();

const server = process.env.SERVER;
const API_KEY = process.env.API_KEY;

const database = createClient(server, API_KEY);


export default database;