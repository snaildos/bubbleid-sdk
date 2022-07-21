# SDK wrapper documentation
## Importing the wrapper
```npm add @snaildos/bubble-id-sdk```
## Configuring the wrapper
```import { BubbleID } from '@snaildos/bubbleid-sdk'
// Define APP identifier
const id = new BubbleID('example-app')```
## createUser
```id.createUser(email, name, pass, captcha)```
### Returning
```
{

  "status": true,

  "token": "string"

}
```
## getUserFromToken the wrapper
```id.getUserFromToken(token)```
### Returning
```
{

  "status": true,

  "user": {

    "id": "string",

    "createdAt": "number",

    "scopes": "string[]",

    "email": "string",

    "name": "string",

    "verified": "boolean"

  }

}
```
## createURL
```id.createURL(callbackurl)```
### Returning
```
N/A
```