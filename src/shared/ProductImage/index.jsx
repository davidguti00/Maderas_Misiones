import React, { useState } from 'react';

// No se sustituye un producto desconocido por la foto de otro fabricante.
export default function ProductImage({ src, alt, style, ...props }) {
  const [failedSrc, setFailedSrc] = useState(null);
  if (!src || failedSrc === src) {
    return <div aria-hidden="true" className={props.className} style={{ width: props.width, height: props.height, ...style, minHeight: '6rem', background: '#e5e5e5', borderRadius: '5px' }} />;
  }
  const imageUrl = src.startsWith('/images/') ? `${process.env.PUBLIC_URL || ''}${src}` : src;
  return <img {...props} src={imageUrl} alt={alt} style={style} onError={() => setFailedSrc(src)} />;
}
