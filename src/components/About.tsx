const About = () => {
  return (
    <section className="min-h-screen flex items-center py-24">
      <div className="w-full flex">

        {/* Espaço vazio à esquerda */}
        <div className="hidden md:block md:w-[10%]" />

        {/* Conteúdo */}
        <div className="w-full md:w-[40%] px-6">

          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            About my work
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">
            I’m André Gross, focused on building meaningful digital products that blend clarity,
            performance, and seamless interaction. My work brings ideas to life with intention
            and attention to detail.
            <br /><br />
            I specialize in React, TypeScript, and modern CSS, always aiming to elevate usability
            and accessibility. Clean layouts, structured components, and thoughtful design guide
            every decision.
            <br /><br />
            Each project reflects problem-solving, consistency, and a commitment to delivering
            intuitive and impactful user experiences.
          </p>

          <div className="mt-8">
            <img
              src="/signature.png"
              alt="Assinatura"
              className="h-10"
            />
          </div>

        </div>

        {/* Coluna direita vazia */}
        <div className="hidden md:block md:w-[30%]" />

      </div>
      <div className="h-32"></div>
    </section>
  );
};

export default About;