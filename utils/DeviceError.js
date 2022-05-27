class DeviceError {
    

    //Verifica o ID do sistema, visa impedir criar "sistemas fantasmas"
    static checkAssignedSystem(req, _, next) {
        const { systemId } = req.body;      
    
        if(!systemId) {
            throw new Error('[ERROR 1] - Device assigned to non-existent device');
        }
        next(); 
    }    
}

export default DeviceError;
