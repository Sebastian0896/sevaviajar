export const metadata = {
  title: "Sevaviajar | Acerca",
  description: "Consultoría Migratoria y Consular",
  creator: "Sebastian Gonzalez R.",
  keywords: ["Fundador", "Sebastián González R.", "Sevaviajar", "Consultor migratorio", "Solicitud de visa", "Solicitud de pasaporte", "Asesoria migratoria"],
};

export default function Acerca() {
    return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        {/* <section
          className="relative h-96  bg-center"
          style={{ backgroundImage: "url('hero-image.jpg')", backgroundPosition: "30% 20%"}}
        >
          <div className="absolute inset-0 bg-gray-950 bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Acerca de Sevaviajar</h1>
          </div>
        </section> */}
  
        {/* Founder Section */}
        <section className="md:py-16 bg-white my-12">
          <div className="container mx-auto flex flex-col md:flex-row">
            {/* Image */}
            <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
              <img
                src="/heroImage.jpg"
                alt="Fundador de Sevaviajar"
                className="md:rounded-md"
              />
            </div>
            {/* Text */}
            <div className="w-full md:w-2/3 px-4 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">Fundador</h2>
              <p className="text-black text-justify mb-4">
              <strong>Sebastián González Rodríguez</strong> es un ingeniero en sistemas con una pasión inesperada: ayudar a las personas a navegar el mundo de los trámites migratorios y consulares. Aunque su formación inicial estuvo enfocada en tecnología, Sebastián ha complementado sus conocimientos con capacitaciones especializadas en procesos migratorios y consulares, lo que le ha permitido transformar su curiosidad en una sólida vocación.
              </p>
              <p className="text-black text-justify mb-4">
              Lo que comenzó como un hobbie —ayudar a familiares y amigos con sus trámites— pronto se convirtió en un proyecto más grande: <strong>Sevaviajar.</strong> Inspirado por el deseo de simplificar procesos complejos y proporcionar un acompañamiento personalizado, Sebastián decidió formalizar su trabajo y llevarlo a más personas que necesitaban orientación y apoyo en sus viajes.
              </p>
              <p className="text-black text-justify mb-4">
              El nombre <strong>Sevaviajar</strong> tiene un significado especial. Durante una conversación casual con un compañero de trabajo, surgió la idea de llamarlo "Sebaviajar", como un juego de palabras entre su nombre y el propósito del proyecto. Sin embargo, Sebastián optó por ajustar el nombre a "Sevaviajar", buscando una forma más profesional y fluida que reflejara tanto su identidad como su compromiso de acompañar a las personas en cada paso de su viaje.
              </p>
              <p className="text-black text-justify mb-4">
              Hoy en día, Sevaviajar es el resultado de años de experiencia, dedicación y la pasión de Sebastián por hacer que los sueños de viajar sean una realidad para muchas personas.
              </p>
            </div>
          </div>
        </section>
      </div>

    </>
    );
  }
  