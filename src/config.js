export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-1",
        BUCKET: "serverlessstack-notes-app"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://9uzo1owvnl.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_en2sxuj7X",
        APP_CLIENT_ID: "6pbt6in2fkgaklinclqvva6gpa",
        IDENTITY_POOL_ID: "us-east-1:18c472c1-90b3-4f1e-8a22-59dbf62d908d"
    }
};