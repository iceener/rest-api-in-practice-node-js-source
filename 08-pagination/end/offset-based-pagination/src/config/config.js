// required environment variables
['NODE_ENV', 'PORT'].forEach((name) => {
    if (!process.env[name]) {
        throw new Error(`Environment variable ${name} is missing`)
    }
});

export default  {
    env: process.env.NODE_ENV,
    server: {
        port: Number(process.env.PORT)
    }
};