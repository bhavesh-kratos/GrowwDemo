import axios from 'axios';
const API_BASE_URL = 'https://api.shutterstock.com'; //LATER ONWARDS WE WILL MAKE A Config file and place it in .gitignore
// which will contain all of the varying environment data, like this
const instance = axios.create({
  baseURL: API_BASE_URL,
});
instance.defaults.headers.common.authorization = `Bearer 1/eyJjbGllbnRfaWQiOiIyMGFhMWMwYjM2ZGM4NmEyZjliMyIsInJlYWxtIjoiY3VzdG9tZXIiLCJzY29wZSI6InVzZXIudmlldyIsInV0diI6InpUak4iLCJ1c2VybmFtZSI6ImJwMzk1NTg3IiwidXNlcl9pZCI6MjAzNDE0OTY3LCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2FuaXphdGlvbl91c2VyX2lkIjpudWxsLCJwYXJlbnRfb3JnYW5pemF0aW9uX2lkcyI6W10sImN1c3RvbWVyX2lkIjoyMDM0MTQ5NjcsImV4cCI6MTUzMDY1MjQ5M30.KY09PcNC7aC2b7wqvtPoOh4ALorCWxnHaSeQdseVSFuBjjwUUPpLUzGcywd5npqOVsLw0ghoqT9foIWyk6LGsg`;

export default instance;

