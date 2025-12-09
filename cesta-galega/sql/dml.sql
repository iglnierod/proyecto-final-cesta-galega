# --- EMPRESAS ---
INSERT INTO public."Business"
("name", "email", "description", "businessType", "phoneNumber",
 "address", "city", "province", "postalCode", "password",
 "iban", "instagram", "facebook", "logo")
VALUES
-- 1. Obradoiro de cerámica
(
    'Obradoiro Camiño da Terra',
    'contacto@caminodaterra.gal',
    'Taller artesanal de cerámica gallega inspirada en los paisajes del Camino de Santiago. Piezas únicas hechas a mano, producción local y sostenible.',
    'Artesanía en cerámica',
    '+34 600 123 456',
    'Rúa das Artesáns 12, baixo',
    'Santiago de Compostela',
    'A Coruña',
    '15703',
    'password123',
    'ES12 2080 0000 1234 5678 9012',
    'https://instagram.com/caminodaterra',
    NULL,
    'https://example.com/logos/camino-da-terra.png'
),

-- 2. Cosmética natural
(
    'Brétema Cosmética Natural',
    'hola@bretemacosmetica.gal',
    'Pequeña empresa familiar que elabora jabones y cosmética natural con ingredientes ecológicos gallegos como aceite de oliva, castaña y flores silvestres.',
    'Cosmética artesanal',
    '+34 601 234 567',
    'Avda. do Mar 45, local 3',
    'A Coruña',
    'A Coruña',
    '15008',
    'password123',
    'ES21 2080 0000 9876 5432 1098',
    'https://instagram.com/bretemacosmetica',
    'https://facebook.com/bretemacosmetica',
    'https://example.com/logos/bretema.png'
),

-- 3. Alimentación artesanal (queixos e marmeladas)
(
    'Sabores da Fraga',
    'info@saboresdafraga.gal',
    'Queixos artesáns, marmeladas e mel producidos en pequenas explotacións gandeiras e apícolas do interior de Galicia, cun forte compromiso coa economía local.',
    'Alimentación artesanal',
    '+34 602 345 678',
    'Lugar A Fraga 7',
    'Ourense',
    'Ourense',
    '32005',
    'password123',
    'ES56 2080 0000 1111 2222 3333',
    NULL,
    'https://facebook.com/saboresdafraga',
    'https://example.com/logos/sabores-da-fraga.png'
),

-- 4. Téxtil e complementos
(
    'Fíos do Atlántico',
    'contacto@fiosdoatlantico.gal',
    'Marca de roupa e complementos feitos con tecidos orgánicos e motivos inspirados nas rías galegas. Producción en pequenos talleres locais.',
    'Textil y complementos',
    '+34 603 456 789',
    'Rúa do Porto 9',
    'Vigo',
    'Pontevedra',
    '36202',
    'password123',
    'ES78 2080 0000 4444 5555 6666',
    'https://instagram.com/fiosdoatlantico',
    'https://facebook.com/fiosdoatlantico',
    'https://example.com/logos/fios-do-atlantico.png'
),

-- 5. Madeira e decoración
(
    'Bosque de Carballos',
    'ola@bosquedecarballos.gal',
    'Pequeno obradoiro de carpintería artística especializado en pezas de decoración e menaxe do fogar en madeira de carballo galego certificada.',
    'Decoración en madera',
    '+34 604 567 890',
    'Rúa da Carballeira 3',
    'Lugo',
    'Lugo',
    '27002',
    'password123',
    'ES90 2080 0000 7777 8888 9999',
    'https://instagram.com/bosquedecarballos',
    NULL,
    'https://example.com/logos/bosque-de-carballos.png'
);

# --- PRODUCTOS ---
INSERT INTO public."Product"
  ("name", "description", "image", "enabled", "price",
   "discounted", "discount", "deleted", "businessId")
