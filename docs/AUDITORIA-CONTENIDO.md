# Auditoría previa a la implementación — 18/09/2026

Alcance: revisión de todos los archivos fuente, estilos, activos locales, metadatos, navegación y dependencias del proyecto React existente. Sin cambios de código al cerrar esta auditoría. Repositorio inicialmente limpio. No hay AGENTS.md aplicable en el proyecto. No se consultaron terceros para redactar información de productos: sus URLs existentes sólo se comprobaron por HTTP.

## Inventario y clasificación inicial

V = válido y reutilizable; A = necesita actualización; F = falta contenido; C = requiere verificar comercialización. Las etiquetas pueden coexistir.

| Sección / categoría original | Estado | Hallazgo / acción prevista |
|---|---|---|
| Diseño global, navegación, cards y modales | V/A | Conservar arquitectura, colores, tipografía y estructura. Corregir únicamente errores que impidan leer contenido o produzcan advertencias. |
| Portada / Madera que inspira confianza | V/C | Texto e imágenes locales reutilizables; origen y derechos de 7 fotos sin documentar. No atribuirlas a EGGER ni a obras propias. |
| Tablero Melanizado Eurodekor | A/F | Error ortográfico; agrupa indebidamente PerfectSense, compactos, decorativos y alveolares. Cuatro descripciones Lorem ipsum. |
| EURODEKOR PERFECTSENSE / Gloss | A/C | Separar tablero MDF laqueado de melamina; verificar Matt y Gloss actuales en Argentina. |
| EURODEKOR COMPACTOS / Topmatt | A/C | Denominación ambigua y muestras copiadas; conservar entrada pendiente, sin asumir equivalencia con laminado compacto o Topmatt actual. |
| EURODEKOR DECORATIVOS | A/F | Sustituir Lorem ipsum por ficha oficial de tablero revestido; no confundir con PerfectSense Topmatt. |
| EURODEKOR EUROLIGHT ALVEOLAR | A/C | Documentar construcción alveolar; validar comercialización y diseños. |
| Tablero MDF | F/C | Sin descripción propia; identificar crudo, Light, delgado y revestido sin atribuir stock. |
| Tablero Madera Listonada | F/C | Foto remota 404 y carrusel duplicado; falta proveedor, especie, medidas y foto propia autorizada. |
| Tableros Enchapados Natural | F/C | Sin descripción; fotos duplicadas de tercero. Validar especies y soportes. |
| Terciados | F/C | Sin ficha, grado o proveedor. No eliminar. |
| Laminados | A/F/C | Imagen 404; diferenciar revestimiento laminado de tablero melaminizado, XL y PerfectSense Matt. |
| Chapadur | F/C | Sin ficha ni fabricante verificado. No equiparar a MDF. |
| Herrajes | A/F/C | Imagen Mercado Libre heredada. Catálogos Grupo Euro 2023 y Häfele 2020 devuelven 404. Mantener categoría. |
| Adhesivos | F/C | Imagen 404; falta marca, compatibilidad y ficha. |
| Cantos | A/F/C | Imagen de Cantisa; contrastar ABS y PerfectSense ABS EGGER. No asumir que sólo se vende EGGER. |
| Revestimiento | A/F/C | Foto de entablonado de tercero repetida; EGGER AR ofrece MDF ranurado y prepintado. No equiparar automáticamente al producto local. |
| Molduras | A/F/C | Foto de tercero repetida y catálogo alojado en dominio que no resuelve; verificar MDF Ultralight prepintado EGGER. |
| Construcción: Fenolicos, Tableros OSB, Maderas para obra, Techos | F/C | Todos muestran Lorem ipsum del modal. Fenólicos HTTP 503, madera de obra 404, techo DNS no resuelve; OSB tiene imagen pero no marca/grado. No convertirlos en productos EGGER por coincidencia de nombre. |
| Pisos: Pisos Flotantes, Decks Madera, Decks WPC | F/C | Todos muestran Lorem ipsum; fotos de terceros, una de Mercado Libre. EGGER presenta Pisos 25+, no implica que MM comercialice sus líneas. Decks no se eliminan. |
| Productos aplicados | V/C | Reutiliza las 7 fotos de portada, comentario “Cambiar”. Falta procedencia y relación con proyectos reales. |
| Área de especificación (#about) | A/F | Título sin acentos, encabezado y párrafo Lorem ipsum. Se puede reemplazar con orientación sobre selección basada en EGGER sin prometer servicios propios. |
| Sobre nosotros (#especification) | A/F/C | Lorem ipsum4 y texto corrupto; reemplazar sólo por actividad comercial proporcionada por el dueño. Video de YouTube sin relación empresarial acreditada: validar. |
| Contacto | V/A/C | Campos presentes; botón sólo dispara alert(Enviado), no envía; opción Pisos tiene valor vacío. Requiere definir canal real de recepción. |
| Mapas y teléfonos | V/C | Av. Juan B. Justo 5808 y Av. Pedro Luro 3435; dos teléfonos, WhatsApp acortado y redes existentes. Validar vigencia con el dueño. |
| Footer | A | “Sobre nosotros” apunta al área de especificación. |
| Metadatos, manifest, prueba App.test | A | Descripción y manifest de Create React App, idioma inglés, logos React y test “learn react”. |

## Contraste EGGER Argentina

Fuente principal: https://www.egger.com/es/?country=AR
Colección vigente: https://www.egger.com/es/mobiliario-e-interiorismo/coleccion-decorativa/?country=AR

La portada argentina presenta Colección Decorativa 26+ y Colección de Pisos 25+. La estructura consultada distingue tableros revestidos decorativos, tableros laqueados PerfectSense, tableros crudos, laminados, cantos, revestimientos y molduras. No se traslada la oferta ni las condiciones de stock europeas al comercio local. Los enlaces internos pueden omitir country=AR: se agrega explícitamente al consultar cada ficha.

Los antiguos U999 PG/ST9 “Gris”, H1181 PG/ST9 “Gris” y H3403 PG/ST9 “Alerce blanco”, así como las repeticiones de Topmatt dentro de otras familias, no constituyen una carta de diseños verificable. Guardar el inventario original antes de sustituir esas muestras por descripciones reales. Compactos permanece como pendiente. PerfectSense pasa a una card propia manteniendo modal con familias. Las categorías de otros proveedores se conservan.

## Riesgos técnicos observados

Modal genérico con texto fijo; altura sin scroll apropiado para contenido largo. Acordeones con IDs duplicados y options obligatorio. Claves React ausentes en navegación y carrusel; atributos iframe en minúsculas y prop accidental mate3030mate3030. No hay catálogo administrable ni backend. README y prueba automatizada son los iniciales de CRA. Se evitará migrar dependencias o arquitectura en esta tarea.

## Pendientes del dueño

1. Confirmar qué familias EGGER vende MM, especialmente PerfectSense Matt/Gloss, MDF crudo/Light/delgado/revestido, Eurolight, laminados XL/Matt, ABS/ABS PerfectSense, molduras y revestimientos.
2. Precisar qué significa “Eurodekor compactos” y si continúa “PerfectSense Topmatt”; confirmar catálogo de códigos, texturas y soportes. No se publican como equivalencias.
3. Confirmar fabricantes y productos de listonados, enchapados, terciados, Chapadur, herrajes, adhesivos, construcción, pisos y decks. Aportar fichas y fotos autorizadas para lo no EGGER.
4. Confirmar formatos, espesores, stock, plazos y colores efectivamente comercializados; no se agregan valores sin confirmación.
5. Verificar derechos/procedencia de las fotos heredadas, carrusel de obras y video institucional; reemplazarlos sólo con material apropiado y autorizado.
6. Validar historia, servicios de especificación/corte, datos de contacto, sucursales, redes, WhatsApp y optimizador.
7. Definir destino y mecanismo del formulario de contacto; hoy no tiene envío real.

El registro de URLs iniciales y su comprobación se adjunta por separado. Un HTTP 200 no demuestra derechos de uso ni vigencia comercial; 503/DNS son fallos observados, no prueba de baja definitiva.
