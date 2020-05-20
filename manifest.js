module.exports = {
    version: '0.0.3',
    init: function (pluginContext) {
        pluginContext.registerPolicy(require('./policies/auth0policy.js'));
    },
    policies:['auth0'],
};