VALUES
(
  'Taza de cerámica "Camiño"',
  'Taza de cerámica hecha a mano con esmalte azul inspirado en el Atlántico. Apta para lavavajillas y microondas.',
  '',
  TRUE,
  14.90,
  FALSE,
  0.0,
  FALSE,
  (SELECT id FROM public."Business" WHERE email = 'contacto@caminodaterra.gal')
),
(
  'Cuenco tradicional para caldo galego',
  'Cuenco de cerámica artesanal diseñado para servir caldo gallego, con acabado rústico y borde reforzado.',
  '',
  TRUE,
  19.50,
  TRUE,
  2.00,
  FALSE,
  (SELECT id FROM public."Business" WHERE email = 'contacto@caminodaterra.gal')
),
(
  'Xogo de pratos "Atlántico" (4 unidades)',
  'Set de 4 platos llanos de cerámica con motivos marinos pintados a mano. Ideal para mesas especiales.',
  '',
  TRUE,
  69.90,
  FALSE,
  0.0,
  FALSE,
  (SELECT id FROM public."Business" WHERE email = 'contacto@caminodaterra.gal')
),
(
  'Cunca para café "Camiño de Santiago"',
  'Pequeña cunca de café con iconografía del Camiño de Santiago grabada en relieve.',
  '',
  TRUE,
  11.50,
  TRUE,
  1.50,
  FALSE,
  (SELECT id FROM public."Business" WHERE email = 'contacto@caminodaterra.gal')
),
(
  'Xarra decorativa "Costa da Morte"',
  'Jarra de cerámica de gran formato pensada para flores secas, con esmalte craquelado en tonos verdes e azuis.',
  '',
  TRUE,
  54.00,
  FALSE,
  0.0,
  FALSE,
  (SELECT id FROM public."Business" WHERE email = 'contacto@caminodaterra.gal')
),
(
  'Bandexa para tapas',
  'Bandeja rectangular de cerámica con tres compartimentos para servir tapas o petiscos.',
  '',
  TRUE,
  27.90,
  TRUE,
  3.00,
  FALSE,
  (SELECT id FROM public."Business" WHERE email = 'contacto@caminodaterra.gal')
);

INSERT INTO public."Product"
("name", "description", "image", "enabled", "price",
 "discounted", "discount", "deleted", "businessId")
VALUES
    (
        'Xabón de castaña e mel',
        'Xabón artesanal elaborado con aceite de oliva, extracto de castaña galega e mel local. Ideal para peles secas.',
        '',
        TRUE,
        6.90,
        FALSE,
        0.0,
        FALSE,
        (SELECT id FROM public."Business" WHERE email = 'hola@bretemacosmetica.gal')
    ),
    (
        'Xabón de lavanda relax',
        'Pastilla de xabón con aceite esencial de lavanda, pensada para rutinas de noite e baños relaxantes.',
        '',
        TRUE,
        6.50,
        TRUE,
        1.00,
        FALSE,
        (SELECT id FROM public."Business" WHERE email = 'hola@bretemacosmetica.gal')
    ),
    (
        'Crema hidratante facial "Brétema"',
        'Crema lixeira para uso diario con aloe vera, aceite de améndoas doces e hidrolato de camomila.',
        '',
        TRUE,
        21.90,
        FALSE,
        0.0,
        FALSE,
        (SELECT id FROM public."Business" WHERE email = 'hola@bretemacosmetica.gal')
    ),
    (
        'Bálsamo labial de mel e limón',
        'Bálsamo labial nutritivo con cera de abella, mel e un lixeiro toque cítrico de limón.',
        '',
        TRUE,
        4.90,
        TRUE,
        0.50,
        FALSE,
        (SELECT id FROM public."Business" WHERE email = 'hola@bretemacosmetica.gal')
    ),
    (
        'Champú sólido de ortiga',
        'Champú sólido con extracto de ortiga e aceite de ricino, formulado para coidar o coiro cabeludo e fortalecer o cabelo.',
        '',
        TRUE,
        9.80,
        FALSE,
        0.0,
        FALSE,
        (SELECT id FROM public."Business" WHERE email = 'hola@bretemacosmetica.gal')
    ),
    (
        'Pack regalo "Brétema no mar"',
        'Caixa regalo que inclúe dous xabóns artesáns, un bálsamo labial e unha mostra de crema hidratante.',
        '',
        TRUE,
        29.90,
        TRUE,
        5.00,
        FALSE,
        (SELECT id FROM public."Business" WHERE email = 'hola@bretemacosmetica.gal')
    );

