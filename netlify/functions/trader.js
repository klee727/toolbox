

// {
//     "path": "Path parameter (original URL encoding)",
//     "httpMethod": "Incoming request’s method name",
//     "headers": {Incoming request headers},
//     "queryStringParameters": {Query string parameters},
//     "body": "A JSON string of the request payload",
//     "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encoded"
//   }


exports.handler = async function (event, context) {
    // your server-side functionality
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello World" }),
    };
};