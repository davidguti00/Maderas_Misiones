# Preparación de preview pública — 19/09/2026

Resultado local: http://localhost:3010. Sin commit, push ni deploy.

## Contenido

- Se retiraron los estados de validación comercial, detalles pendientes de proveedor, notas sobre categorías antiguas y avisos de imágenes pendientes de la interfaz y del catálogo público.
- La copia previa del catálogo conserva todas esas anotaciones en [contenido-interno-2026-09-19.json](contenido-interno-2026-09-19.json). La auditoría original sigue disponible en [AUDITORIA-CONTENIDO.md](AUDITORIA-CONTENIDO.md).
- Compactos conserva su lugar en el acordeón de tableros decorativos. Las categorías sin ficha suficiente muestran únicamente su nombre, una invitación a consultar y el contacto existente.
- Las 16 fichas EGGER conservan exactamente sus nombres, descripciones, características, aplicaciones, diferencias, imágenes, URLs de imágenes y fuentes. No se investigaron proveedores ni se incorporaron productos.
- Las imágenes fallidas de madera listonada, adhesivos, fenólicos, maderas para obra y techos dejaron de solicitarse. Su espacio es neutro, sin texto ni icono de imagen rota. Sus URLs anteriores están en los registros de auditoría. Se conserva la misma protección frente a futuros errores de carga.
- Las preguntas comerciales se agrupan en [PENDIENTES-PROVEEDORES.md](PENDIENTES-PROVEEDORES.md). No se pide al dueño que consiga fotos, textos ni URLs.

## Comprobaciones

- `npm run build`: correcto. Aviso de Browserslist por caniuse-lite desactualizado.
- `CI=true npm test -- --watchAll=false --runInBand`: 6 tests aprobados. Incluyen recorrido de todas las fichas de mobiliario, ausencia de notas internas, conservación de fuentes y comportamiento de imágenes ausentes/fallidas.
- Búsqueda global de pendiente, validación, Lorem, TODO y expresiones de auditoría: las anotaciones quedan en docs y en las aserciones negativas de tests, no en contenido público.
- Revisión en navegador a 1440 × 1000 y 390 × 844: fichas EGGER, acordeones, Compactos y estado neutro de Adhesivos; grilla móvil sin desbordamiento horizontal. Se restauró el viewport original.
- Página cargada sin imágenes rotas ni imágenes aún cargando en la comprobación final. Consola sin errores ni advertencias JavaScript nuevos tras la recarga. No se garantiza la disponibilidad futura de recursos externos heredados.
- Se mantiene diseño y navegación cards → modal → familias.

## Antes de publicar

- El formulario no tiene backend de envío. El botón sigue deshabilitado; el texto público dirige a WhatsApp o teléfonos. Resolver su integración antes de presentarlo como formulario operativo.
- Las categorías enumeradas en el documento de proveedores todavía no tienen ficha completa. La comercialización local de las variantes EGGER necesita confirmación, aunque su información técnica ya esté verificada.
- Las imágenes externas heredadas que funcionan siguen siendo externas y no se han reemplazado ni validado sus derechos en esta etapa. Las cinco categorías sin foto usan un espacio neutro.
- Se mantienen los pendientes de datos comerciales y contactos de la auditoría anterior.

## Archivos de esta etapa

- `docs/PENDIENTES-PROVEEDORES.md`
- `docs/PREVIEW-PUBLICA.md`
- `docs/contenido-interno-2026-09-19.json`
- `docs/ENTREGA-LOCAL.md`
- `src/data/furniture-cards.json`
- `src/Components/ProductContent/index.jsx`
- `src/Components/AccordionDetail/index.jsx`
- `src/shared/ProductImage/index.jsx`
- `src/Components/Producs/index.jsx`
- `src/Components/About/index.jsx`
- `src/Components/Construction/Topics/index.jsx`
- `src/Components/Contact/Forms/FormNormal/index.jsx`
- `src/App.test.js`
