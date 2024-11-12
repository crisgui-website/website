import { ProductRoleteSubType, ProductType } from "@/types/productType";

export const productTypes: Record<ProductType, string> = {
  ROLETES: "Roletes",
  TAMBORES: "Tambores",
  SUPORTES: "Suportes"
};

export const productTypeFilter: {
  id: number,
  label: string,
  value: string,
  subTypes?: {
    id: number,
    parentType: number,
    label: string,
    value: string,
  }[]
}[] = [
    {
      id: 1,
      label: 'Roletes',
      value: ProductType.ROLETES,
      subTypes: [
        {
          id: 2,
          parentType: 1,
          label: 'Rolete de Retorno com Anéis e Liso',
          value: ProductRoleteSubType.RETORNO,
        },
        {
          id: 3,
          parentType: 1,
          label: 'Roletes conforme desenho',
          value: ProductRoleteSubType.DESENHO,
        },
        {
          id: 4,
          parentType: 1,
          label: 'Roletes de Impacto',
          value: ProductRoleteSubType.IMPACTO,
        },
        {
          id: 5,
          parentType: 1,
          label: 'Rolos em Polietileno',
          value: ProductRoleteSubType.POLIETILENO,
        },
        {
          id: 6,
          parentType: 1,
          label: 'Roletes de Carga',
          value: ProductRoleteSubType.CARGA,
        },
        {
          id: 7,
          parentType: 1,
          label: 'Rolete Guia',
          value: ProductRoleteSubType.GUIA,
        },
      ]
    },
    {
      id: 8,
      label: 'Tambores',
      value: ProductType.TAMBORES,
    },
    {
      id: 9,
      label: 'Suportes',
      value: ProductType.SUPORTES,
    },
  ]

export const productOptions = Object.keys(productTypes).map((productType) => {
  return {
    label: productTypes[productType as ProductType],
    value: productType,
  };
});
