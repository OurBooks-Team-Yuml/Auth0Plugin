# Auth0Plugin

Plugin for Express API Gateway to authenticate auth0 users with access_token.

## Description

This plugin calls `/userinfo` endpoint in your Auth0 domain to check if user access_token is
correct.

## Usage

### Installation with express gateway cli
You can install plugin with following command:

```
eg plugin install express-gateway-plugin-auth0
```

This will ask you two following questions:
```
? Would you like to enable this plugin in system config? Yes/No
? Would you like to add new policies to gateway config? Yes/No
```

If you answer `Yes` for first question it will populate your `system.config.yml`
with the plugin configuration.
If you answer `Yes` for second question it will add `auth0` policy to your policies
in `gateway.config.yml` file.

See point below to do it manually i.e. when you answer No for both questions.

### Manual installation
First install plugin with following command
```
npm i --save express-gateway-plugin-auth0
```

Then open `system.config.yml` and add the following yaml:

```yaml
plugins:
  auth0:
    package: express-gateway-plugin-auth0
```

Next you should add the `auth0` policy to the `gateway.config.yml`. To do that you should
add `auth0` policy to your policies:

```yaml
policies:
  - auth0
```

and then in the pipelines:

```yaml
pipelines:
  pipeline1:
    policies:
      -
        auth0:
          -
            action:
              domain: 'https://your-domain.auth0.com'
```

### User data in request
You can add `request-transformer` policy to inject user information to the request body. To do that
use following policy:

```yaml
pipelines:
  pipeline1:
    policies:
      -
        auth0:
          -
            action:
              domain: 'https://your-domain.auth0.com'
      -
        request-transformer:
          -
            action:
              body:
                add:
                  user: req.user
```
