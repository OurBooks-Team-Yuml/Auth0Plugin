module.exports = {
    version: '0.0.3',
    init: function (pluginContext) {
        pluginContext.registerPolicy(require('./policies/auth0policy.js'));
    },
    policies:['auth0'],
    schema: {  // This is for CLI to ask about params 'eg plugin configure example'
        baseUrl: {
            title: 'param',
            description: 'param',
            type: 'string',
        },
    }
};