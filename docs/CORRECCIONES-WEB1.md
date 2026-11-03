# Correcciones WEB1 — 02/11/2026

Referencia principal: WEB1.pdf, cuatro páginas, entregado por el cliente. Rama: correcciones/web1-tableros. Sin commit, push ni deploy.

## Auditoría y aplicación

| Pedido | Estado anterior | Cambio |
|---|---|---|
| Imagen de familia (p. 1) | Foto de aglomerado individual | Imagen oficial de tableros apilados, coincidente con el PDF |
| Nombres (p. 1) | Nombres técnicos abreviados | Eurodekor Aglomerado Revestido; Eurodekor MDF Revestido; Eurolight Tablero Alveolar Revestido |
| Compactos (p. 1) | Dentro de Tableros decorativos | Movido, sin duplicar ni cambiar su contenido, al acordeón de Laminados |
| Collage (pp. 1–2) | Una imagen de producto al abrir | Tres aplicaciones de la galería oficial; la primera es la señalada en el PDF |
| Textos (pp. 2–4) | Descripciones resumidas | Texto del cliente, con bloques de Aplicaciones, Ventajas y Características según cada ficha |
| Fotos individuales | Aglomerado E1 P2, MDF y alveolar | Nueva imagen de E1E05 TSCA P2; MDF y alveolar se conservan porque sus URLs oficiales coinciden |

La card mantiene la imagen de familia. El modal abre con el collage; al pulsar una familia muestra su imagen individual. “Ver aplicaciones” permite volver al collage. En móvil el collage queda encima de los acordeones; en escritorio ocupa la columna de imagen existente. No cambian rutas, anclas ni las demás categorías.

## Fuentes e imágenes

- Familia: https://www.egger.com/es/mobiliario-e-interiorismo/gama/?country=AR
- Galería: https://www.egger.com/es/mobiliario-e-interiorismo/productos/decorativeboards?country=AR
- Aglomerado: https://www.egger.com/es/mobiliario-e-interiorismo/productos/decorativeboardse05p2?country=AR
- MDF: https://www.egger.com/es/mobiliario-e-interiorismo/productos/decorativemdfeucalight?country=AR
- Alveolar: https://www.egger.com/es/mobiliario-e-interiorismo/productos/decorativelightweight?country=AR

| Archivo en public/images/egger | URL oficial descargada |
|---|---|
| tableros-decorativos-familia.webp | https://cdn.egger.com/img/pim/8862099177502/8862099210270/AR_4_3.webp?width=768&srcext=png |
| decorativeboardse05p2.webp | https://cdn.egger.com/img/pim/8854301573150/8854590259230/AR_4_3.webp?width=1024&srcext=png |
| decorativos-aplicacion-1.webp | https://cdn.egger.com/img/pim/8855359291422/8861406101534/AR_16_9.webp?width=1024&srcext=png |
| decorativos-aplicacion-2.webp | https://cdn.egger.com/img/pim/8861405839390/8861405872158/AR_16_9.webp?width=1024&srcext=png |
| decorativos-aplicacion-3.webp | https://cdn.egger.com/img/pim/8861405904926/8861604741150/AR_16_9.webp?width=1024&srcext=png |

WebP servidos por el CDN oficial, sin recomposición ni generación de imágenes. El collage se compone en CSS. Las imágenes de MDF y Eurolight existentes corresponden respectivamente a https://cdn.egger.com/img/pim/8854303211550/8854591176734/original.png y https://cdn.egger.com/img/pim/8854304260126/8854591307806/original.png.

## Discrepancias y decisiones

- Eurolight: el cliente indica 60 % menos peso. El folleto enlazado por la página argentina da ejemplos de 47 % (19 mm / capas de 4 mm) y 51 % (38 mm / capas de 8 mm). Se informó antes de sustituir el dato y el usuario eligió conservar el 60 % del cliente, dejando la discrepancia documentada para revisión. El dato público procede del cliente, no se considera corroborado por el folleto.
- Folleto: https://binary.egger.link/pis/5ee51ca8-9c6c-442d-aeb1-ae7cf6401f41/BRTableroAlveolarES (pp. 4, 6 y 10). Confirma cartón reciclado y capas de 8 mm para la gama estándar revestida, aunque existen otras construcciones.
- La mención de LED/cables “en cualquier sentido” y “coste accesible” se conserva del cliente; no aparece corroborada en el texto de la ficha argentina consultada. No se añadieron garantías ni precios locales.
- MDF: la fuente se titula MDF Light E1; el cliente solicita el nombre Eurodekor MDF Revestido. Se respeta su denominación y se mantiene el enlace a la variante Light E1 indicada.
- Las diferencias menores de redacción en ventajas de aglomerado y Eurolight se resuelven priorizando el PDF. Se corrigen acentos, errores de extracción, “deacuerdo” y el separador decimal.
- Compactos sigue sin descripción ni fabricante confirmado; sólo cambia de ubicación. El pendiente comercial permanece en PENDIENTES-PROVEEDORES.md.

## Archivos

src/data/furniture-cards.json; src/data/egger-sources.json; src/Components/ProductContent/index.jsx; src/Components/AccordionDetail/index.jsx; src/Components/AccordionDetail/AccordionDetail.module.scss; src/App.test.js; docs/PENDIENTES-PROVEEDORES.md; este documento; las cinco imágenes listadas.

## Validación

- Build correcto y 8 tests aprobados en 2 suites. Aviso heredado de Browserslist/caniuse-lite desactualizado.
- Revisión visual a 1440 × 1000 y 390 × 844: collage, fichas individuales, lectura de bloques, acordeones y Compactos dentro de Laminados.
- Imágenes del collage y de las fichas cargadas; sin desbordamiento horizontal móvil ni errores de consola registrados.
- Comparación automática contra HEAD: las demás categorías mantienen exactamente sus datos; las dos familias originales de Laminados están intactas; Compactos conserva el objeto original.
- git diff --check sin errores.
