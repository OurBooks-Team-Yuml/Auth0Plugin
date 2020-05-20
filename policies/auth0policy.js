module.exports = {
    name: 'auth0',
    schema: {
        $id: 'auth0.json',
        type: 'object',
        properties: {
            message: {
                type: 'string',
                description: 'Message to show',
                examples: ['This is a log message']
            }
        },
    },
    policy: (actionParams) => {
        return (req, res, next) => {
            console.log(req.headers)
            console.log('executing policy-from-example-plugin with params', actionParams);
            next()
        };
    }
};
  