import axios from 'axios';

const url = 'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyByxyHD-NmIs2bPqI0r03TzQRt4b9KYvW0';

export const fetchPosts = () => axios.get(url);

