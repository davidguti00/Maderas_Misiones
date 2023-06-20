const cards = [
	{
		image: 'https://maderasamiano.com.ar/public/uploads/secciones/145/archivos/pfs.jpg', //Imagen principal
		topic: 'Tablero Melanizado Eurodekor', //Titulo principal
		accordeon: true, // Debería tener acordeones? true o false
		accordeonItems: [ // Si debería tener acordeones mapea los acordeones :)
			{
				image: 'https://maderasamiano.com.ar/public/uploads/secciones/145/archivos/pst.jpg', //Imagen del acordeon
				title: 'EURODEKOR PERFECTSENSE', //Titulo de acordeon
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus erat ut eleifend sollicitudin. Sed quis mattis neque. Praesent dignissim imperdiet sapien, vitae euismod leo. Etiam volutpat tincidunt lectus sed mollis. Maecenas eu varius est, et euismod felis. Curabitur ultricies commodo augue, sed euismod mauris varius vitae. Ut metus est, accumsan varius scelerisque vitae, mattis a eros. Donec consectetur fermentum dictum. Vestibulum lobortis et risus quis ultricies. Nulla id volutpat nisi, quis rhoncus leo. Phasellus vitae quam eget enim elementum dictum vel eget nulla. Donec at vulputate lectus.', //Descripcion de acordeon
				options: [ // Seccion
					{
						title: 'PerfectSense Gloss', //Titulo de seccion
						items: [ // Items de la seccion
							{
								info: 'U999 PG/ST9 - Negro', //Nombre de la item,
								image: 'https://maderasamiano.com.ar/public/uploads/secciones/145/archivos/U999.jpg', //Imagen del color
							},
							{
								info: 'U999 PG/ST9 - Gris', //Nombre de la item,
								image: 'https://maderasamiano.com.ar/public/uploads/secciones/145/archivos/u732.jpg', //Imagen del color
							}
						]
					}
				]
			},
			{
				image: 'https://maderasamiano.com.ar/public/uploads/secciones/145/archivos/comp.jpg', //Imagen del acordeon
				title: 'EURODEKOR COMPACTOS', //Titulo de acordeon
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus erat ut eleifend sollicitudin. Sed quis mattis neque. Praesent dignissim imperdiet sapien, vitae euismod leo. Etiam volutpat tincidunt lectus sed mollis. Maecenas eu varius est, et euismod felis. Curabitur ultricies commodo augue, sed euismod mauris varius vitae. Ut metus est, accumsan varius scelerisque vitae, mattis a eros. Donec consectetur fermentum dictum. Vestibulum lobortis et risus quis ultricies. Nulla id volutpat nisi, quis rhoncus leo. Phasellus vitae quam eget enim elementum dictum vel eget nulla. Donec at vulputate lectus.', //Descripcion de acordeon
				options: [ // Secciones
					{
						title: 'PerfectSense Topmatt', //Titulo de seccion
						items: [ // Items de la seccion
							{
								info: 'U999 PG/ST9 - Negro', //Nombre del item,
								image: 'https://maderasamiano.com.ar/public/uploads/secciones/145/archivos/U999.jpg', //Imagen del color
							}
						]
					}
				]
			},
			{
				image: 'https://maderasamiano.com.ar/public/uploads/secciones/145/archivos/euro.jpg', //Imagen del acordeon
				title: 'EURODEKOR DECORATIVOS', //Titulo de acordeon
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus erat ut eleifend sollicitudin. Sed quis mattis neque. Praesent dignissim imperdiet sapien, vitae euismod leo. Etiam volutpat tincidunt lectus sed mollis. Maecenas eu varius est, et euismod felis. Curabitur ultricies commodo augue, sed euismod mauris varius vitae. Ut metus est, accumsan varius scelerisque vitae, mattis a eros. Donec consectetur fermentum dictum. Vestibulum lobortis et risus quis ultricies. Nulla id volutpat nisi, quis rhoncus leo. Phasellus vitae quam eget enim elementum dictum vel eget nulla. Donec at vulputate lectus.', //Descripcion de acordeon
				options: [ // Secciones
					{
						title: 'PerfectSense Topmatt', //Titlo de seccion
						items: [ // Items de la seccion
							{
								info: 'U999 PG/ST9 - Negro', //Nombre del item,
								image: 'https://maderasamiano.com.ar/public/uploads/secciones/145/archivos/U999.jpg', //Imagen del color
							},
							{
								info: 'U999 PG/ST9 - Gris', //Nombre del item,
								image: 'https://maderasamiano.com.ar/public/uploads/secciones/145/archivos/u732.jpg', //Imagen del color
							}
						]
					}
				]
			},
			{
				image: 'https://maderasamiano.com.ar/public/uploads/secciones/145/archivos/alv.jpg', //Imagen del acordeon
				title: 'EURODEKOR EUROLIGHT ALVEOLAR', //Titulo de acordeon
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus erat ut eleifend sollicitudin. Sed quis mattis neque. Praesent dignissim imperdiet sapien, vitae euismod leo. Etiam volutpat tincidunt lectus sed mollis. Maecenas eu varius est, et euismod felis. Curabitur ultricies commodo augue, sed euismod mauris varius vitae. Ut metus est, accumsan varius scelerisque vitae, mattis a eros. Donec consectetur fermentum dictum. Vestibulum lobortis et risus quis ultricies. Nulla id volutpat nisi, quis rhoncus leo. Phasellus vitae quam eget enim elementum dictum vel eget nulla. Donec at vulputate lectus.', //Descripcion de acordeon
				options: [ // Secciones
					{
						title: 'PerfectSense Topmatt', //Titulo de seccion
						items: [ // Items de la seccion
							{
								info: 'H3403 PG/ST9 - Alerce blanco', //Nombre de la item,
								image: 'https://maderasamiano.com.ar/public/uploads/secciones/145/archivos/h3403.jpg', //Imagen del color
							},
							{
								info: 'H1181 PG/ST9 - Gris', //Nombre de la item,
								image: 'https://maderasamiano.com.ar/public/uploads/secciones/145/archivos/h1181.jpg', //Imagen del color
							}
						]
					}
				]
			}
		]
	},
	{
		image: 'https://pathwoodsmart.com/wp-content/uploads/2021/12/tableros-MDF.jpg',
		topic: 'Tablero MDF'
	},
	{
		image: 'https://edimca.com.ec/assets/images/products/madera/venta-madera-alistonada-edimca-guayaquil.jpg',
		topic: 'Tablero Madera Listonada',
		carrousel: true, //Debería tener un carrusel de imagenes? true o false,
		images: [ //Imagenes para corrusel
			'https://edimca.com.ec/assets/images/products/madera/venta-madera-alistonada-edimca-guayaquil.jpg',
			'https://edimca.com.ec/assets/images/products/madera/venta-madera-alistonada-edimca-guayaquil.jpg'
		],
	},
	{
		image: 'https://maderamen.com.ar/dyf-muebles/wp-content/uploads/sites/4/2018/03/paneles.jpg',
		topic: 'Tableros Enchapados Natural',
		carrousel: true, //Debería tener un carrusel de imagenes? true o false,
		images: [ //Imagenes para corrusel
			'https://maderamen.com.ar/dyf-muebles/wp-content/uploads/sites/4/2018/03/paneles.jpg',
			'https://maderamen.com.ar/dyf-muebles/wp-content/uploads/sites/4/2018/03/paneles.jpg'
		],
	},
	{
		image: 'https://www.madereralobos.com.ar/images/productos/759.jpg',
		topic: 'Terciados'
	},
	{
		image: 'https://i0.wp.com/icasasecologicas.com/wp-content/uploads/2018/01/tablero-laminado.jpg',
		topic: 'Laminados'
	},
	{
		image: 'https://elgalponmaderas.com.ar/wp-content/uploads/2018/11/1.5.1-IMG-Chapadur-1.jpg',
		topic: 'Chapadur'
	},
	{
		image: 'https://http2.mlstatic.com/D_602865-MLA42063990300_062020-O.jpg',
		topic: 'Herrajes',
		multipleButtons: [ // Corresponde a botones extra que se necesiten mostrar. Si tiene items se renderizan, si no, no
			{ link: 'https://grupoeurosa.com/2023/Grupo%20Euro%20-%20Arg%20Catalogo.pdf', title: 'Catálogo Grupo Euro'},
			{ link: 'http://www.hafeleargentina.com.ar/Actualizac_catalogo/2020/catalogo_muebles.pdf', title: 'Catálogo Häfele'}
		],
	},
	{
		image: 'https://edimca.com.ec/assets/images/products/adhesivos/venta-de-adhesivos-para-madera-en-edimca.jpg',
		topic: 'Adhesivos'
	},
	{
		image: 'https://cantisa.es/wp-content/uploads/2020/03/rNH5_2923-W.jpg',
		topic: 'Cantos'
	},
	{
		image: 'https://www.vierabinet.com/v1/wp-content/uploads/2019/05/revestimientos-madera-pared-interiores-entablonado-vierabinet-01.jpg', 
		topic: 'Revestimiento',
		carrousel: true, //Debería tener un carrusel de imagenes? true o false,
		images: [ //Imagenes para corrusel
			'https://www.vierabinet.com/v1/wp-content/uploads/2019/05/revestimientos-madera-pared-interiores-entablonado-vierabinet-01.jpg',
			'https://www.vierabinet.com/v1/wp-content/uploads/2019/05/revestimientos-madera-pared-interiores-entablonado-vierabinet-01.jpg'
		],
	},
	{
		image: 'https://elgalponmaderas.com.ar/wp-content/uploads/2018/11/IMG-Molduras-1.jpg',
		topic: 'Molduras',
		carrousel: true, //Debería tener un carrusel de imagenes? true o false,
		images: [ //Imagenes para corrusel
			'https://elgalponmaderas.com.ar/wp-content/uploads/2018/11/IMG-Molduras-1.jpg',
			'https://elgalponmaderas.com.ar/wp-content/uploads/2018/11/IMG-Molduras-1.jpg'
		],
		multipleButtons: [ // Corresponde a botones extra que se necesiten mostrar. Si tiene items se renderizan, si no, no
			{link: 'https://aglomareggerhaus.com.ar/wp-content/uploads/2023/04/Molduras-Egger.pdf', title: 'Catálogo Egger'}
		]
	},
]

export default cards;