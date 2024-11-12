import { CardMainProducts } from "./card-main-products";

export function MainProducts() {
  return (
    <div className="max-w-screen-xl mx-auto w-full mt-14 sm:mt-44 px-4 sm:px-6 lg:px-8">
      <h6 className="text-gray-500 is-h6">Produtos CRISGUI</h6>

      <h3 className="mt-6 is-h3 text-gray-900">
        Conheça alguns de <br /> nossos produtos
      </h3>

      <div className="flex flex-col gap-4 mt-14">
        <div className="flex flex-col sm:flex-row gap-4">
          <CardMainProducts
            img="bg-product1"
            width="w-full sm:w-3/5"
            title="Roletes"
            type="ROLETES"
          />
          <CardMainProducts
            img="bg-product2"
            width="w-full sm:w-2/5"
            title="Suportes"
            type="SUPORTES"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <CardMainProducts
            img="bg-product3"
            width="w-full sm:w-2/5"
            title="Tambores"
            type="TAMBORES"
          />
          <CardMainProducts
            img="bg-product4"
            width="w-full sm:w-3/5"
            title="Sob Desenho"
            type="ROLETES/DESENHO"
          />
        </div>
      </div>
    </div>
  );
}
