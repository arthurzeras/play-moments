const { VUE_APP_BUCKET_NAME } = process.env;
export const BUCKET_URL = `https://${VUE_APP_BUCKET_NAME}.s3.amazonaws.com`;
