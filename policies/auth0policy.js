module.exports = {
    name: 'auth0',
    policy: (actionParams) => {
        return (req, res, next) => {
            console.log(req.headers)
            console.log('executing policy-from-example-plugin with params', actionParams);
            next()
        };
    }
};
  