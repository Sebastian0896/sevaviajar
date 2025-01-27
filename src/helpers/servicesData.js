const servicesData = [
    {
      slug: 'solicitud-de-visa-b1b2',
      nombre: 'Solicitud de Visa B1/B2',
      descripcion: 'Tramitamos tu solicitud de visa B1/B2 de forma rápida y sencilla.',
      requisitos: [
        'Pasaporte válido.',
        'Formulario DS-160 completado.',
        'Recibo de pago de la tarifa de visa.',
      ],
      via: 'Presencial y Virtual',
      costo: 150,
      nota: 'Recuerda que no es obligatorio pagar el impuesto en el banco, lo puedes hacer en línea con una tarjeta de crédito Visa o Master Card.',
    },
    {
      slug: 'renovacion-de-visa-b1b2',
      nombre: 'Renovación de Visa B1/B2',
      descripcion: 'Tramitamos tu solicitud de renovación para la visa B1/B2 de forma rápida y sencilla.',
      requisitos: [
        'Pasaporte válido.',
        'Formulario DS-160 completado.',
        'Recibo de pago de la tarifa de visa.',
      ],
      via: 'Presencial y Virtual',
      costo: 150,
      nota: 'Recuerda que no es obligatorio pagar el impuesto en el banco, lo puedes hacer en línea con una tarjeta de crédito Visa o Master Card.',
    },
    {
      slug: 'solicitud-de-pasaporte',
      nombre: 'Solicitud de Pasaporte por Primera Vez',
      descripcion: 'Gestionamos tu pasaporte para adultos y menores.',
      requisitos: [
        'Foto 2x2.',
        'Acta certificada para tales fines.',
        'Documento de identidad vigente (Cédula ambos lados).',
        'Pago de la tarifa correspondiente.',
      ],
      via: 'Presencial y Virtual',
      costo: 100,
      nota: 'Si la solicitud es para un menor de edad, entonces, debe subirse la cédula del representante de dicho menor. Pagar la carta de autorización con un costo de (RD$200) que se cobra a la hora de pagar el impuesto y no necesariamente hay que ir al banco a pagar dicho impuesto.',
    },
    {
      slug: 'renovacion-de-pasaporte',
      nombre: 'Renovación de Pasaporte',
      descripcion: 'Gestionamos la renovación de tu pasaporte para adultos y menores.',
      requisitos: [
        'Foto 2x2.',
        'Foto de la primera hoja del pasaporte con los bordes visibles.',
        'Documento de identidad vigente (Cédula ambos lados).',
        'Pago de la tarifa correspondiente.',
      ],
      via: 'Presencial y Virtual',
      costo: 100,
      nota: 'Si la solicitud es para un menor de edad, entonces, debe subirse la cédula del representante de dicho menor. Pagar la carta de autorización con un costo de (RD$200) que se cobra a la hora de pagar el impuesto y no necesariamente hay que ir al banco a pagar dicho impuesto.',
    },
    {
      slug: 'asesoria-personalizada',
      nombre: 'Asesoría Personalizada',
      descripcion: 'Ofrecemos asesoría personalizada para todos tus trámites migratorios.',
      requisitos: ['Consulta previa para evaluar tu caso.'],
      via: 'Presencial y Virtual',
      costo: 50,
      nota: 'N/A'
    },
    {
      slug: 'reprogramacion-de-citas',
      nombre: 'Reprogramación de Citas',
      descripcion: 'Logramos bajar tus citas hasta para el mismo mes.',
      requisitos: ['Estar de acuerdo en que bajemos tus citas, ya que no siempre el cliente desea hacerlo.'],
      via: 'Virtual',
      costo: 50,
      nota: 'La reprogramación de cita queda a discreción del solicitante y se puede lograr cada miércoles.',
    },
    // Agrega más servicios según sea necesario
  ];
  
  export default servicesData;
  