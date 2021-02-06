# Play Moments

List content from a public bucket on S3 and display videos and images

> As use case I used my screen and videos captures at playing games on PS4

## Requirements

- AWS account and AWS CLI to configure credentials
- S3 bucket with read permissions to global (public)
- Serverless Framework CLI
- Nodejs version 12+

## Up functions locally

On `functions` directory, create `.env` file based on `.env.sample`

> Note: Always declare NODE_ENV as development, otherwise, every time you call funcion locally, a new request to S3 will be made.

```bash
$ cd functions
$ npm install
$ serverless offline
```

This will up a development server on port `4000`, to change it, check custom configuration on `serverless.yml` file.

## Todo

- Frontend
  - Receive payload from lambda funcion save in memory and manage without make newer requests
  - Divide view by directories (Games -> ScreenShot | Videos)
  - etc
