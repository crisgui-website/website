import Image from "next/image";
import aboutCompanySVG from "../../../assets/about-company.svg";

export function About() {
  return (
    <div className="max-w-screen-xl m-auto px-4 mt-8 sm:mt-0">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-24 items-center">
        <div className="flex-1 flex flex-col justify-between mt-8 sm:mt-0">
          <p className="is-medium text-gray-500 font-medium mb-6">
            A CRISGUI começou suas atividades no ano de 2004 como uma empresa familiar sendo idealizada e fundada pelo patriarca da família, que já possuía uma vasta experiência de 30 anos no setor de mineração. Inicialmente a empresa começou com uma estrutura modesta mas com um profundo conhecimento técnico e uma visão estratégica herdada ao longa da trajetória do seu fundador. A CRISGUI se especializou na fabricação de componentes para correia transportadora aproveitando a expertise e o histórico do patriarca para oferecer produtos de alta qualidade. A experiência acumulada ao longo das três décadas permitiu a CRISGUI estabelecer uma base sólida e criar soluções inovadoras para melhorar a eficiência das operações de transporte na mineração desenvolvendo e patenteando um rolete inovador feito de polietileno que trouxe uma série de vantagens em comparação com os tradicionais roletes de aço.
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-between mt-8 sm:mt-0">
          <p className="is-medium text-gray-500 font-medium mb-6">
            Esse novo design ofereceu um custo benefício como menor desgaste, resistência a corrosão e redução de custos de manutenção. A natureza familiar da empresa contribuiu para um ambiente de trabalho coeso e uma abordagem personalizada para atender as necessidades dos clientes. A dedicação e o compromisso da CRISGUI pela qualidade, excelência e inovação foram fundamentais para o crescimento e sucesso. Uma abordagem proativa permitiu a Crisgui conquistar a confiança dos seus clientes em diversos segmentos de mineração, siderúrgicas, pedreiras, cimenteiras, setor portuário entre outros. Consolidando sua potência no mercado, sua história ilustra como a inovação e a visão empreendedora podem transformar um setor e criar soluções que beneficiam tanto a indústria quanto o meio ambiente.
          </p>
        </div>
      </div>
    </div>
  );
}
