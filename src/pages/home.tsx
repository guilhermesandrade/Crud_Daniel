import React, { useState } from 'react';
import LivroList from '../components/LivroList';
import LivroForm from '../components/LivroForm';

const Home: React.FC = () => {
  const [editingLivro, setEditingLivro] = useState<any | null>(null);
  const [refreshList, setRefreshList] = useState(false);

  const handleEdit = (livro: any) => {
    setEditingLivro(livro);
  };

  const handleSave = () => {
    setEditingLivro(null);
    setRefreshList(!refreshList);
  };

  return (
    <div>
      <h1>Gerenciador de Livros</h1>
      <LivroForm livroToEdit={editingLivro} onSave={handleSave} />
      <LivroList onEdit={handleEdit} key={refreshList ? 'refresh' : 'default'} />
    </div>
  );
};

export default Home;
