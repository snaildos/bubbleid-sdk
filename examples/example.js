// Import Package
import { BubbleID } from '@snaildos/bubbleid-sdk'
// Define APP identifier
const id = new BubbleID('example-app')
console.log("Creating a test user")
// Configure Variables, typically get this data from your frontend
var email = "test@snaildos.com"
var name = "snailtest"
var pass = "higuysabcdefg!!!!"
var captcha = "get this from our documentation"
// Use our SDK to create the new user
id.createUser(email, name, pass, captcha)