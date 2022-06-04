import User from "../entities/User.js";

class Auth {
    
    static async verifyId( req, res, next ) {
        const { userId } = req.params;

        try {
            await User.verifyId( userId )
            next();
        } catch(error) {
            next(error.message);
        }
        
    }

    static verifyLogin(req, res, next) {
        const loginFields = Object.keys(req.query).length;
        
        if(loginFields) {
            next();
        } else {
            throw new Error(`[ ERROR LOGIN ] \nO usúario precisa estar logado para efetuar requisições, \nTente user/login/?{username}&{password} 
            \n -------- DICA DE USO ------ \n[!] Não esqueça de guardar seu id para futuras requisições 
            \nEX: /{id do usúario}/{rota}`);
        }

    }
}

export default Auth;