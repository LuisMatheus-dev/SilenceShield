import database from '../infra/database.js';

class UserData {

    static async getUserData() {
        let { data, error } = await database
            .from('users')
            .select('*');
        
        if(error) throw new Error(error.code);
        return data;
    }
    static async getUserDataByUsername( username, password ) {
        let { data, error } = await database
            .from('users')
            .select('id, username, password')
            .eq('username', username);
            
        if(error) throw new Error("[ ERROR BD ] - Falha ao executar query");
        return data;
    }

    static async getUserById( userId ) {
        let { data, error } = await database
            .from('users')
            .select('id')
            .eq('id', userId);
        
        if(error || data.length === 0) throw new Error("[ ERROR BD ] - Id não encontrado no banco de dados");
        return data;
    }

    static async saveUser(  userId, fristName, lastName, username, password, systems ) {        
        let { data, error } = await database
            .from('users')
            .insert({ userId, fristName, lastName, username, password, systems });
        
        if(error) throw new Error(error.code);
        return data;


    }
}

export default UserData;