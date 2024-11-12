"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import { productTypeFilter } from "@/mock/productTypes";
import { products } from "@/mock/products";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

type ProductType = {
  id: number;
  parentType?: number;
  label: string;
  value: string;
  subTypes?: ProductType[];
};

type Product = {
  id: number;
  label: string;
};

export function ProductList() {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const initialProduct = params.get("product") || "";
    const initialSubProduct = params.get("subProduct") || "";

    const findProductType = (product: string, subProduct: string) => {
      const productFilter = productTypeFilter.find(
        (item) => item.value === product
      );

      if (productFilter && subProduct) {
        return (
          productFilter.subTypes?.find(
            (subType) => subType.value === subProduct
          ) || productFilter
        );
      }

      return productFilter;
    };

    const initialSelectedType = findProductType(
      initialProduct,
      initialSubProduct
    ) || {
      id: 1,
      label: "Roletes",
      value: "ROLETES",
    };

    setSelectedType(initialSelectedType);
  }, [params]);

  const [selectedType, setSelectedType] = useState<ProductType>({
    id: 1,
    label: "Roletes",
    value: "ROLETES",
  });

  const [selectedProduct, setSelectedProduct] = useState<Product>(
    {} as Product
  );

  const [loading, setLoading] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [selectedType]);

  const selectedTypeProducts = products[selectedType.value] || [];

  const handleTypeSelect = (type: ProductType) => setSelectedType(type);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const findSubType = (value: string): ProductType | undefined => {
    for (const type of productTypeFilter) {
      if (type.value === value) return type;
      const subType = type.subTypes?.find((sub) => sub.value === value);
      if (subType) return subType;
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = findSubType(e.target.value);
    if (selected) handleTypeSelect(selected);
  };

  const renderDesktopFilter = () => (
    <div className="hidden md:block">
      {productTypeFilter.map((item) => (
        <div key={item.id} className="flex flex-col mb-4">
          <p
            onClick={() => handleTypeSelect(item)}
            className={`font-medium ${selectedType.id === item.id ||
              selectedType?.parentType === item.id
              ? "text-orange-400"
              : "text-gray-500"
              } is-large cursor-pointer`}
          >
            {item.label}
          </p>
          <div className="pl-4 mb-4">
            {item.subTypes?.map((subType) => (
              <div key={subType.id} className="mt-2">
                <p
                  onClick={() => handleTypeSelect(subType)}
                  className={`font-medium ${selectedType.id === subType.id
                    ? "text-orange-400"
                    : "text-gray-400"
                    } is-xmedium cursor-pointer`}
                >
                  {subType.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderMobileSelect = () => (
    <div className="block md:hidden">
      <select
        className="is-h4 font-normal text-gray-900 mb-8 w-full truncate outline-none"
        value={selectedType.value}
        onChange={handleSelectChange}
      >
        {productTypeFilter.map((type) => (
          <React.Fragment key={type.id}>
            <option
              value={type.value}
              className="is-xmedium font-normal text-gray-900 mb-8 w-full truncate"
            >
              {type.label}
            </option>
            {type.subTypes?.map((subType) => (
              <option
                key={subType.id}
                value={subType.value}
                className="is-xmedium font-normal text-gray-900 mb-8 w-full truncate"
              >
                {subType.label}
              </option>
            ))}
          </React.Fragment>
        ))}
      </select>
    </div>
  );

  const renderProducts = () => (
    <div className="flex flex-wrap gap-6">
      {selectedTypeProducts.map((product: Product, index: number) => {
        const isSubType = selectedType.value === "ROLETES";
        return (
          <div
            className="flex flex-col gap-2 w-[434px] cursor-pointer"
            key={index}
            onClick={() => {
              if (isSubType) {
                const subType = productTypeFilter
                  .find((type) => type.value === selectedType.value)
                  ?.subTypes?.find((sub) => sub.label === product.label);
                handleTypeSelect(
                  subType || { id: 1, label: "Roletes", value: "ROLETES" }
                );
              } else {
                handleProductSelect(product);
              }
            }}
          >
            <Image
              src={`/images/products/${selectedType.value.toLowerCase()}/img-${product.id
                }.jpg`}
              alt="Produto"
              className="w-[434px] h-[251px] object-cover"
              width={434}
              height={251}
            />
            <h5 className="is-h5 font-normal text-gray-900">{product.label}</h5>
          </div>
        );
      })}
    </div>
  );

  const renderProductModal = () => (
    <Dialog open={isOpen} onOpenChange={(e) => setIsOpen(e)} modal>
      <DialogOverlay className="bg-[#000] opacity-80">
        <DialogContent
          style={{
            backgroundImage: `url('/images/products/${selectedType.value.toLowerCase()}/img-${selectedProduct.id
              }.jpg')`,
          }}
          className={`bg-cover bg-center max-w-[960px] h-[540px] p-0 border-none`}
        >
          <DialogFooter className="mt-auto bg-[#191919] bg-opacity-80 p-6 text-white-100 flex sm:justify-between sm:items-center">
            <h5 className="z-10 is-h5 font-normal">{selectedProduct.label}</h5>
            <Button
              className="bg-orange-500 opacity-100 w-full sm:w-80 h-16 rounded-2xl is-xmedium text-white flex items-center justify-center gap-4 z-10"
              type="button"
              onClick={() => {
                router.push("/contato");
              }}
            >
              Entre em contato conosco
              <MoveRight />
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );

  return (
    <div className="max-w-screen-xl m-auto w-full mt-14 sm:mt-10 px-4 sm:mb-14">
      <h3 className="is-h3 font-normal text-gray-900">Produtos CRISGUI</h3>
      <div className="flex flex-col md:flex-row justify-between mt-14 md:gap-10">
        <div className="flex gap-6">
          <div className="flex flex-col md:flex-row">
            {renderDesktopFilter()}
          </div>
          <hr className="hidden md:block left-0 top-0 h-full w-[1px] bg-gray-300" />
        </div>
        <div className="w-full">
          {renderMobileSelect()}
          <h4 className="is-h4 font-normal text-gray-900 mb-8 hidden md:block">
            {selectedType.label}
          </h4>
          {loading ? (
            <div className="flex items-center justify-center mt-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-orange-400 border-solid"></div>
            </div>
          ) : (
            renderProducts()
          )}
        </div>
      </div>

      {renderProductModal()}
    </div>
  );
}
