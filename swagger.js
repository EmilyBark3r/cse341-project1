const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Users Api',
        description: 'Users Api'
    },
    host: 'https://project1-6m7f.onrender.com',
    schemes:  ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// This will generate Swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);