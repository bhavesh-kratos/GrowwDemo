import axios from 'axios';
const API_BASE_URL = 'https://api.shutterstock.com'; //LATER ONWARDS WE WILL MAKE A Config file and place it in .gitignore
// which will contain all of the varying environment data, like this
const instance = axios.create({
  baseURL: API_BASE_URL,
});
instance.defaults.headers.common.authorization = `Basic NTUwMjctMjNlOTQtODZiNmUtZWM4MzctMDgyOGUtMzUyMWQ6ZWVmNDEtY2Y1YjEtMzlkOGEtM2M0MmUtNjJkMGItNDQxOGE=`;

export default instance;

