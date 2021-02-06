'use strict';

const fs = require('fs');
const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1',
});

const S3 = new AWS.S3();

/**
 * Group objects by directory hierarchy, this case is:
 * /PS4/SHARE/<Screenshots | Video Clips>/<Name of the game>/<File name with extension>
 * @param {*} items Object path on bucket
 */
function groupByGames(items) {
  return items.reduce((all, current) => {
    const key = current.Key;
    const [, , type, game] = key.split('/');

    const index = all.findIndex(i => i.name === game);

    if (index !== -1) {
      if (type in all[index]) {
        all[index][type].push(key);
      } else {
        all[index][type] = [key];
      }

      return all;
    }

    all.push({
      name: game,
      [type]: [key],
    });

    return all;
  }, []);
}

function getBucketData() {
  const params = {
    Bucket: process.env.BUCKET_NAME,
  };

  return S3.listObjects(params).promise();
}

async function getMockData() {
  if (!fs.existsSync('./bucket.json')) {
    const bucket = await getBucketData();

    fs.writeFileSync('./bucket.json', JSON.stringify({ bucket }, null, 2));
  }

  return JSON.parse(fs.readFileSync('./bucket.json', 'utf-8')).bucket;
}

module.exports.list = async () => {
  const headers = {
    'Access-Control-Allow-Origin': process.env.ORIGINS,
  };

  try {
    const bucket =
      process.env.NODE_ENV === 'development'
        ? await getMockData()
        : await getBucketData();

    const items = groupByGames(bucket.Contents || []);

    return {
      headers,
      statusCode: 200,
      body: JSON.stringify({ items }, null, 2),
    };
  } catch (error) {
    const obj = {
      detail: error.message,
      message: 'Internal Server Error',
    };

    return {
      headers,
      statusCode: 500,
      body: JSON.stringify(obj, null, 2),
    };
  }
};
