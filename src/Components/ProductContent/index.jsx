import React from 'react';

export default function ProductContent({ data }) {
  return (
    <div style={{ lineHeight: 1.65, textAlign: 'left' }}>
      {data.description && <p>{data.description}</p>}
      {data.features?.length > 0 && <ul style={{ paddingLeft: '1.2rem' }}>{data.features.map(feature => <li key={feature}>{feature}</li>)}</ul>}
      {data.applications && <p><strong>Aplicaciones: </strong>{data.applications}</p>}
      {data.difference && <p><strong>Para elegir: </strong>{data.difference}</p>}
      {data.source && <p><a href={data.source} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>Ficha oficial · EGGER Argentina ↗</a></p>}
      {!data.description && <p>Consultanos por este producto.</p>}
    </div>
  );
}
