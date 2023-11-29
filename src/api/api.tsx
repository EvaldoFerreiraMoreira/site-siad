import axios from 'axios';

const api = axios.create({
   baseURL: 'https://siad.com.br/vendas/api/post_contato.php',
});

export default api;