const fetch = require("node-fetch");

module.exports = {
    name: 'auth0',
    schema: {
        $id: "http://express-gateway.io/schemas/plugins/auth0.json",
        type: 'object',
        properties: {
            domain: {
                type: 'string',
                format: 'url',
                examples: ['https://your-domain.auth0.com'],
            }
        },
        required: ['domain'],
    },
    policy: (actionParams) => {
        return async (req, res, next) => {
            const access_token = req.headers.authorization

            const data = await fetch(`${actionParams.domain}/userinfo`, {
                headers: {
                    "Authorization": access_token,
                }
            }).then(res => res.json()).catch(err => console.log(err))

            if (data !== undefined) {
                req['user'] = JSON.stringify(data);
                return next()
            }

            res.sendStatus(401)
        };
    }
};
