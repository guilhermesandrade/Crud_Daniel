import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const getLivros = async () => {
  const response = await api.get('/livros');
  return response.data;
};

export const createLivro = async (livro: any) => {
  const response = await api.post('/livros', livro);
  return response.data;
};

export const updateLivro = async (id: number, livro: any) => {
  const response = await api.put(`/livros/${id}`, livro);
  return response.data;
};

export const deleteLivro = async (id: number) => {
  await api.delete(`/livros/${id}`);
};
