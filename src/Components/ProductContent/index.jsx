import React from 'react';

export default function ProductContent({ data }) {
  return (
    <div style={{ lineHeight: 1.65, textAlign: 'left' }}>
      {data.description && <p style={{whiteSpace: 'pre-line'}}>{data.description}</p>}
      {data.contentSections?.map(section => <section key={section.title}>
        <h3 style={{fontSize: '1rem', marginBottom: '0.5rem'}}>{section.title}</h3>
        <ul style={{paddingLeft: '1.2rem'}}>{section.items.map(item => <li key={item}>{item}</li>)}</ul>
      </section>)}
      {data.features?.length > 0 && <ul style={{ paddingLeft: '1.2rem' }}>{data.features.map(feature => <li key={feature}>{feature}</li>)}</ul>}
      {data.applications && <p><strong>Aplicaciones: </strong>{data.applications}</p>}
      {data.difference && <p><strong>Para elegir: </strong>{data.difference}</p>}
      {data.source && <p><a href={data.source} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>Ficha oficial · EGGER Argentina ↗</a></p>}
      {!data.description && <p>Consultanos por este producto.</p>}
    </div>
  );
}
