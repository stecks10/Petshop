import React, { useEffect, useState } from 'react';
import ListaCategorias from '../components/ListaCategorias';
import ListaPost from '../components/ListaPost';
import { Route, useRouteMatch, useParams } from 'react-router-dom';
import '../assets/css/blog.css';
import { busca } from '../api/api';

const Categoria = () => {
  const { id } = useParams();
  const { path } = useRouteMatch();
  const [subcategorias, setSubCategorias] = useState([]);

  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubCategorias(categoria.subcategorias);
    });
  }, [id]);

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Noticias</h2>
      </div>

      <ListaCategorias />
      <Route exact path={`${path}/`}>
        <ListaPost url={`/posts?categoria=${id}`} />
      </Route>
    </>
  );
};

export default Categoria;
