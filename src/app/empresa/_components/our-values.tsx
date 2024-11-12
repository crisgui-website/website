const ValuesText: Record<
  number,
  {
    title: string;
    text: string;
  }
> = {
  1: {
    title: "Inovação",
    text: "Estamos sempre em compromisso através de uma busca contínua de novas soluções, melhorias e abordagens criativas.",
  },
  2: {
    title: "Sustentabilidade",
    text: "Temos o compromisso com práticas que minimizam os impactos ambientais e promovem a responsabilidade social e ambiental.",
  },
  3: {
    title: "Qualidade",
    text: "Temos um forte compromisso com a excelência em todos os aspectos durante nosso processo de produção. Promovendo ações que garantem um alto padrão de desempenho e confiabilidade.",
  },
};

export function OurValues() {
  return (
    <div className="max-w-screen-xl m-auto mt-24 px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <h6 className="is-h6 font-medium text-gray-500 text-left">
          Nossos valores
        </h6>
        <h3 className="w-full sm:w-3/6 is-h3 font-medium text-gray-900 text-left">
          Entenda os valores que norteiam o dia a dia de toda a empresa
        </h3>
        <p className="w-full sm:w-3/6 is-medium font-medium text-gray-500 text-left">
          A CRISGUI Indústria e Serviços dedica-se a criar valor para seus
          clientes, focando na redução de custos e aumento de eficiência
          operacional. Desenvolvemos produtos personalizados para diversos
          setores.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            className="flex flex-col gap-6 border border-gray-100 p-6 rounded-lg"
            key={index}
          >
            <h5 className="is-h5 text-orange-500">0{index + 1}</h5>

            <div>
              <h5 className="is-h5 text-gray-900 font-normal">
                {ValuesText[index + 1].title}
              </h5>
              <p className="is-medium text-gray-400 font-medium">
                {ValuesText[index + 1].text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
