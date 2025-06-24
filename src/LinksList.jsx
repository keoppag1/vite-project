import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import useLinks from './useLinks';

const LINKS_PER_PAGE = 5;

function LinksList() {
  const { categoria } = useParams();
  const { links, loading, error } = useLinks();
  const [page, setPage] = useState(1);

  // Ordena los links para que los más recientes estén primero
  const sortedLinks = [...links].reverse();

  // Filtra por categoría si corresponde
  const filteredLinks = categoria
    ? sortedLinks.filter(link => link.categoria === categoria)
    : sortedLinks;

  // Paginación
  const totalPages = Math.ceil(filteredLinks.length / LINKS_PER_PAGE);
  const startIdx = (page - 1) * LINKS_PER_PAGE;
  const endIdx = startIdx + LINKS_PER_PAGE;
  const paginatedLinks = filteredLinks.slice(startIdx, endIdx);

  // Cambia de página
  const goToPage = (p) => setPage(p);

  if (loading) return <div className="loader">Cargando links...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!filteredLinks.length) return <div className="empty-message">No hay links disponibles.</div>;

  return (
    <>
      <div className="links-list-wrapper">
        <div className="ad-side ad-side-left">
          <img src="/public/image.png" alt="Banner izquierdo" style={{ width: '100%', maxWidth: '200px', height: 'auto', minWidth: '120px', objectFit: 'cover' }} />
        </div>
        <div className="links-grid">
          {paginatedLinks.map(link => (
            <RouterLink to={`/link/${link.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="link-card-complex">
                <div className="link-image-wrapper">
                  <img src={link.imagen} alt={link.nombre} className="link-image" />
                </div>
                <div className="link-content">
                  <h2 className="link-title">{link.titulo}</h2>
                  <p className="link-author">Por: {link.nombre}</p>
                  <span className="link-button">Ver detalle</span>
                </div>
              </div>
            </RouterLink>
          ))}
        </div>
        <div className="ad-side ad-side-right">
          <img src="/public/pict.jpg" alt="Banner derecho" style={{ width: '100%', maxWidth: '200px', height: 'auto', minWidth: '120px', objectFit: 'cover' }} />
        </div>
        <iframe src="//a.magsrv.com/iframe.php?idzone=5653852&size=900x250" width="900" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>

      </div>
      {/* Controles de paginación */}
      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={() => goToPage(page - 1)} disabled={page === 1}>Anterior</button>
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx + 1}
              className={page === idx + 1 ? 'active' : ''}
              onClick={() => goToPage(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
          <button onClick={() => goToPage(page + 1)} disabled={page === totalPages}>Siguiente</button>
        </div>
      )}
    </>
  );
}

export default LinksList;