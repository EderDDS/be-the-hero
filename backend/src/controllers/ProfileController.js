const connection = require('../database/connection');

module.exports = {

    async listForOng(request, response){

        const ong_id = request.headers.authorization;

        console.log(ong_id);

        const incidents = await connection('incident')
        .where('ong_id',ong_id)
        .select('*');

        console.log(incidents);

        return response.json(incidents);

    }


}