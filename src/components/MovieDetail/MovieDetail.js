import React from 'react';
import s from '../../App.css';

const MovieDetail = ({ baseUrl, title, url, descr, genres, vote }) => {
  return (
    <div className={s.movieDetailDiv}>
      <h2>{title}</h2>
      {url && <img src={baseUrl + url} alt={title} width="350" />}
      <p>{descr}</p>
      <ul>{genres && genres.map(i => <li key={i.id}>{i.name}</li>)}</ul>
      <p>{vote}</p>
    </div>
  );
};

export default MovieDetail;
