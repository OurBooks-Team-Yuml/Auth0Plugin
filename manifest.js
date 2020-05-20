module.exports = {
    version: '0.0.6',
    init: function (pluginContext) {
        pluginContext.registerPolicy(require('./policies/auth0policy.js'));
    },
    policies:['auth0'],
    schema: {
        $id: "http://express-gateway.io/schemas/plugins/auth0.json"
    },
};