import { BigQuery } from '@google-cloud/bigquery';

const bigquery = new BigQuery({
  projectId: 'teco-dev-cdh-e926'
});

export default{
	get: async (req, res, next) => { 
		const { serial } = req.params;
		
		const query = `SELECT id, usuario, campania FROM \`teco-dev-cdh-e926.hdm.callback\` where serie = @serial`;
		const options = {
			query,
			location: 'us-east4',
			params: {
				serial: serial 
			}
		}
		const [rows] = await bigquery.query(options);
		console.log(rows);
		res.json(rows);
	}
}
