import axios from './baseUrl';

export const getImages = data => axios.get(`/v2/images/search?query=${data.result}&page=${data.page}`, data).then(res => res.data);

