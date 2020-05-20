module.exports = {
    version: '0.0.1',
    init: function (pluginContext) {
        pluginContext.registerPolicy(require('./policies/auth0policy.js'));
    }
};