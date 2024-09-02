import React, { useEffect, useState } from 'react';
import { getLivros, deleteLivro } from '../services/api';

interface Livro {
  id: number;
  titulo: string;
  autor: string;
  anoPublicacao: number;
  genero: string;
  numeroPaginas: number;
}

const LivroList: React.FC<{ onEdit: (livro: Livro) => void }> = ({ onEdit }) => {
  const [livros, setLivros] = useState<Livro[]>([]);

  useEffect(() => {
    const fetchLivros = async () => {
      const data = await getLivros();
      setLivros(data);
    };
    fetchLivros();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteLivro(id);
    setLivros(livros.filter(livro => livro.id !== id));
  };

  return (
    <div>
      <h2>Lista de Livros</h2>
      <ul>
        {livros.map(livro => (
          <li key={livro.id}>
            {livro.titulo} - {livro.autor} ({livro.anoPublicacao})
            <button onClick={() => onEdit(livro)}>Editar</button>
            <button onClick={() => handleDelete(livro.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LivroList;

