# Revisión local — Maderas Misiones

> Registro de la primera etapa. La preparación posterior de la preview pública, que retira los avisos internos de la interfaz, se documenta en [PREVIEW-PUBLICA.md](PREVIEW-PUBLICA.md). Las referencias siguientes a avisos visibles describen el estado anterior.

URL: http://localhost:3010

## Resultado

Se conserva el diseño React/MUI/SCSS, navegación, cards, modales y acordeones. La card de tableros decorativos contiene Eurodekor, MDF Light revestido y Eurolight; PerfectSense tiene su propia card y variantes Matt/Gloss. MDF, laminados, cantos, revestimientos y molduras cuentan con contenido verificable. Las categorías de otros proveedores siguen presentes. No hubo push, deploy ni cambios de dependencias.

- Auditoría previa: [AUDITORIA-CONTENIDO.md](AUDITORIA-CONTENIDO.md).
- Tabla de los 16 productos, páginas argentinas e imágenes con origen y hash: [FUENTES-EGGER.md](FUENTES-EGGER.md).
- Inventario inicial: [inventario-urls-originales.json](inventario-urls-originales.json).
- Comprobación HTTP inicial de 30 URLs: [estado-urls-originales.json](estado-urls-originales.json).
- Contenido original preservado: [catalogo-original.js.txt](catalogo-original.js.txt).

## Verificación realizada

- `npm run build`: compilación correcta. Queda un aviso de Browserslist por caniuse-lite desactualizado; no se actualizó el árbol de dependencias fuera del alcance.
- `CI=true npm test -- --watchAll=false --runInBand`: 4 pruebas aprobadas. Cubren Matt/Gloss y su fuente argentina, restricción de uso de Matt, conservación de compactos, categoría no EGGER, cierre de modales y consulta de pisos/construcción.
- `git diff --check`: sin errores de espacios.
- Se verificó la firma PNG y existencia de las 16 imágenes locales y el uso exclusivo de cdn.egger.com en las imágenes nuevas. Se comprobaron las 7 imágenes de cards EGGER cargadas en el navegador.
- Revisión visual de grilla, Eurodekor y PerfectSense, MDF en móvil 390 × 844, laminados, cantos, revestimientos, molduras, área de especificación y texto institucional. Se probó también el ancho de escritorio 1440 × 1000. Se restauró el tamaño de navegador original.
- Consola tras recarga final: sin errores ni advertencias JavaScript registrados. Los fallos de imágenes remotas heredadas se manejan con aviso textual; sus URLs siguen documentadas. Esto no implica que todos los recursos de terceros se hayan reparado.
- Se corrigieron advertencias React existentes (keys, atributo iframe, prop accidental), IDs de acordeón repetidos y altura/scroll para las fichas reales. Los títulos de secciones ahora tienen margen al navegar debajo del menú fijo.
- Los placeholders de texto fueron reemplazados por información verificada, descripción de actividad aportada por el usuario o estado real de validación pendiente. No se inventaron fichas de otros proveedores.
- El video existente muestra “Maderas Misiones Egger Haus” del canal Maderas Misiones S.A.; se corrigió el título erróneo del iframe.

## Pendientes del dueño

1. Confirmar las familias y variantes que realmente vende: Eurodekor, PerfectSense Matt/Gloss, MDF crudo/Light/delgado/revestido, Eurolight, laminados XL/Matt, cantos ABS/PerfectSense, molduras y revestimientos. Las fichas actuales son referencias del fabricante, con validación comercial explícita.
2. Identificar “Eurodekor compactos” y la antigua referencia “PerfectSense Topmatt”; confirmar códigos, nombres, soportes y acabados de diseños antes de volver a publicar muestras individuales.
3. Confirmar proveedores, marcas y variantes de listonados, enchapados, terciados, Chapadur, herrajes, adhesivos, fenólicos, OSB, madera de obra, techos, pisos y decks.
4. Confirmar formatos, espesores, stock, precios y plazos. Ninguno se dedujo de EGGER ni se agregó como oferta local.
5. Proporcionar o validar fotografías autorizadas para las categorías no EGGER. Siguen sin reemplazo oficial adecuado las fotos de madera listonada, adhesivos, fenólicos, madera de obra y techos. Validar también las fotos heredadas que todavía cargan, portada y productos aplicados.
6. Confirmar vigencia de video, historia y servicios, dos sucursales, teléfonos, WhatsApp, redes y optimizador. Confirmar catálogos actuales de herrajes: los anteriores devuelven 404.
7. Definir destino e integración del formulario. El botón anterior simulaba un envío; ahora queda deshabilitado con un aviso y referencia a los canales publicados. No se envió ningún mensaje de prueba.

## Cómo retomar localmente

Desde `Maderas_Misiones`, ejecutar `BROWSER=none PORT=3010 npm start` si el servidor ya no estuviera activo. Para validar: `npm run build` y `CI=true npm test -- --watchAll=false --runInBand`.

## Archivos modificados y agregados

- `docs/AUDITORIA-CONTENIDO.md`
- `docs/ENTREGA-LOCAL.md`
- `docs/FUENTES-EGGER.md`
- `docs/catalogo-original.js.txt`
- `docs/estado-urls-originales.json`
- `docs/inventario-urls-originales.json`
- `public/images/egger/absedging.png`
- `public/images/egger/absedgingps.png`
- `public/images/egger/decorativeboardse1p2.png`
- `public/images/egger/decorativelightweight.png`
- `public/images/egger/decorativemdfeucalight.png`
- `public/images/egger/laminatepsmatt.png`
- `public/images/egger/laminatexl.png`
- `public/images/egger/mdflighte1euca.png`
- `public/images/egger/mdfste1pine.png`
- `public/images/egger/paintedmoulding.png`
- `public/images/egger/perfectsensepgmdf.png`
- `public/images/egger/perfectsensepmmdf.png`
- `public/images/egger/profiledwallpanels.png`
- `public/images/egger/thinmdfe1raweuca.png`
- `public/images/egger/wallsystem.png`
- `public/images/egger/wallsystem2.png`
- `public/index.html`
- `public/manifest.json`
- `src/App.test.js`
- `src/Components/About/index.jsx`
- `src/Components/AccordionDetail/Accordion/index.jsx`
- `src/Components/AccordionDetail/AccordionDetail.module.scss`
- `src/Components/AccordionDetail/index.jsx`
- `src/Components/Construction/Topics/index.jsx`
- `src/Components/Contact/Forms/FormNormal/index.jsx`
- `src/Components/Detail/DetailModal.module.scss`
- `src/Components/Detail/index.jsx`
- `src/Components/Especification/index.jsx`
- `src/Components/Floors/Topics/index.jsx`
- `src/Components/Footer/index.jsx`
- `src/Components/Mapas/index.jsx`
- `src/Components/Navbar/MobileMenu/index.jsx`
- `src/Components/Navbar/index.jsx`
- `src/Components/Producs/Topics/index.jsx`
- `src/Components/Producs/Topics/info.js`
- `src/Components/Producs/index.jsx`
- `src/Components/ProductContent/index.jsx`
- `src/data/egger-sources.json`
- `src/data/furniture-cards.json`
- `src/index.css`
- `src/shared/Carousel/index.jsx`
- `src/shared/ProductImage/index.jsx`
