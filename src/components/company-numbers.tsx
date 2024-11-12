import Image from "next/image";

const companyNumbers: Record<
  number,
  {
    value: string;
    label: string;
    span1?: string;
    span2?: string;
  }
> = {
  1: {
    span1: '+',
    value: "10.000",
    label: "Projetos realizados com sucesso",
  },
  2: {
    value: "30",
    span2: 'anos',
    label: "de experiência na indústria de transportadores de correia",
  },
  3: {
    value: "600",
    label: "clientes satisfeitos em todo o país",
  },
  4: {
    value: "90%",
    label: "de clientes repetidos",
  },
};

export function CompanyNumbers() {
  return (
    <div className="max-w-screen-xl mx-0 sm:mx-auto w-full flex flex-col sm:flex-row gap-8 sm:justify-between mt-0 sm:mt-28">
      <div className="w-full sm:w-[80%] flex justify-center sm:justify-start mb-8 px-4 sm:px-0 rounded-2xl sm:mb-0">
        <Image
          src={"/images/company-numbers-home.png"}
          alt="Foto da companhia"
          layout="responsive"
          width={200}
          height={560}
        />
      </div>

      <div className="flex flex-col justify-items-center">
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="flex-1 mb-6 sm:mb-0" key={index}>
            <div className="py-6 px-4 text-center sm:w-[90%]">
              <h3 className="is-h3 font-medium">
              <span className="text-orange-500">{companyNumbers[index + 1]?.span1}</span>
                {companyNumbers[index + 1].value}
                <span className="text-orange-500"> {companyNumbers[index + 1]?.span2}</span>
              </h3>
              <p className="is-medium font-normal text-gray-400">
                {companyNumbers[index + 1].label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
