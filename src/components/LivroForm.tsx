import React, { useState, useEffect } from 'react';
import { createLivro, updateLivro } from '../services/api';

interface Livro {
  id?: number;
  titulo: string;
  autor: string;
  anoPublicacao: number;
  genero: string;
  numeroPaginas: number;
}

const LivroForm: React.FC<{ livroToEdit?: Livro; onSave: () => void }> = ({ livroToEdit, onSave }) => {
  const [livro, setLivro] = useState<Livro>({
    titulo: '',
    autor: '',
    anoPublicacao: 0,
    genero: '',
    numeroPaginas: 0,
  });

  useEffect(() => {
    if (livroToEdit) {
      setLivro(livroToEdit);
    }
  }, [livroToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLivro({ ...livro, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (livro.id) {
      await updateLivro(livro.id, livro);
    } else {
      await createLivro(livro);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título:</label>
        <input name="titulo" value={livro.titulo} onChange={handleChange} required />
      </div>
      <div>
        <label>Autor:</label>
        <input name="autor" value={livro.autor} onChange={handleChange} required />
      </div>
      <div>
        <label>Ano de Publicação:</label>
        <input name="anoPublicacao" type="number" value={livro.anoPublicacao} onChange={handleChange} required />
      </div>
      <div>
        <label>Gênero:</label>
        <input name="genero" value={livro.genero} onChange={handleChange} required />
      </div>
      <div>
        <label>Número de Páginas:</label>
        <input name="numeroPaginas" type="number" value={livro.numeroPaginas} onChange={handleChange} required />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default LivroForm;
