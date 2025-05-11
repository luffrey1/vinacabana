// Traducciones específicas para la página de reservas
const reservasTranslations = {
  // Español
  'es': {
    // Títulos y subtítulos
    'booking_title': 'Nuestros Alojamientos',
    'booking_subtitle': 'Cabañas ecológicas de lujo para una experiencia inolvidable entre viñedos',
    'availability_title': 'Comprueba disponibilidad',
    'special_requests_title': 'Peticiones especiales',
    'payment_title': 'Información de pago',
    'summary_title': 'Resumen de tu reserva',
    
    // Formulario de reserva
    'check_in': 'Fecha de llegada',
    'check_out': 'Fecha de salida',
    'adults': 'Adultos',
    'children': 'Niños',
    'select_cabin': 'Selecciona tu cabaña',
    'first_name': 'Nombre',
    'last_name': 'Apellidos',
    'email': 'Correo electrónico',
    'phone': 'Teléfono',
    'address': 'Dirección',
    'city': 'Ciudad',
    'country': 'País',
    'postal_code': 'Código postal',
    'special_requests': 'Peticiones especiales (opcional)',
    'allergies': '¿Tienes alguna alergia alimentaria?',
    'arrival_time': 'Hora estimada de llegada',
    'card_number': 'Número de tarjeta',
    'card_holder': 'Titular de la tarjeta',
    'expiration_date': 'Fecha de caducidad',
    'cvv': 'CVV',
    
    // Opciones de cabañas
    'cabin_premium': 'Cabaña Premium',
    'cabin_premium_desc': 'Cabaña de lujo con vistas panorámicas al viñedo, terraza privada y jacuzzi exterior.',
    'cabin_family': 'Cabaña Familiar',
    'cabin_family_desc': 'Espaciosa cabaña para familias con dos habitaciones, cocina completa y zona exterior privada.',
    'cabin_romantic': 'Suite Entre Viñas',
    'cabin_romantic_desc': 'Suite romántica con cama king size, bañera de hidromasaje y terraza con vistas al atardecer.',
    'cabin_eco': 'Cabaña Eco',
    'cabin_eco_desc': 'Cabaña sostenible y ecológica, integrada perfectamente en el entorno natural.',
    
    // Extras y complementos
    'extras_title': 'Añade experiencias a tu estancia',
    'wine_tasting': 'Cata de vinos premium',
    'wine_tasting_desc': 'Cata privada de 5 vinos premium de la Ribera del Duero con nuestro sumiller.',
    'dinner_pairing': 'Cena maridaje',
    'dinner_pairing_desc': 'Cena gourmet de 5 platos con maridaje de vinos en tu cabaña.',
    'vineyard_tour': 'Tour privado por el viñedo',
    'vineyard_tour_desc': 'Recorrido exclusivo por nuestros viñedos con explicación del proceso de elaboración del vino.',
    'breakfast_basket': 'Cesta de desayuno gourmet',
    'breakfast_basket_desc': 'Desayuno con productos locales, pan recién horneado y zumos naturales.',
    'picnic_vineyards': 'Picnic entre viñedos',
    'picnic_vineyards_desc': 'Cesta de picnic gourmet para disfrutar en un lugar privilegiado entre viñedos.',
    'massage': 'Servicio de masaje',
    'massage_desc': 'Masaje relajante de 60 minutos en la privacidad de tu cabaña.',
    
    // Precios y pagos
    'price_night': 'por noche',
    'total_price': 'Precio total',
    'taxes_included': 'Impuestos incluidos',
    'deposit': 'Depósito (25%)',
    'remaining_payment': 'Pago restante (en el establecimiento)',
    'booking_conditions': 'Condiciones de reserva',
    'cancellation_policy': 'Política de cancelación',
    
    // Botones
    'check_availability': 'Comprobar disponibilidad',
    'book_now': 'Reservar ahora',
    'continue_to_payment': 'Continuar al pago',
    'confirm_booking': 'Confirmar reserva',
    'add_to_booking': 'Añadir a mi reserva',
    
    // Mensajes
    'available': 'Disponible',
    'not_available': 'No disponible',
    'min_stay': 'Estancia mínima de 2 noches',
    'required_field': 'Campo obligatorio',
    'booking_success': 'Tu reserva se ha realizado con éxito',
    'booking_reference': 'Referencia de reserva',
    'confirmation_email': 'Te hemos enviado un email de confirmación',
    'thank_you': 'Gracias por elegir Viña & Cabaña',
    
    // Política de cancelación
    'free_cancellation': 'Cancelación gratuita hasta 7 días antes de la llegada',
    'partial_cancellation': 'Cancelación con 3-6 días de antelación: reembolso del 50%',
    'no_cancellation': 'Sin reembolso para cancelaciones con menos de 3 días de antelación',
    
    // Cabañas
    'cabin1_title': 'Cabaña Tempranillo',
    'cabin1_price': '290€/noche',
    'cabin1_description': 'Cabaña ecológica para 6 personas con terraza privada, vista al viñedo y todas las comodidades.',
    'cabin1_feature1': '6 personas',
    'cabin1_feature2': '120 m²',
    'cabin1_feature3': '3 dormitorios',
    'cabin1_alt': 'Cabaña Tempranillo',
    
    'cabin2_title': 'Cabaña Cabernet Sauvignon',
    'cabin2_price': '240€/noche',
    'cabin2_description': 'Romántica cabaña con jacuzzi exterior, chimenea y vistas panorámicas a los viñedos.',
    'cabin2_feature1': '2 personas',
    'cabin2_feature2': '48 m²',
    'cabin2_feature3': '1 dormitorio',
    'cabin2_alt': 'Cabaña Cabernet Sauvignon',
    
    'cabin3_title': 'Cabaña Garnacha',
    'cabin3_price': '200€/noche',
    'cabin3_description': 'Ideal para familias con niños y mascotas. Amplio espacio exterior y zona de barbacoa.',
    'cabin3_feature1': '4 personas',
    'cabin3_feature2': '90 m²',
    'cabin3_feature3': '2 dormitorios',
    'cabin3_alt': 'Cabaña Garnacha',
    
    // Otras cabañas
    'cabin4_title': 'Cabaña Malbec',
    'cabin4_price': '235€/noche',
    'cabin4_description': 'Acogedora cabaña para dos personas con detalles de diseño y máximo confort.',
    'cabin4_feature1': '2 personas',
    'cabin4_feature2': '48 m²',
    'cabin4_feature3': '1 dormitorio',
    'cabin4_alt': 'Cabaña Malbec',
    
    'cabin5_title': 'Cabaña Garnacha Tinta',
    'cabin5_price': '260€/noche',
    'cabin5_description': 'Espaciosa cabaña familiar con dos dormitorios y amplia zona común.',
    'cabin5_feature1': '4 personas',
    'cabin5_feature2': '54 m²',
    'cabin5_feature3': '2 dormitorios',
    'cabin5_alt': 'Cabaña Garnacha Tinta',
    
    'cabin6_title': 'Cabaña Albillo Mayor',
    'cabin6_price': '255€/noche',
    'cabin6_description': 'Luminosa cabaña tipo GRECIA con vista a los viñedos y decoración contemporánea.',
    'cabin6_feature1': '4 personas',
    'cabin6_feature2': '54 m²',
    'cabin6_feature3': '2 dormitorios',
    'cabin6_alt': 'Cabaña Albillo Mayor',
    
    'cabin7_title': 'Cabaña Mencía',
    'cabin7_price': '285€/noche',
    'cabin7_description': 'Gran cabaña tipo RIVER ideal para grupos y familias con amplio espacio y todas las comodidades.',
    'cabin7_feature1': '6 personas',
    'cabin7_feature2': '120 m²',
    'cabin7_feature3': '3 dormitorios',
    'cabin7_alt': 'Cabaña Mencía',
    
    // Características de las cabañas
    'feature_kitchen': 'Cocina equipada',
    'feature_bathroom': 'Baño completo',
    'feature_wifi': 'Wi-Fi de alta velocidad',
    'feature_breakfast': 'Desayuno incluido',
    'feature_jacuzzi': 'Jacuzzi privado',
    'feature_fireplace': 'Chimenea',
    'feature_welcome_bottle': 'Botella de vino de bienvenida',
    'feature_pets': 'Mascotas bienvenidas',
    'feature_bbq': 'Zona de barbacoa',
    'feature_bikes': 'Bicicletas disponibles',
    
    // Características adicionales de las cabañas
    'feature_king_bed': 'Cama extragrande',
    'feature_rain_shower': 'Baño con ducha efecto lluvia',
    'feature_terrace': 'Terraza con tumbonas',
    'feature_separate_rooms': '2 dormitorios separados',
    'feature_living_room': 'Sala de estar',
    'feature_bathtub': 'Baño con bañera',
    'feature_smart_tv': 'Smart TV en cada habitación',
    'feature_porch': 'Porche con vistas',
    'feature_group': 'Ideal para grupos',
    'feature_sound': 'Sistema de sonido integrado',
    
    // Formulario de reserva - placeholders y selects
    'form_date_placeholder': 'Selecciona fecha',
    'form_select': 'Seleccionar',
    'form_one_adult': '1 adulto',
    'form_two_adults': '2 adultos',
    'form_three_adults': '3 adultos',
    'form_four_adults': '4 adultos',
    'form_five_adults': '5 adultos',
    'form_six_adults': '6 adultos',
    
    // Formulario de reserva
    'form_booking_title': 'Realiza tu Reserva',
    'form_check_in': 'Fecha de llegada',
    'form_check_out': 'Fecha de salida',
    'form_adults': 'Adultos',
    'form_cabin_type': 'Tipo de alojamiento',
    'form_extras_title': 'Extras',
    'form_first_name': 'Nombre',
    'form_last_name': 'Apellidos',
    'form_email': 'Email',
    'form_phone': 'Teléfono',
    'form_special_requests': 'Peticiones especiales',
    'form_terms': 'Acepto los términos y condiciones y la política de privacidad',
    
    // Extras
    'extra_wine_tasting': 'Cata de vinos (+40€)',
    'extra_breakfast': 'Servicio de desayuno gourmet (+15€/persona/día)',
    'extra_vineyard_tour': 'Tour por los viñedos (+25€/persona)',
    'extra_romantic_dinner': 'Cena romántica (+65€/pareja)',
    
    // Información de pago
    'payment_info_title': 'Información de pago',
    'payment_info_text': 'Para confirmar tu reserva, se requiere un depósito del 30% del total. El resto se abonará a la llegada.',
    'form_card_name': 'Nombre en la tarjeta',
    'form_card_number': 'Número de tarjeta',
    'form_card_expiry': 'Fecha de caducidad',
    'form_card_cvv': 'CVV',
    
    // Política de cancelación
    'cancellation_policy_title': 'Política de cancelación',
    'cancellation_policy_text': 'Cancelación gratuita hasta 7 días antes de la llegada. Cancelaciones posteriores o no presentaciones supondrán un cargo del 30% del precio total.',
    
    // Placeholders
    'form_first_name_placeholder': 'Introduce tu nombre',
    'form_last_name_placeholder': 'Introduce tus apellidos',
    'form_email_placeholder': 'ejemplo@correo.com',
    'form_phone_placeholder': '+34 XXX XXX XXX',
    'form_special_requests_placeholder': 'Indica aquí cualquier petición especial o necesidad',
    'form_card_name_placeholder': 'Nombre como aparece en la tarjeta',
    'form_card_number_placeholder': 'XXXX XXXX XXXX XXXX',
    'form_card_expiry_placeholder': 'MM/AA',
    'form_card_cvv_placeholder': 'XXX',
    
    // Precios por noche
    'prices_per_night': 'Precios por noche',
    'cabin_type': 'Tipo de Cabaña',
    'low_season': 'Temporada Baja',
    'high_season': 'Temporada Alta',
    'weekend_supplement': 'Suplemento Fin de Semana',
    'per_day': 'por día',
    'friday_saturday_sunday': 'viernes, sábado y domingo',
    'people': 'personas',
    
    // Packs Promocionales
    'promotional_packs': 'Packs Promocionales',
    'pack1_title': 'Pack 1',
    'pack1_subtitle': 'Ideal para parejas',
    'pack2_title': 'Pack 2', 
    'pack2_subtitle': 'Ideal para grupos de amigos',
    'pack3_title': 'Pack 3',
    'pack3_subtitle': 'Ideal para grupos',
    'from': 'Desde',
    'low_season_price': 'Temporada baja:',
    'high_season_price': 'Temporada alta:',
    'weekend_supplement_short': 'Suplemento fin de semana:',
    
    // Características de los packs
    'pack1_feature1': '2 noches en cabaña con desayuno incluido',
    'pack1_feature2': 'Visita guiada a la bodega con cata de vinos premium',
    'pack1_feature3': 'Cena maridaje y vinos seleccionados',
    'pack1_feature4': 'Botella de vino de bienvenida',
    
    'pack2_feature1': '3 noches en cabaña (2-4 personas) con desayuno incluido',
    'pack2_feature2': 'Clase privada de cata con un sommelier',
    'pack2_feature3': 'Recorrido exclusivo por los viñedos',
    'pack2_feature4': 'Explicación del proceso de vinificación',
    
    'pack3_feature1': '3 noches en cabaña (4-6 personas) con desayuno incluido',
    'pack3_feature2': 'Recorrido guiado por la bodega',
    'pack3_feature3': 'Cata de vinos premium',
    'pack3_feature4': 'Tour guiado por el pueblo y zonas turísticas',
    'pack3_feature5': 'Regalo de una botella de vino de despedida',
    
    'book_pack': 'Reservar pack',
    
    // Información de temporadas
    'seasons_info': 'Información sobre temporadas',
    'seasons_info_text': 'La temporada alta comprende los meses de Marzo, Abril, Mayo, Junio, Julio, Agosto y Septiembre (210 días). La temporada baja comprende los meses de Octubre, Noviembre, Diciembre, Enero y Febrero (155 días). Los precios pueden variar según disponibilidad y promociones especiales.',
    
    // Información adicional
    'additional_info': 'Información adicional',
    'booking_policy': 'Política de reservas',
    'booking_policy_text': 'Se requiere un depósito del 30% para confirmar la reserva. El resto del pago se realizará a la llegada. Aceptamos tarjetas de crédito, transferencia bancaria y efectivo.',
    'cancellation_policy_full': 'Para confirmar la reserva se requiere un depósito del 30% del importe total. Si cancelas con más de 7 días de antelación a la fecha de llegada, se devolverá el depósito íntegramente. Para cancelaciones realizadas dentro de los 7 días previos a la llegada, no se devolverá el depósito del 30%.',
    'pet_policy': 'Política de mascotas',
    'pet_policy_text': 'Admitimos mascotas únicamente en las Cabañas Familiares con un suplemento de 20€/noche. Por favor, infórmanos al hacer la reserva si traerás mascota.',
    
    // FAQ
    'faq': 'Preguntas frecuentes',
    'faq1_question': '¿A qué hora puedo hacer el check-in y check-out?',
    'faq1_answer': 'El check-in es a partir de las 15:00h y el check-out antes de las 12:00h. Si necesitas flexibilidad en estos horarios, consúltanos y haremos lo posible por adaptarnos.',
    'faq2_question': '¿Las experiencias y actividades se reservan aparte?',
    'faq2_answer': 'Sí, las experiencias y actividades se reservan por separado. Puedes reservarlas al mismo tiempo que tu alojamiento o durante tu estancia, sujeto a disponibilidad.',
    'faq3_question': '¿Hay restaurante en las instalaciones?',
    'faq3_answer': 'No contamos con restaurante común. Sin embargo, ofrecemos servicio de comidas y cenas que se sirven directamente en tu cabaña. El desayuno está incluido en el precio de la habitación.',
  },
  
  // English
  'en': {
    // Titles and subtitles
    'booking_title': 'Our Accommodations',
    'booking_subtitle': 'Luxury eco-cabins for an unforgettable experience among vineyards',
    'availability_title': 'Check availability',
    'special_requests_title': 'Special requests',
    'payment_title': 'Payment information',
    'summary_title': 'Booking summary',
    
    // Booking form
    'check_in': 'Check-in date',
    'check_out': 'Check-out date',
    'adults': 'Adults',
    'children': 'Children',
    'select_cabin': 'Select your cabin',
    'first_name': 'First name',
    'last_name': 'Last name',
    'email': 'Email',
    'phone': 'Phone',
    'address': 'Address',
    'city': 'City',
    'country': 'Country',
    'postal_code': 'Postal code',
    'special_requests': 'Special requests (optional)',
    'allergies': 'Do you have any food allergies?',
    'arrival_time': 'Estimated arrival time',
    'card_number': 'Card number',
    'card_holder': 'Card holder',
    'expiration_date': 'Expiration date',
    'cvv': 'CVV',
    
    // Cabin options
    'cabin_premium': 'Premium Cabin',
    'cabin_premium_desc': 'Luxury cabin with panoramic vineyard views, private terrace, and outdoor jacuzzi.',
    'cabin_family': 'Family Cabin',
    'cabin_family_desc': 'Spacious cabin for families with two bedrooms, full kitchen, and private outdoor area.',
    'cabin_romantic': 'Vineyard Suite',
    'cabin_romantic_desc': 'Romantic suite with king-size bed, hydromassage tub, and terrace with sunset views.',
    'cabin_eco': 'Eco Cabin',
    'cabin_eco_desc': 'Sustainable and ecological cabin, perfectly integrated into the natural environment.',
    
    // Extras and add-ons
    'extras_title': 'Add experiences to your stay',
    'wine_tasting': 'Premium wine tasting',
    'wine_tasting_desc': 'Private tasting of 5 premium Ribera del Duero wines with our sommelier.',
    'dinner_pairing': 'Pairing dinner',
    'dinner_pairing_desc': '5-course gourmet dinner with wine pairing in your cabin.',
    'vineyard_tour': 'Private vineyard tour',
    'vineyard_tour_desc': 'Exclusive tour of our vineyards with an explanation of the winemaking process.',
    'breakfast_basket': 'Gourmet breakfast basket',
    'breakfast_basket_desc': 'Breakfast with local products, freshly baked bread, and natural juices.',
    'picnic_vineyards': 'Picnic among vineyards',
    'picnic_vineyards_desc': 'Gourmet picnic basket to enjoy in a privileged spot among vineyards.',
    'massage': 'Massage service',
    'massage_desc': '60-minute relaxing massage in the privacy of your cabin.',
    
    // Prices and payments
    'price_night': 'per night',
    'total_price': 'Total price',
    'taxes_included': 'Taxes included',
    'deposit': 'Deposit (25%)',
    'remaining_payment': 'Remaining payment (at the property)',
    'booking_conditions': 'Booking conditions',
    'cancellation_policy': 'Cancellation policy',
    
    // Buttons
    'check_availability': 'Check availability',
    'book_now': 'Book now',
    'continue_to_payment': 'Continue to payment',
    'confirm_booking': 'Confirm booking',
    'add_to_booking': 'Add to my booking',
    
    // Messages
    'available': 'Available',
    'not_available': 'Not available',
    'min_stay': 'Minimum stay of 2 nights',
    'required_field': 'Required field',
    'booking_success': 'Your booking has been successfully completed',
    'booking_reference': 'Booking reference',
    'confirmation_email': 'We have sent you a confirmation email',
    'thank_you': 'Thank you for choosing Viña & Cabaña',
    
    // Cancellation policy
    'free_cancellation': 'Free cancellation up to 7 days before arrival',
    'partial_cancellation': 'Cancellation 3-6 days in advance: 50% refund',
    'no_cancellation': 'No refund for cancellations less than 3 days in advance',
    
    // Cabañas
    'cabin1_title': 'Tempranillo Cabin',
    'cabin1_price': '290€/night',
    'cabin1_description': 'Eco-friendly cabin for 6 people with private terrace, vineyard views and all amenities.',
    'cabin1_feature1': '6 people',
    'cabin1_feature2': '120 m²',
    'cabin1_feature3': '3 bedrooms',
    'cabin1_alt': 'Tempranillo Cabin',
    
    'cabin2_title': 'Cabernet Sauvignon Cabin',
    'cabin2_price': '240€/night',
    'cabin2_description': 'Romantic cabin with outdoor jacuzzi, fireplace and panoramic views of the vineyards.',
    'cabin2_feature1': '2 people',
    'cabin2_feature2': '48 m²',
    'cabin2_feature3': '1 bedroom',
    'cabin2_alt': 'Cabernet Sauvignon Cabin',
    
    'cabin3_title': 'Garnacha Cabin',
    'cabin3_price': '200€/night',
    'cabin3_description': 'Ideal for families with children and pets. Spacious outdoor area and barbecue zone.',
    'cabin3_feature1': '4 people',
    'cabin3_feature2': '90 m²',
    'cabin3_feature3': '2 bedrooms',
    'cabin3_alt': 'Garnacha Cabin',
    
    // Other cabins
    'cabin4_title': 'Malbec Cabin',
    'cabin4_price': '235€/night',
    'cabin4_description': 'Cozy cabin for two people with design details and maximum comfort.',
    'cabin4_feature1': '2 people',
    'cabin4_feature2': '48 m²',
    'cabin4_feature3': '1 bedroom',
    'cabin4_alt': 'Malbec Cabin',
    
    'cabin5_title': 'Garnacha Tinta Cabin',
    'cabin5_price': '260€/night',
    'cabin5_description': 'Spacious family cabin with two bedrooms and large common area.',
    'cabin5_feature1': '4 people',
    'cabin5_feature2': '54 m²',
    'cabin5_feature3': '2 bedrooms',
    'cabin5_alt': 'Garnacha Tinta Cabin',
    
    'cabin6_title': 'Albillo Mayor Cabin',
    'cabin6_price': '255€/night',
    'cabin6_description': 'Bright GRECIA-type cabin with vineyard views and contemporary decor.',
    'cabin6_feature1': '4 people',
    'cabin6_feature2': '54 m²',
    'cabin6_feature3': '2 bedrooms',
    'cabin6_alt': 'Albillo Mayor Cabin',
    
    'cabin7_title': 'Mencía Cabin',
    'cabin7_price': '285€/night',
    'cabin7_description': 'Large RIVER-type cabin ideal for groups and families with ample space and all amenities.',
    'cabin7_feature1': '6 people',
    'cabin7_feature2': '120 m²',
    'cabin7_feature3': '3 bedrooms',
    'cabin7_alt': 'Mencía Cabin',
    
    // Características de las cabañas
    'feature_kitchen': 'Equipped kitchen',
    'feature_bathroom': 'Full bathroom',
    'feature_wifi': 'High-speed Wi-Fi',
    'feature_breakfast': 'Breakfast included',
    'feature_jacuzzi': 'Private jacuzzi',
    'feature_fireplace': 'Fireplace',
    'feature_welcome_bottle': 'Welcome wine bottle',
    'feature_pets': 'Pets welcome',
    'feature_bbq': 'Barbecue area',
    'feature_bikes': 'Bicycles available',
    
    // Additional cabin features
    'feature_king_bed': 'King-size bed',
    'feature_rain_shower': 'Bathroom with rain shower',
    'feature_terrace': 'Terrace with sun loungers',
    'feature_separate_rooms': '2 separate bedrooms',
    'feature_living_room': 'Living room',
    'feature_bathtub': 'Bathroom with bathtub',
    'feature_smart_tv': 'Smart TV in each room',
    'feature_porch': 'Porch with views',
    'feature_group': 'Ideal for groups',
    'feature_sound': 'Integrated sound system',
    
    // Formulario de reserva
    'form_booking_title': 'Make your Reservation',
    'form_check_in': 'Check-in date',
    'form_check_out': 'Check-out date',
    'form_adults': 'Adults',
    'form_cabin_type': 'Accommodation type',
    'form_extras_title': 'Extras',
    'form_first_name': 'First name',
    'form_last_name': 'Last name',
    'form_email': 'Email',
    'form_phone': 'Phone',
    'form_special_requests': 'Special requests',
    'form_terms': 'I accept the terms and conditions and the privacy policy',
    
    // Extras
    'extra_wine_tasting': 'Wine tasting (+40€)',
    'extra_breakfast': 'Gourmet breakfast service (+15€/person/day)',
    'extra_vineyard_tour': 'Vineyard tour (+25€/person)',
    'extra_romantic_dinner': 'Romantic dinner (+65€/couple)',
    
    // Payment info
    'payment_info_title': 'Payment information',
    'payment_info_text': 'To confirm your reservation, a 30% deposit of the total is required. The remainder will be paid upon arrival.',
    'form_card_name': 'Name on card',
    'form_card_number': 'Card number',
    'form_card_expiry': 'Expiration date',
    'form_card_cvv': 'CVV',
    
    // Politica de cancelación
    'cancellation_policy_title': 'Cancellation policy',
    'cancellation_policy_text': 'Free cancellation up to 7 days before arrival. Later cancellations or no-shows will incur a charge of 30% of the total price.',
    
    // Placeholders
    'form_first_name_placeholder': 'Enter your first name',
    'form_last_name_placeholder': 'Enter your last name',
    'form_email_placeholder': 'example@email.com',
    'form_phone_placeholder': '+34 XXX XXX XXX',
    'form_special_requests_placeholder': 'Indicate any special requests or needs here',
    'form_card_name_placeholder': 'Name as it appears on the card',
    'form_card_number_placeholder': 'XXXX XXXX XXXX XXXX',
    'form_card_expiry_placeholder': 'MM/YY',
    'form_card_cvv_placeholder': 'XXX',
    
    // Prices per night
    'prices_per_night': 'Prices per night',
    'cabin_type': 'Cabin Type',
    'low_season': 'Low Season',
    'high_season': 'High Season',
    'weekend_supplement': 'Weekend Supplement',
    'per_day': 'per day',
    'friday_saturday_sunday': 'Friday, Saturday and Sunday',
    'people': 'people',
    
    // Promotional Packs
    'promotional_packs': 'Promotional Packages',
    'pack1_title': 'Package 1',
    'pack1_subtitle': 'Ideal for couples',
    'pack2_title': 'Package 2', 
    'pack2_subtitle': 'Ideal for groups of friends',
    'pack3_title': 'Package 3',
    'pack3_subtitle': 'Ideal for groups',
    'from': 'From',
    'low_season_price': 'Low season:',
    'high_season_price': 'High season:',
    'weekend_supplement_short': 'Weekend supplement:',
    
    // Package features
    'pack1_feature1': '2 nights in cabin with breakfast included',
    'pack1_feature2': 'Guided tour of the winery with premium wine tasting',
    'pack1_feature3': 'Pairing dinner and selected wines',
    'pack1_feature4': 'Welcome bottle of wine',
    
    'pack2_feature1': '3 nights in cabin (2-4 people) with breakfast included',
    'pack2_feature2': 'Private tasting class with a sommelier',
    'pack2_feature3': 'Exclusive tour of the vineyards',
    'pack2_feature4': 'Explanation of the winemaking process',
    
    'pack3_feature1': '3 nights in cabin (4-6 people) with breakfast included',
    'pack3_feature2': 'Guided tour of the winery',
    'pack3_feature3': 'Premium wine tasting',
    'pack3_feature4': 'Guided tour of the village and tourist areas',
    'pack3_feature5': 'Gift of a farewell bottle of wine',
    
    'book_pack': 'Book package',
    
    // Seasons information
    'seasons_info': 'Seasons information',
    'seasons_info_text': 'High season includes the months of March, April, May, June, July, August and September (210 days). Low season includes the months of October, November, December, January and February (155 days). Prices may vary according to availability and special promotions.',
    
    // Additional information
    'additional_info': 'Additional information',
    'booking_policy': 'Booking policy',
    'booking_policy_text': 'A 30% deposit is required to confirm the reservation. The rest of the payment will be made upon arrival. We accept credit cards, bank transfer and cash.',
    'cancellation_policy_full': 'A 30% deposit of the total amount is required to confirm the reservation. If you cancel more than 7 days before the arrival date, the deposit will be fully refunded. For cancellations made within 7 days prior to arrival, the 30% deposit will not be refunded.',
    'pet_policy': 'Pet policy',
    'pet_policy_text': 'We accept pets only in Family Cabins with a supplement of €20/night. Please inform us when making your reservation if you will bring a pet.',
    
    // FAQ
    'faq': 'Frequently asked questions',
    'faq1_question': 'What time can I check-in and check-out?',
    'faq1_answer': 'Check-in is from 3:00 PM and check-out before 12:00 PM. If you need flexibility in these schedules, please let us know and we will do our best to accommodate you.',
    'faq2_question': 'Are experiences and activities booked separately?',
    'faq2_answer': 'Yes, experiences and activities are booked separately. You can book them at the same time as your accommodation or during your stay, subject to availability.',
    'faq3_question': 'Is there a restaurant on the premises?',
    'faq3_answer': 'We do not have a common restaurant. However, we offer meals and dinners that are served directly in your cabin. Breakfast is included in the room price.',
  },
  
  // Français
  'fr': {
    // Titres et sous-titres
    'booking_title': 'Nos Hébergements',
    'booking_subtitle': 'Cabanes écologiques de luxe pour une expérience inoubliable parmi les vignobles',
    'availability_title': 'Vérifier la disponibilité',
    'special_requests_title': 'Demandes spéciales',
    'payment_title': 'Informations de paiement',
    'summary_title': 'Résumé de votre réservation',
    
    // Formulaire de réservation
    'check_in': 'Date d\'arrivée',
    'check_out': 'Date de départ',
    'adults': 'Adultes',
    'children': 'Enfants',
    'select_cabin': 'Sélectionnez votre cabane',
    'first_name': 'Prénom',
    'last_name': 'Nom',
    'email': 'Email',
    'phone': 'Téléphone',
    'address': 'Adresse',
    'city': 'Ville',
    'country': 'Pays',
    'postal_code': 'Code postal',
    'special_requests': 'Demandes spéciales (optionnel)',
    'allergies': 'Avez-vous des allergies alimentaires?',
    'arrival_time': 'Heure d\'arrivée estimée',
    'card_number': 'Numéro de carte',
    'card_holder': 'Titulaire de la carte',
    'expiration_date': 'Date d\'expiration',
    'cvv': 'CVV',
    
    // Options de cabanes
    'cabin_premium': 'Cabane Premium',
    'cabin_premium_desc': 'Cabane de luxe avec vue panoramique sur le vignoble, terrasse privée et jacuzzi extérieur.',
    'cabin_family': 'Cabane Familiale',
    'cabin_family_desc': 'Cabane spacieuse pour familles avec deux chambres, cuisine complète et espace extérieur privé.',
    'cabin_romantic': 'Suite Parmi les Vignes',
    'cabin_romantic_desc': 'Suite romantique avec lit king-size, baignoire hydromassage et terrasse avec vue sur le coucher du soleil.',
    'cabin_eco': 'Cabane Éco',
    'cabin_eco_desc': 'Cabane durable et écologique, parfaitement intégrée dans l\'environnement naturel.',
    
    // Extras et compléments
    'extras_title': 'Ajoutez des expériences à votre séjour',
    'wine_tasting': 'Dégustation de vins premium',
    'wine_tasting_desc': 'Dégustation privée de 5 vins premium de la Ribera del Duero avec notre sommelier.',
    'dinner_pairing': 'Dîner avec accord mets et vins',
    'dinner_pairing_desc': 'Dîner gastronomique 5 plats avec accord mets et vins dans votre cabane.',
    'vineyard_tour': 'Visite privée du vignoble',
    'vineyard_tour_desc': 'Visite exclusive de nos vignobles avec une explication du processus de vinification.',
    'breakfast_basket': 'Panier petit-déjeuner gourmet',
    'breakfast_basket_desc': 'Petit-déjeuner avec produits locaux, pain fraîchement cuit et jus naturels.',
    'picnic_vineyards': 'Pique-nique parmi les vignes',
    'picnic_vineyards_desc': 'Panier pique-nique gourmet à déguster dans un lieu privilégié parmi les vignes.',
    'massage': 'Service de massage',
    'massage_desc': 'Massage relaxant de 60 minutes dans l\'intimité de votre cabane.',
    
    // Prix et paiements
    'price_night': 'par nuit',
    'total_price': 'Prix total',
    'taxes_included': 'Taxes incluses',
    'deposit': 'Acompte (25%)',
    'remaining_payment': 'Paiement restant (à la propriété)',
    'booking_conditions': 'Conditions de réservation',
    'cancellation_policy': 'Politique d\'annulation',
    
    // Boutons
    'check_availability': 'Vérifier la disponibilité',
    'book_now': 'Réserver maintenant',
    'continue_to_payment': 'Continuer vers le paiement',
    'confirm_booking': 'Confirmer la réservation',
    'add_to_booking': 'Ajouter à ma réservation',
    
    // Messages
    'available': 'Disponible',
    'not_available': 'Non disponible',
    'min_stay': 'Séjour minimum de 2 nuits',
    'required_field': 'Champ obligatoire',
    'booking_success': 'Votre réservation a été effectuée avec succès',
    'booking_reference': 'Référence de réservation',
    'confirmation_email': 'Nous vous avons envoyé un email de confirmation',
    'thank_you': 'Merci d\'avoir choisi Viña & Cabaña',
    
    // Politique d'annulation
    'free_cancellation': 'Annulation gratuite jusqu\'à 7 jours avant l\'arrivée',
    'partial_cancellation': 'Annulation 3-6 jours à l\'avance: remboursement de 50%',
    'no_cancellation': 'Pas de remboursement pour les annulations à moins de 3 jours à l\'avance',
    
    // Cabañas
    'cabin1_title': 'Cabane Tempranillo',
    'cabin1_price': '290€/nuit',
    'cabin1_description': 'Cabane écologique pour 6 personnes avec terrasse privée, vue sur le vignoble et tout le confort.',
    'cabin1_feature1': '6 personnes',
    'cabin1_feature2': '120 m²',
    'cabin1_feature3': '3 chambres',
    'cabin1_alt': 'Cabane Tempranillo',
    
    'cabin2_title': 'Cabane Cabernet Sauvignon',
    'cabin2_price': '240€/nuit',
    'cabin2_description': 'Cabane romantique avec jacuzzi extérieur, cheminée et vues panoramiques sur les vignobles.',
    'cabin2_feature1': '2 personnes',
    'cabin2_feature2': '48 m²',
    'cabin2_feature3': '1 chambre',
    'cabin2_alt': 'Cabane Cabernet Sauvignon',
    
    'cabin3_title': 'Cabane Garnacha',
    'cabin3_price': '200€/nuit',
    'cabin3_description': 'Idéale pour les familles avec enfants et animaux. Grand espace extérieur et barbecue zone.',
    'cabin3_feature1': '4 personnes',
    'cabin3_feature2': '90 m²',
    'cabin3_feature3': '2 chambres',
    'cabin3_alt': 'Cabane Garnacha',
    
    // Autres cabanes
    'cabin4_title': 'Cabane Malbec',
    'cabin4_price': '235€/nuit',
    'cabin4_description': 'Cabane confortable pour deux personnes avec détails de design et confort maximal.',
    'cabin4_feature1': '2 personnes',
    'cabin4_feature2': '48 m²',
    'cabin4_feature3': '1 chambre',
    'cabin4_alt': 'Cabane Malbec',
    
    'cabin5_title': 'Cabane Garnacha Tinta',
    'cabin5_price': '260€/nuit',
    'cabin5_description': 'Cabane familiale spacieuse avec deux chambres et grand espace commun.',
    'cabin5_feature1': '4 personnes',
    'cabin5_feature2': '54 m²',
    'cabin5_feature3': '2 chambres',
    'cabin5_alt': 'Cabane Garnacha Tinta',
    
    'cabin6_title': 'Cabane Albillo Mayor',
    'cabin6_price': '255€/nuit',
    'cabin6_description': 'Cabane lumineuse de type GRECIA avec vue sur les vignobles et décoration contemporaine.',
    'cabin6_feature1': '4 personnes',
    'cabin6_feature2': '54 m²',
    'cabin6_feature3': '2 chambres',
    'cabin6_alt': 'Cabane Albillo Mayor',
    
    'cabin7_title': 'Cabane Mencía',
    'cabin7_price': '285€/nuit',
    'cabin7_description': 'Grande cabane de type RIVER idéale pour les groupes et les familles avec un espace ample et tout le confort.',
    'cabin7_feature1': '6 personnes',
    'cabin7_feature2': '120 m²',
    'cabin7_feature3': '3 chambres',
    'cabin7_alt': 'Cabane Mencía',
    
    // Caractéristiques des cabanes
    'feature_kitchen': 'Cuisine équipée',
    'feature_bathroom': 'Salle de bain complète',
    'feature_wifi': 'Wi-Fi haute vitesse',
    'feature_breakfast': 'Petit-déjeuner inclus',
    'feature_jacuzzi': 'Jacuzzi privé',
    'feature_fireplace': 'Cheminée',
    'feature_welcome_bottle': 'Bouteille de vin de bienvenue',
    'feature_pets': 'Animaux bienvenus',
    'feature_bbq': 'Zone barbecue',
    'feature_bikes': 'Vélos disponibles',
    
    // Caractéristiques additionnelles des cabanes
    'feature_king_bed': 'Lit king-size',
    'feature_rain_shower': 'Salle de bain avec douche à effet pluie',
    'feature_terrace': 'Terrasse avec transats',
    'feature_separate_rooms': '2 chambres séparées',
    'feature_living_room': 'Salon',
    'feature_bathtub': 'Salle de bain avec baignoire',
    'feature_smart_tv': 'Smart TV dans chaque chambre',
    'feature_porch': 'Porche avec vues',
    'feature_group': 'Idéal pour les groupes',
    'feature_sound': 'Système de son intégré',
    
    // Formulario de réservation - placeholders et selects
    'form_date_placeholder': 'Sélectionner une date',
    'form_select': 'Sélectionner',
    'form_one_adult': '1 adulte',
    'form_two_adults': '2 adultes',
    'form_three_adults': '3 adultes',
    'form_four_adults': '4 adultes',
    'form_five_adults': '5 adultes',
    'form_six_adults': '6 adultes',
    
    // Formulario de reserva
    'form_booking_title': 'Faites votre réservation',
    'form_check_in': 'Date d\'arrivée',
    'form_check_out': 'Date de départ',
    'form_adults': 'Adultes',
    'form_cabin_type': 'Type d\'hébergement',
    'form_extras_title': 'Extras',
    'form_first_name': 'Prénom',
    'form_last_name': 'Nom',
    'form_email': 'Email',
    'form_phone': 'Téléphone',
    'form_special_requests': 'Demandes spéciales',
    'form_terms': 'J\'accepte les conditions générales et la politique de confidentialité',
    
    // Extras
    'extra_wine_tasting': 'Dégustation de vin (+40€)',
    'extra_breakfast': 'Service de petit-déjeuner gourmet (+15€/personne/jour)',
    'extra_vineyard_tour': 'Tour des vignobles (+25€/personne)',
    'extra_romantic_dinner': 'Dîner romantique (+65€/couple)',
    
    // Info paiement
    'payment_info_title': 'Informations de paiement',
    'payment_info_text': 'Pour confirmer votre réservation, un dépôt de 30% du total est requis. Le reste sera payé à l\'arrivée.',
    'form_card_name': 'Nom sur la carte',
    'form_card_number': 'Numéro de carte',
    'form_card_expiry': 'Date d\'expiration',
    'form_card_cvv': 'CVV',
    
    // Politique d'annulation
    'cancellation_policy_title': 'Politique d"annulation',
    'cancellation_policy_text': 'Annulation gratuite jusqu\'à 7 jours avant l\'arrivée. Les annulations ultérieures ou les non-présentations entraîneront des frais de 30% du prix total.',
    
    // Placeholders
    'form_first_name_placeholder': 'Entrez votre prénom',
    'form_last_name_placeholder': 'Entrez votre nom',
    'form_email_placeholder': 'exemple@email.com',
    'form_phone_placeholder': '+34 XXX XXX XXX',
    'form_special_requests_placeholder': 'Indiquez ici toute demande spéciale ou besoin',
    'form_card_name_placeholder': 'Nom tel qu\'il apparaît sur la carte',
    'form_card_number_placeholder': 'XXXX XXXX XXXX XXXX',
    'form_card_expiry_placeholder': 'MM/AA',
    'form_card_cvv_placeholder': 'XXX',
    
    // Prix par nuit
    'prices_per_night': 'Prix par nuit',
    'cabin_type': 'Type de Cabane',
    'low_season': 'Basse Saison',
    'high_season': 'Haute Saison',
    'weekend_supplement': 'Supplément Week-end',
    'per_day': 'par jour',
    'friday_saturday_sunday': 'vendredi, samedi et dimanche',
    'people': 'personnes',
    
    // Packs Promotionnels
    'promotional_packs': 'Forfaits Promotionnels',
    'pack1_title': 'Forfait 1',
    'pack1_subtitle': 'Idéal pour les couples',
    'pack2_title': 'Forfait 2', 
    'pack2_subtitle': 'Idéal pour les groupes d\'amis',
    'pack3_title': 'Forfait 3',
    'pack3_subtitle': 'Idéal pour les groupes',
    'from': 'À partir de',
    'low_season_price': 'Basse saison :',
    'high_season_price': 'Haute saison :',
    'weekend_supplement_short': 'Supplément week-end :',
    
    // Caractéristiques des forfaits
    'pack1_feature1': '2 nuits en cabane avec petit-déjeuner inclus',
    'pack1_feature2': 'Visite guidée de la cave avec dégustation de vins premium',
    'pack1_feature3': 'Dîner avec accord mets et vins sélectionnés',
    'pack1_feature4': 'Bouteille de vin de bienvenue',
    
    'pack2_feature1': '3 nuits en cabane (2-4 personnes) avec petit-déjeuner inclus',
    'pack2_feature2': 'Cours privé de dégustation avec un sommelier',
    'pack2_feature3': 'Visite exclusive des vignobles',
    'pack2_feature4': 'Explication du processus de vinification',
    
    'pack3_feature1': '3 nuits en cabane (4-6 personnes) avec petit-déjeuner inclus',
    'pack3_feature2': 'Visite guidée de la cave',
    'pack3_feature3': 'Dégustation de vins premium',
    'pack3_feature4': 'Visite guidée du village et des zones touristiques',
    'pack3_feature5': 'Cadeau d\'une bouteille de vin de départ',
    
    'book_pack': 'Réserver le forfait',
    
    // Informations sur les saisons
    'seasons_info': 'Informations sur les saisons',
    'seasons_info_text': 'La haute saison comprend les mois de Mars, Avril, Mai, Juin, Juillet, Août et Septembre (210 jours). La basse saison comprend les mois d\'Octobre, Novembre, Décembre, Janvier et Février (155 jours). Les prix peuvent varier selon la disponibilité et les promotions spéciales.',
    
    // Informations supplémentaires
    'additional_info': 'Informations supplémentaires',
    'booking_policy': 'Politique de réservation',
    'booking_policy_text': 'Un acompte de 30% est requis pour confirmer la réservation. Le reste du paiement sera effectué à l\'arrivée. Nous acceptons les cartes de crédit, les virements bancaires et les espèces.',
    'cancellation_policy_full': 'Un acompte de 30% du montant total est requis pour confirmer la réservation. Si vous annulez plus de 7 jours avant la date d\'arrivée, l\'acompte sera entièrement remboursé. Pour les annulations effectuées dans les 7 jours précédant l\'arrivée, l\'acompte de 30% ne sera pas remboursé.',
    'pet_policy': 'Politique concernant les animaux',
    'pet_policy_text': 'Nous acceptons les animaux uniquement dans les Cabanes Familiales avec un supplément de 20€/nuit. Veuillez nous informer lors de votre réservation si vous amenez un animal.',
    
    // FAQ
    'faq': 'Questions fréquemment posées',
    'faq1_question': 'À quelle heure puis-je faire le check-in et le check-out ?',
    'faq1_answer': 'Le check-in est à partir de 15h00 et le check-out avant 12h00. Si vous avez besoin de flexibilité dans ces horaires, veuillez nous consulter et nous ferons de notre mieux pour nous adapter.',
    'faq2_question': 'Les expériences et activités sont-elles réservées séparément ?',
    'faq2_answer': 'Oui, les expériences et activités sont réservées séparément. Vous pouvez les réserver en même temps que votre hébergement ou pendant votre séjour, sous réserve de disponibilité.',
    'faq3_question': 'Y a-t-il un restaurant sur place ?',
    'faq3_answer': 'Nous n\'avons pas de restaurant commun. Cependant, nous proposons un service de repas et de dîners qui sont servis directement dans votre cabane. Le petit-déjeuner est inclus dans le prix de la chambre.',
  },
  
  // Italiano
  'it': {
    // Titoli e sottotitoli
    'booking_title': 'I Nostri Alloggi',
    'booking_subtitle': 'Cabine ecologiche di lusso per un\'esperienza indimenticabile tra i vigneti',
    'availability_title': 'Verifica disponibilità',
    'special_requests_title': 'Richieste speciali',
    'payment_title': 'Informazioni di pagamento',
    'summary_title': 'Riepilogo della prenotazione',
    
    // Modulo di prenotazione
    'check_in': 'Data di arrivo',
    'check_out': 'Data di partenza',
    'adults': 'Adulti',
    'children': 'Bambini',
    'select_cabin': 'Seleziona la tua cabina',
    'first_name': 'Nome',
    'last_name': 'Cognome',
    'email': 'Email',
    'phone': 'Telefono',
    'address': 'Indirizzo',
    'city': 'Città',
    'country': 'Paese',
    'postal_code': 'Codice postale',
    'special_requests': 'Richieste speciali (opzionale)',
    'allergies': 'Hai allergie alimentari?',
    'arrival_time': 'Orario di arrivo stimato',
    'card_number': 'Numero carta',
    'card_holder': 'Titolare carta',
    'expiration_date': 'Data di scadenza',
    'cvv': 'CVV',
    
    // Opzioni cabine
    'cabin_premium': 'Cabina Premium',
    'cabin_premium_desc': 'Cabina di lusso con vista panoramica sul vigneto, terrazza privata e jacuzzi esterno.',
    'cabin_family': 'Cabina Familiare',
    'cabin_family_desc': 'Cabina spaziosa per famiglie con due camere, cucina completa e area esterna privata.',
    'cabin_romantic': 'Suite Tra i Vigneti',
    'cabin_romantic_desc': 'Suite romantica con letto king-size, vasca idromassaggio e terrazza con vista sul tramonto.',
    'cabin_eco': 'Cabina Eco',
    'cabin_eco_desc': 'Cabina sostenibile ed ecologica, perfettamente integrata nell\'ambiente naturale.',
    
    // Extra e complementi
    'extras_title': 'Aggiungi esperienze al tuo soggiorno',
    'wine_tasting': 'Degustazione vini premium',
    'wine_tasting_desc': 'Degustazione privata di 5 vins premium della Ribera del Duero con il nostro sommelier.',
    'dinner_pairing': 'Cena con abbinamento vini',
    'dinner_pairing_desc': 'Cena gourmet di 5 portate con abbinamento vini nella tua cabina.',
    'vineyard_tour': 'Tour privato del vigneto',
    'vineyard_tour_desc': 'Tour esclusivo dei nostri vigneti con spiegazione del processo di vinificazione.',
    'breakfast_basket': 'Cestino colazione gourmet',
    'breakfast_basket_desc': 'Colazione con prodotti locali, pane appena sfornato e succhi naturali.',
    'picnic_vineyards': 'Picnic tra i vigneti',
    'picnic_vineyards_desc': 'Cestino picnic gourmet da gustare in un luogo privilegiato tra i vigneti.',
    'massage': 'Servizio massaggio',
    'massage_desc': 'Massaggio rilassante di 60 minuti nella privacy della tua cabina.',
    
    // Prezzi e pagamenti
    'price_night': 'per notte',
    'total_price': 'Prezzo totale',
    'taxes_included': 'Tasse incluse',
    'deposit': 'Acconto (25%)',
    'remaining_payment': 'Pagamento rimanente (in loco)',
    'booking_conditions': 'Condizioni di prenotazione',
    'cancellation_policy': 'Politica di cancellazione',
    
    // Pulsanti
    'check_availability': 'Verifica disponibilità',
    'book_now': 'Prenota ora',
    'continue_to_payment': 'Continua al pagamento',
    'confirm_booking': 'Conferma prenotazione',
    'add_to_booking': 'Aggiungi alla mia prenotazione',
    
    // Messaggi
    'available': 'Disponibile',
    'not_available': 'Non disponibile',
    'min_stay': 'Soggiorno minimo di 2 notti',
    'required_field': 'Campo obbligatorio',
    'booking_success': 'La tua prenotazione è stata completata con successo',
    'booking_reference': 'Riferimento prenotazione',
    'confirmation_email': 'Ti abbiamo inviato un\'email di conferma',
    'thank_you': 'Grazie per aver scelto Viña & Cabaña',
    
    // Politica di cancellazione
    'free_cancellation': 'Cancellazione gratuita fino a 7 giorni prima dell\'arrivo',
    'partial_cancellation': 'Cancellazione 3-6 giorni in anticipo: rimborso del 50%',
    'no_cancellation': 'Nessun rimborso per cancellazioni a meno di 3 giorni dall\'arrivo',
    
    // Cabine
    'cabin1_title': 'Cabina Tempranillo',
    'cabin1_price': '290€/notte',
    'cabin1_description': 'Cabina ecologica per 6 persone con terrazza privata, vista sui vigneti e tutti i comfort.',
    'cabin1_feature1': '6 persone',
    'cabin1_feature2': '120 m²',
    'cabin1_feature3': '3 camere da letto',
    'cabin1_alt': 'Cabina Tempranillo',
    
    'cabin2_title': 'Cabina Cabernet Sauvignon',
    'cabin2_price': '240€/notte',
    'cabin2_description': 'Cabina romantica con jacuzzi esterno, camino e viste panoramiche sui vigneti.',
    'cabin2_feature1': '2 persone',
    'cabin2_feature2': '48 m²',
    'cabin2_feature3': '1 camera da letto',
    'cabin2_alt': 'Cabina Cabernet Sauvignon',
    
    'cabin3_title': 'Cabina Garnacha',
    'cabin3_price': '200€/notte',
    'cabin3_description': 'Ideale per famiglie con bambini e animali domestici. Ampio spazio esterno e zona barbecue.',
    'cabin3_feature1': '4 persone',
    'cabin3_feature2': '90 m²',
    'cabin3_feature3': '2 camere da letto',
    'cabin3_alt': 'Cabina Garnacha',
    
    // Altre cabine
    'cabin4_title': 'Cabina Malbec',
    'cabin4_price': '235€/notte',
    'cabin4_description': 'Accogliente cabina per due persone con dettagli di design e massimo comfort.',
    'cabin4_feature1': '2 persone',
    'cabin4_feature2': '48 m²',
    'cabin4_feature3': '1 camera da letto',
    'cabin4_alt': 'Cabina Malbec',
    
    'cabin5_title': 'Cabina Garnacha Tinta',
    'cabin5_price': '260€/notte',
    'cabin5_description': 'Spaziosa cabina familiare con due camere da letto e ampia zona comune.',
    'cabin5_feature1': '4 persone',
    'cabin5_feature2': '54 m²',
    'cabin5_feature3': '2 camere da letto',
    'cabin5_alt': 'Cabina Garnacha Tinta',
    
    'cabin6_title': 'Cabina Albillo Mayor',
    'cabin6_price': '255€/notte',
    'cabin6_description': 'Luminosa cabina tipo GRECIA con vista sui vigneti e arredamento contemporaneo.',
    'cabin6_feature1': '4 persone',
    'cabin6_feature2': '54 m²',
    'cabin6_feature3': '2 camere da letto',
    'cabin6_alt': 'Cabina Albillo Mayor',
    
    'cabin7_title': 'Cabina Mencía',
    'cabin7_price': '285€/notte',
    'cabin7_description': 'Grande cabina tipo RIVER ideale per gruppi e famiglie con ampio spazio e tutti i comfort.',
    'cabin7_feature1': '6 persone',
    'cabin7_feature2': '120 m²',
    'cabin7_feature3': '3 camere da letto',
    'cabin7_alt': 'Cabina Mencía',
    
    // Caratteristiche delle cabine
    'feature_kitchen': 'Cucina attrezzata',
    'feature_bathroom': 'Bagno completo',
    'feature_wifi': 'Wi-Fi ad alta velocità',
    'feature_breakfast': 'Colazione inclusa',
    'feature_jacuzzi': 'Jacuzzi privato',
    'feature_fireplace': 'Camino',
    'feature_welcome_bottle': 'Bottiglia di vino di benvenuto',
    'feature_pets': 'Animali benvenuti',
    'feature_bbq': 'Area barbecue',
    'feature_bikes': 'Biciclette disponibili',
    
    // Caratteristiche aggiuntive delle cabine
    'feature_king_bed': 'Letto king-size',
    'feature_rain_shower': 'Bagno con doccia a effetto pioggia',
    'feature_terrace': 'Terrazza con lettini',
    'feature_separate_rooms': '2 camere da letto separate',
    'feature_living_room': 'Sala soggiorno',
    'feature_bathtub': 'Bagno con vasca',
    'feature_smart_tv': 'Smart TV in ogni stanza',
    'feature_porch': 'Portico con vista',
    'feature_group': 'Ideale per gruppi',
    'feature_sound': 'Sistema audio integrato',
    
    // Modulo di prenotazione - placeholders e selects
    'form_date_placeholder': 'Seleziona data',
    'form_select': 'Seleziona',
    'form_one_adult': '1 adulto',
    'form_two_adults': '2 adulti',
    'form_three_adults': '3 adulti',
    'form_four_adults': '4 adulti',
    'form_five_adults': '5 adulti',
    'form_six_adults': '6 adulti',
    
    // Formulario di prenotazione
    'form_booking_title': 'Effettua la tua prenotazione',
    'form_check_in': 'Data di arrivo',
    'form_check_out': 'Data di partenza',
    'form_adults': 'Adulti',
    'form_cabin_type': 'Tipo di alloggio',
    'form_extras_title': 'Extra',
    'form_first_name': 'Nome',
    'form_last_name': 'Cognome',
    'form_email': 'Email',
    'form_phone': 'Telefono',
    'form_special_requests': 'Richieste speciali',
    'form_terms': 'Accetto i termini e condizioni e la politica sulla privacy',
    
    // Extras
    'extra_wine_tasting': 'Degustazione di vini (+40€)',
    'extra_breakfast': 'Servizio colazione gourmet (+15€/persona/giorno)',
    'extra_vineyard_tour': 'Tour dei vigneti (+25€/persona)',
    'extra_romantic_dinner': 'Cena romantica (+65€/coppia)',
    
    // Informazioni pagamento
    'payment_info_title': 'Informazioni di pagamento',
    'payment_info_text': 'Per confermare la prenotazione, è richiesto un acconto del 30% del totale. Il resto del pagamento sarà effettuato all\'arrivo.',
    'form_card_name': 'Nome sulla carta',
    'form_card_number': 'Numero carta',
    'form_card_expiry': 'Data di scadenza',
    'form_card_cvv': 'CVV',
    
    // Politica di cancellazione
    'cancellation_policy_title': 'Politica di cancellazione',
    'cancellation_policy_text': 'Cancellazione gratuita fino a 7 giorni prima dell\'arrivo. Cancellazioni successive o no-show comporteranno un addebito del 30% del prezzo totale.',
    
    // Placeholders
    'form_first_name_placeholder': 'Inserisci il tuo nome',
    'form_last_name_placeholder': 'Inserisci il tuo cognome',
    'form_email_placeholder': 'esempio@email.com',
    'form_phone_placeholder': '+34 XXX XXX XXX',
    'form_special_requests_placeholder': 'Indica qui eventuali richieste speciali o esigenze',
    'form_card_name_placeholder': 'Nome come appare sulla carta',
    'form_card_number_placeholder': 'XXXX XXXX XXXX XXXX',
    'form_card_expiry_placeholder': 'MM/AA',
    'form_card_cvv_placeholder': 'XXX',
    
    // Prezzi per notte
    'prices_per_night': 'Prezzi per notte',
    'cabin_type': 'Tipo di Cabina',
    'low_season': 'Bassa Stagione',
    'high_season': 'Alta Stagione',
    'weekend_supplement': 'Supplemento Weekend',
    'per_day': 'al giorno',
    'friday_saturday_sunday': 'venerdì, sabato e domenica',
    'people': 'persone',
    
    // Pacchetti Promozionali
    'promotional_packs': 'Pacchetti Promozionali',
    'pack1_title': 'Pacchetto 1',
    'pack1_subtitle': 'Ideale per coppie',
    'pack2_title': 'Pacchetto 2', 
    'pack2_subtitle': 'Ideale per gruppi di amici',
    'pack3_title': 'Pacchetto 3',
    'pack3_subtitle': 'Ideale per gruppi',
    'from': 'Da',
    'low_season_price': 'Bassa stagione:',
    'high_season_price': 'Alta stagione:',
    'weekend_supplement_short': 'Supplemento weekend:',
    
    // Caratteristiche dei pacchetti
    'pack1_feature1': '2 notti in cabina con colazione inclusa',
    'pack1_feature2': 'Visita guidata alla cantina con degustazione di vini premium',
    'pack1_feature3': 'Cena con abbinamento vini e vini selezionati',
    'pack1_feature4': 'Bottiglia di vino di benvenuto',
    
    'pack2_feature1': '3 notti in cabina (2-4 persone) con colazione inclusa',
    'pack2_feature2': 'Lezione privata di degustazione con un sommelier',
    'pack2_feature3': 'Tour esclusivo dei vigneti',
    'pack2_feature4': 'Spiegazione del processo di vinificazione',
    
    'pack3_feature1': '3 notti in cabina (4-6 persone) con colazione inclusa',
    'pack3_feature2': 'Tour guidato della cantina',
    'pack3_feature3': 'Degustazione di vini premium',
    'pack3_feature4': 'Tour guidato del paese e delle zone turistiche',
    'pack3_feature5': 'Regalo di una bottiglia di vino di saluto',
    
    'book_pack': 'Prenota pacchetto',
    
    // Informazioni sulle stagioni
    'seasons_info': 'Informazioni sulle stagioni',
    'seasons_info_text': 'L\'alta stagione comprende i mesi di Marzo, Aprile, Maggio, Giugno, Luglio, Agosto e Settembre (210 giorni). La bassa stagione comprende i mesi di Ottobre, Novembre, Dicembre, Gennaio e Febbraio (155 giorni). I prezzi possono variare in base alla disponibilità e alle promozioni speciali.',
    
    // Informazioni aggiuntive
    'additional_info': 'Informazioni aggiuntive',
    'booking_policy': 'Politica di prenotazione',
    'booking_policy_text': 'È richiesto un acconto del 30% per confermare la prenotazione. Il resto del pagamento sarà effettuato all\'arrivo. Accettiamo carte di credito, bonifico bancario e contanti.',
    'cancellation_policy_full': 'Per confermare la prenotazione è richiesto un acconto del 30% dell\'importo totale. Se cancelli con più di 7 giorni di anticipo rispetto alla data di arrivo, l\'acconto sarà interamente rimborsato. Per cancellazioni effettuate nei 7 giorni precedenti l\'arrivo, l\'acconto del 30% non sarà rimborsato.',
    'pet_policy': 'Politica per animali domestici',
    'pet_policy_text': 'Accettiamo animali domestici solo nelle Cabine Familiari con un supplemento di 20€/notte. Ti preghiamo di informarci al momento della prenotazione se porterai un animale domestico.',
    
    // FAQ
    'faq': 'Domande frequenti',
    'faq1_question': 'A che ora posso fare il check-in e il check-out?',
    'faq1_answer': 'Il check-in è dalle 15:00 e il check-out entro le 12:00. Se hai bisogno di flessibilità in questi orari, consultaci e faremo il possibile per adattarci.',
    'faq2_question': 'Le esperienze e le attività si prenotano a parte?',
    'faq2_answer': 'Sì, le esperienze e le attività si prenotano separatamente. Puoi prenotarle contemporaneamente al tuo alloggio o durante il tuo soggiorno, in base alla disponibilità.',
    'faq3_question': 'C\'è un ristorante nella struttura?',
    'faq3_answer': 'Non abbiamo un ristorante comune. Tuttavia, offriamo un servizio di pasti e cene che vengono serviti direttamente nella tua cabina. La colazione è inclusa nel prezzo della camera.',
  },
  
  // Deutsch
  'de': {
    // Titel und Untertitel
    'booking_title': 'Unsere Unterkünfte',
    'booking_subtitle': 'Luxuriöse Öko-Hütten für ein unvergessliches Erlebnis zwischen den Weinbergen',
    'availability_title': 'Verfügbarkeit prüfen',
    'special_requests_title': 'Besondere Wünsche',
    'payment_title': 'Zahlungsinformationen',
    'summary_title': 'Buchungszusammenfassung',
    
    // Buchungsformular
    'check_in': 'Anreisedatum',
    'check_out': 'Abreisedatum',
    'adults': 'Erwachsene',
    'children': 'Kinder',
    'select_cabin': 'Wählen Sie Ihre Hütte',
    'first_name': 'Vorname',
    'last_name': 'Nachname',
    'email': 'E-Mail',
    'phone': 'Telefon',
    'address': 'Adresse',
    'city': 'Stadt',
    'country': 'Land',
    'postal_code': 'Postleitzahl',
    'special_requests': 'Besondere Wünsche (optional)',
    'allergies': 'Haben Sie Nahrungsmittelallergien?',
    'arrival_time': 'Geschätzte Ankunftszeit',
    'card_number': 'Kartennummer',
    'card_holder': 'Karteninhaber',
    'expiration_date': 'Ablaufdatum',
    'cvv': 'CVV',
    
    // Hüttenoptionen
    'cabin_premium': 'Premium-Hütte',
    'cabin_premium_desc': 'Luxuriöse Hütte mit Panoramablick auf den Weinberg, privater Terrasse und Außen-Whirlpool.',
    'cabin_family': 'Familienhütte',
    'cabin_family_desc': 'Geräumige Hütte für Familien mit zwei Schlafzimmern, vollständiger Küche und privatem Außenbereich.',
    'cabin_romantic': 'Weinberg-Suite',
    'cabin_romantic_desc': 'Romantische Suite mit Kingsize-Bett, Hydromassagewanne und Terrasse mit Sonnenuntergangsblick.',
    'cabin_eco': 'Öko-Hütte',
    'cabin_eco_desc': 'Nachhaltige und ökologische Hütte, perfekt in die natürliche Umgebung integriert.',
    
    // Extras und Ergänzungen
    'extras_title': 'Fügen Sie Erlebnisse zu Ihrem Aufenthalt hinzu',
    'wine_tasting': 'Premium-Weinprobe',
    'wine_tasting_desc': 'Private Verkostung von 5 Premium-Weinen aus der Ribera del Duero mit unserem Sommelier.',
    'dinner_pairing': 'Abendessen mit Weinbegleitung',
    'dinner_pairing_desc': '5-Gänge-Gourmet-Dinner mit Weinbegleitung in Ihrer Hütte.',
    'vineyard_tour': 'Private Weinbergtour',
    'vineyard_tour_desc': 'Exklusive Tour durch unsere Weinberge mit Erklärung des Weinherstellungsprozesses.',
    'breakfast_basket': 'Gourmet-Frühstückskorb',
    'breakfast_basket_desc': 'Frühstück mit lokalen Produkten, frisch gebackenem Brot und natürlichen Säften.',
    'picnic_vineyards': 'Picknick zwischen Weinbergen',
    'picnic_vineyards_desc': 'Gourmet-Picknickkorb zum Genießen an einem privilegierten Ort zwischen Weinbergen.',
    'massage': 'Massage-Service',
    'massage_desc': '60-minütige entspannende Massage in der Privatsphäre Ihrer Hütte.',
    
    // Preise und Zahlungen
    'price_night': 'pro Nacht',
    'total_price': 'Gesamtpreis',
    'taxes_included': 'Steuern inbegriffen',
    'deposit': 'Anzahlung (25%)',
    'remaining_payment': 'Restzahlung (vor Ort)',
    'booking_conditions': 'Buchungsbedingungen',
    'cancellation_policy': 'Stornierungsbedingungen',
    
    // Buttons
    'check_availability': 'Verfügbarkeit prüfen',
    'book_now': 'Jetzt buchen',
    'continue_to_payment': 'Weiter zur Zahlung',
    'confirm_booking': 'Buchung bestätigen',
    'add_to_booking': 'Zu meiner Buchung hinzufügen',
    
    // Nachrichten
    'available': 'Verfügbar',
    'not_available': 'Nicht verfügbar',
    'min_stay': 'Mindestaufenthalt von 2 Nächten',
    'required_field': 'Pflichtfeld',
    'booking_success': 'Ihre Buchung wurde erfolgreich abgeschlossen',
    'booking_reference': 'Buchungsreferenz',
    'confirmation_email': 'Wir haben Ihnen eine Bestätigungs-E-Mail gesendet',
    'thank_you': 'Vielen Dank, dass Sie sich für Viña & Cabaña entschieden haben',
    
    // Stornierungsbedingungen
    'free_cancellation': 'Kostenlose Stornierung bis 7 Tage vor Anreise',
    'partial_cancellation': 'Stornierung 3-6 Tage im Voraus: 50% Rückerstattung',
    'no_cancellation': 'Keine Rückerstattung für Stornierungen weniger als 3 Tage im Voraus',
    
    // Hütten
    'cabin1_title': 'Tempranillo-Hütte',
    'cabin1_price': '290€/Nacht',
    'cabin1_description': 'Ökologische Hütte für 6 Personen mit privater Terrasse, Blick auf den Weinberg und allen Annehmlichkeiten.',
    'cabin1_feature1': '6 Personen',
    'cabin1_feature2': '120 m²',
    'cabin1_feature3': '3 Schlafzimmer',
    'cabin1_alt': 'Tempranillo-Hütte',
    
    'cabin2_title': 'Cabernet Sauvignon-Hütte',
    'cabin2_price': '240€/Nacht',
    'cabin2_description': 'Romantische Hütte mit Außen-Whirlpool, Kamin und Panoramablick auf die Weinberge.',
    'cabin2_feature1': '2 Personen',
    'cabin2_feature2': '48 m²',
    'cabin2_feature3': '1 Schlafzimmer',
    'cabin2_alt': 'Cabernet Sauvignon-Hütte',
    
    'cabin3_title': 'Garnacha-Hütte',
    'cabin3_price': '200€/Nacht',
    'cabin3_description': 'Ideal für Familien mit Kindern und Haustieren. Großzügiger Außenbereich und Grillzone.',
    'cabin3_feature1': '4 Personen',
    'cabin3_feature2': '90 m²',
    'cabin3_feature3': '2 Schlafzimmer',
    'cabin3_alt': 'Garnacha-Hütte',
    
    // Andere Hütten
    'cabin4_title': 'Malbec-Hütte',
    'cabin4_price': '235€/Nacht',
    'cabin4_description': 'Gemütliche Hütte für zwei Personen mit Designdetails und maximalem Komfort.',
    'cabin4_feature1': '2 Personen',
    'cabin4_feature2': '48 m²',
    'cabin4_feature3': '1 Schlafzimmer',
    'cabin4_alt': 'Malbec-Hütte',
    
    'cabin5_title': 'Garnacha Tinta-Hütte',
    'cabin5_price': '260€/Nacht',
    'cabin5_description': 'Geräumige Familienhütte mit zwei Schlafzimmern und großem Gemeinschaftsbereich.',
    'cabin5_feature1': '4 Personen',
    'cabin5_feature2': '54 m²',
    'cabin5_feature3': '2 Schlafzimmer',
    'cabin5_alt': 'Garnacha Tinta-Hütte',
    
    'cabin6_title': 'Albillo Mayor-Hütte',
    'cabin6_price': '255€/Nacht',
    'cabin6_description': 'Helle GRECIA-Hütte mit Blick auf die Weinberge und zeitgenössischer Einrichtung.',
    'cabin6_feature1': '4 Personen',
    'cabin6_feature2': '54 m²',
    'cabin6_feature3': '2 Schlafzimmer',
    'cabin6_alt': 'Albillo Mayor-Hütte',
    
    'cabin7_title': 'Mencía-Hütte',
    'cabin7_price': '285€/Nacht',
    'cabin7_description': 'Große RIVER-Hütte ideal für Gruppen und Familien mit viel Platz und allem Komfort.',
    'cabin7_feature1': '6 Personen',
    'cabin7_feature2': '120 m²',
    'cabin7_feature3': '3 Schlafzimmer',
    'cabin7_alt': 'Mencía-Hütte',
    
    // Merkmale der Hütten
    'feature_kitchen': 'Ausgestattete Küche',
    'feature_bathroom': 'Komplettes Badezimmer',
    'feature_wifi': 'Hochgeschwindigkeits-WLAN',
    'feature_breakfast': 'Frühstück inklusive',
    'feature_jacuzzi': 'Privater Whirlpool',
    'feature_fireplace': 'Kamin',
    'feature_welcome_bottle': 'Willkommens-Weinflasche',
    'feature_pets': 'Haustiere willkommen',
    'feature_bbq': 'Grillbereich',
    'feature_bikes': 'Fahrräder verfügbar',
    
    // Zusätzliche Hüttenmerkmale
    'feature_king_bed': 'Kingsize-Bett',
    'feature_rain_shower': 'Badezimmer mit Regendusche',
    'feature_terrace': 'Terrasse mit Sonnenliegen',
    'feature_separate_rooms': '2 separate Schlafzimmer',
    'feature_living_room': 'Wohnzimmer',
    'feature_bathtub': 'Badezimmer mit Badewanne',
    'feature_smart_tv': 'Smart TV in jedem Zimmer',
    'feature_porch': 'Veranda mit Aussicht',
    'feature_group': 'Ideal für Gruppen',
    'feature_sound': 'Integriertes Soundsystem',
    
    // Buchungsformular - Platzhalter und Auswahlmöglichkeiten
    'form_date_placeholder': 'Datum auswählen',
    'form_select': 'Auswählen',
    'form_one_adult': '1 Erwachsener',
    'form_two_adults': '2 Erwachsene',
    'form_three_adults': '3 Erwachsene',
    'form_four_adults': '4 Erwachsene',
    'form_five_adults': '5 Erwachsene',
    'form_six_adults': '6 Erwachsene',
    
    // Formulario de reserva
    'form_booking_title': 'Machen Sie Ihre Reservierung',
    'form_check_in': 'Anreisedatum',
    'form_check_out': 'Abreisedatum',
    'form_adults': 'Erwachsene',
    'form_cabin_type': 'Unterkunftstyp',
    'form_extras_title': 'Extras',
    'form_first_name': 'Vorname',
    'form_last_name': 'Nachname',
    'form_email': 'E-Mail',
    'form_phone': 'Telefon',
    'form_special_requests': 'Besondere Wünsche',
    'form_terms': 'Ich akzeptiere die Geschäftsbedingungen und die Datenschutzrichtlinie',
    
    // Extras
    'extra_wine_tasting': 'Weinverkostung (+40€)',
    'extra_breakfast': 'Gourmet-Frühstücksservice (+15€/Person/Tag)',
    'extra_vineyard_tour': 'Weinberg-Tour (+25€/Person)',
    'extra_romantic_dinner': 'Romantisches Abendessen (+65€/Paar)',
    
    // Zahlungsinfo
    'payment_info_title': 'Zahlungsinformationen',
    'payment_info_text': 'Um Ihre Reservierung zu bestätigen, ist eine Anzahlung von 30% des Gesamtbetrags erforderlich. Der Rest der Zahlung erfolgt bei der Ankunft. Wir akzeptieren Kreditkarten, Banküberweisung und Bargeld.',
    'form_card_name': 'Name auf der Karte',
    'form_card_number': 'Kartennummer',
    'form_card_expiry': 'Ablaufdatum',
    'form_card_cvv': 'CVV',
    
    // Stornierungsbedingungen
    'cancellation_policy_title': 'Stornierungsbedingungen',
    'cancellation_policy_text': 'Kostenlose Stornierung bis 7 Tage vor Anreise. Spätere Stornierungen oder Nichterscheinen führen zu einer Gebühr von 30% des Gesamtpreises.',
    
    // Platzhalter
    'form_first_name_placeholder': 'Geben Sie Ihren Vornamen ein',
    'form_last_name_placeholder': 'Geben Sie Ihren Nachnamen ein',
    'form_email_placeholder': 'beispiel@email.com',
    'form_phone_placeholder': '+34 XXX XXX XXX',
    'form_special_requests_placeholder': 'Geben Sie hier spezielle Anfragen oder Bedürfnisse an',
    'form_card_name_placeholder': 'Name wie auf der Karte angegeben',
    'form_card_number_placeholder': 'XXXX XXXX XXXX XXXX',
    'form_card_expiry_placeholder': 'MM/JJ',
    'form_card_cvv_placeholder': 'XXX',
    
    // Preise pro Nacht
    'prices_per_night': 'Preise pro Nacht',
    'cabin_type': 'Hüttentyp',
    'low_season': 'Nebensaison',
    'high_season': 'Hauptsaison',
    'weekend_supplement': 'Wochenend-Zuschlag',
    'per_day': 'pro Tag',
    'friday_saturday_sunday': 'Freitag, Samstag und Sonntag',
    'people': 'Personen',
    
    // Aktionspakete
    'promotional_packs': 'Aktionspakete',
    'pack1_title': 'Paket 1',
    'pack1_subtitle': 'Ideal für Paare',
    'pack2_title': 'Paket 2', 
    'pack2_subtitle': 'Ideal für Freundesgruppen',
    'pack3_title': 'Paket 3',
    'pack3_subtitle': 'Ideal für Gruppen',
    'from': 'Ab',
    'low_season_price': 'Nebensaison:',
    'high_season_price': 'Hauptsaison:',
    'weekend_supplement_short': 'Wochenend-Zuschlag:',
    
    // Paketmerkmale
    'pack1_feature1': '2 Nächte in der Hütte mit Frühstück',
    'pack1_feature2': 'Geführte Tour durch das Weingut mit Premium-Weinprobe',
    'pack1_feature3': 'Abendessen mit Weinbegleitung und ausgewählten Weinen',
    'pack1_feature4': 'Willkommens-Weinflasche',
    
    'pack2_feature1': '3 Nächte in der Hütte (2-4 Personen) mit Frühstück',
    'pack2_feature2': 'Private Verkostung mit einem Sommelier',
    'pack2_feature3': 'Exklusive Tour durch die Weinberge',
    'pack2_feature4': 'Erklärung des Weinherstellungsprozesses',
    
    'pack3_feature1': '3 Nächte in der Hütte (4-6 Personen) mit Frühstück',
    'pack3_feature2': 'Geführte Tour durch das Weingut',
    'pack3_feature3': 'Premium-Weinprobe',
    'pack3_feature4': 'Geführte Tour durch das Dorf und die Touristengebiete',
    'pack3_feature5': 'Geschenk einer Abschieds-Weinflasche',
    
    'book_pack': 'Paket buchen',
    
    // Saisoninformationen
    'seasons_info': 'Informationen zu den Saisonen',
    'seasons_info_text': 'Die Hauptsaison umfasst die Monate März, April, Mai, Juni, Juli, August und September (210 Tage). Die Nebensaison umfasst die Monate Oktober, November, Dezember, Januar und Februar (155 Tage). Die Preise können je nach Verfügbarkeit und Sonderaktionen variieren.',
    
    // Zusätzliche Informationen
    'additional_info': 'Zusätzliche Informationen',
    'booking_policy': 'Buchungsrichtlinien',
    'booking_policy_text': 'Für die Bestätigung der Reservierung ist eine Anzahlung von 30% erforderlich. Der Rest der Zahlung erfolgt bei der Ankunft. Wir akzeptieren Kreditkarten, Banküberweisung und Bargeld.',
    'cancellation_policy_full': 'Für die Bestätigung der Reservierung ist eine Anzahlung von 30% des Gesamtbetrags erforderlich. Bei Stornierung mehr als 7 Tage vor dem Ankunftsdatum wird die Anzahlung vollständig zurückerstattet. Bei Stornierungen innerhalb von 7 Tagen vor der Ankunft wird die Anzahlung von 30% nicht zurückerstattet.',
    'pet_policy': 'Haustierrichtlinien',
    'pet_policy_text': 'Wir akzeptieren Haustiere nur in Familienhütten mit einem Zuschlag von 20€/Nacht. Bitte informieren Sie uns bei der Buchung, wenn Sie ein Haustier mitbringen werden.',
    
    // FAQ
    'faq': 'Häufig gestellte Fragen',
    'faq1_question': 'Wann kann ich einchecken und auschecken?',
    'faq1_answer': 'Der Check-in ist ab 15:00 Uhr und der Check-out vor 12:00 Uhr. Wenn Sie Flexibilität bei diesen Zeiten benötigen, konsultieren Sie uns bitte, und wir werden unser Bestes tun, um uns anzupassen.',
    'faq2_question': 'Werden Erlebnisse und Aktivitäten separat gebucht?',
    'faq2_answer': 'Ja, Erlebnisse und Aktivitäten werden separat gebucht. Sie können sie gleichzeitig mit Ihrer Unterkunft oder während Ihres Aufenthalts buchen, je nach Verfügbarkeit.',
    'faq3_question': 'Gibt es ein Restaurant auf dem Gelände?',
    'faq3_answer': 'Wir haben kein gemeinsames Restaurant. Wir bieten jedoch einen Mahlzeiten- und Abendessen-Service an, der direkt in Ihrer Hütte serviert wird. Das Frühstück ist im Zimmerpreis inbegriffen.',
  }
}; 