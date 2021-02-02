'use strict';

const AWS = require('aws-sdk');
// const fs = require('fs');

AWS.config.update({
  region: 'us-east-1',
});

const S3 = new AWS.S3();

module.exports.list = async (event) => {
  const params = {
    Bucket: process.env.BUCKET_NAME,
  };

  try {
    const bucket = await S3.listObjects(params).promise();

    // fs.writeFileSync('./buckets.json', JSON.stringify({ bucket }, null, 2));

    const items = (bucket.Contents || []).map((item) => ({
      key: item.Key,
      size: item.Size,
    }));

    return {
      statusCode: 200,
      body: JSON.stringify({ items }, null, 2),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error }, null, 2),
    };
  }
};
