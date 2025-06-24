import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useLinks from './useLinks';

// Puedes cambiar esta URL por la de tu logo preferido
const TERABOX_LOGO = '/image.png';

function LinkDetail() {
  const { id } = useParams();
  const { links, loading, error } = useLinks();

  if (loading) return <div className="loader">Cargando link...</div>;
  if (error) return <div className="error-message">{error}</div>;

  const link = links.find(l => String(l.id) === id);
  if (!link) return <div className="empty-message">Link no encontrado.</div>;

  // Links relacionados (misma categoría, excluyendo el actual)
  const relacionados = links.filter(l => l.categoria === link.categoria && String(l.id) !== id).slice(0, 4);

  return (
    <div className="link-detail-page">
      <div className="link-detail-horizontal">
        <div className="link-detail-image-wrapper">
          <img src={link.imagen} alt={link.nombre} className="link-detail-image" />
        </div>
        <div className="link-detail-content">
          <h2 className="link-detail-title">{link.titulo}</h2>
          <p className="link-detail-author"><b>Por:</b> {link.nombre}</p>
          <p className="link-detail-category"><b>Categoría:</b> {link.categoria}</p>
          <div className="link-detail-terabox-row">
            <a href={link.link} target="_blank" rel="noopener noreferrer" className="link-detail-button">
              ver Video
            </a>
            <img src={TERABOX_LOGO} alt="Terabox logo" className="terabox-logo" />
          </div>
        </div>
      </div>
      <h3 className="relacionados-title">Relacionados</h3>
      <div className="links-grid">
        {relacionados.map(rel => (
          <div key={rel.id} className="link-card-complex">
            <Link to={`/link/${rel.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="link-image-wrapper">
                <img src={rel.imagen} alt={rel.nombre} className="link-image" />
              </div>
              <div className="link-content">
                <h2 className="link-title">{rel.titulo}</h2>
                <p className="link-author">Por: {rel.nombre}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LinkDetail;