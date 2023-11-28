import axios from 'axios';

const api = axios.create({
   baseURL: 'https://siad.com.br/vendas/api/post_contato.php?funcao=post_contato',
});

export default api;