module.exports = {
    name: 'auth0-access-token',
    schema: {
        $id: 'http://express-gateway.io/schemas/policies/auth0.json',
        type: 'object',
        properties: {}
    },
    policy: (actionParams) => {
        return (req, res, next) => {
            console.log(req.headers)
            console.log('executing policy-from-example-plugin with params', actionParams);
            next()
        };
    }
};
  