const fetch = require("node-fetch");

module.exports = {
    name: 'auth0',
    schema: {
        $id: "http://express-gateway.io/schemas/plugins/auth0.json"
    },
    policy: (actionParams) => {
        return (req, res, next) => {
            const access_token = req.headers.authorization;

            fetch('https://dev-b5gefs5h.eu.auth0.com/userinfo', {
                headers: {
                    "Authorization": access_token,
                }
            }).then(
                res => res.json()
            ).then(
                res => {
                    console.log(res.data)
                    next()
                }
            )
        };
    }
};
