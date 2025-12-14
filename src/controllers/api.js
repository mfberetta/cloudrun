const { BigQuery } = require('@google-cloud/bigquery');

const bigquery = new BigQuery({
  projectId: 'teco-dev-cdh-e926'
});

async function get(serie) {
  const query = \`SELECT id, usuario, campania 
  FROM `teco-dev-cdh-e926.hdm.callback\` 
  where serie = '@serie'
  `;

  const options = {
    query,
    location: 'us-east4', // o 'EU' según tu dataset
  };

  const [rows] = await bigquery.query(options);

  return rows; // ya es JSON
}

module.exports = { get };