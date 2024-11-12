/* eslint-disable no-param-reassign */
import * as React from "react";

// R$ 10.000,00
export const maskMoney = (value: string) =>
  value
    .replace(/\D/g, "")
    .replace(/\D/g, ".")
    .replace(/(\d)(\d{2})$/, "$1,$2")
    .replace(/(?=(\d{3})+(\D))\B/g, ".");

// 000.000.000-00
export const maskCPF = (value: string) =>
  value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");

// 00.000.000/0000-000
export const maskCNPJ = (value: string) =>
  value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d{2})/, "$1-$2");

// 000.000.000-00 or 00.000.000/0000-000
export const maskCPFOrCNPJ = (value: string) => {
  if (value.length >= 15) {
    return maskCNPJ(value);
  }
  return maskCPF(value);
};

// (00) 00000-0000
export const maskPhone = (value: string) =>
  value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{4})/, "$1-$2");

// (00) 0000-0000
export const maskLandlineTelephone = (value: string) =>
  value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4})(\d{4})/, "$1-$2");

// 00000-000
export const maskCEP = (value: string) =>
  value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2");

// 00/00/0000
export const maskDate = (value: string) =>
  value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1");

export const maskOnlyLetters = (value: string) =>
  value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");

export const maskOnlyNumbers = (value: string) => value.replace(/\D/g, "");

export type MaskTypes =
  | "cpf"
  | "cnpj"
  | "cpf_cnpj"
  | "cep"
  | "date"
  | "phone"
  | "landlineTelephone"
  | "money"
  | "onlyLetters"
  | "onlyNumbers"
  | "phoneAndLandlineTelephone";

type Masks = {
  [key in MaskTypes]: {
    maskEvent: (event: React.FormEvent<HTMLInputElement>) => string;
    maskRegex: (value: string) => string;
  };
};

const masks: Masks = {
  money: {
    maskEvent: (event: React.FormEvent<HTMLInputElement>) =>
      maskMoney(event.currentTarget.value),
    maskRegex: maskMoney,
  },
  cpf: {
    maskEvent: (event: React.FormEvent<HTMLInputElement>) => {
      event.currentTarget.maxLength = 15;
      return maskCPF(event.currentTarget.value);
    },
    maskRegex: maskCPF,
  },
  cnpj: {
    maskEvent: (event: React.FormEvent<HTMLInputElement>) => {
      event.currentTarget.maxLength = 18;
      return maskCNPJ(event.currentTarget.value);
    },
    maskRegex: maskCNPJ,
  },
  cpf_cnpj: {
    maskEvent: (event: React.FormEvent<HTMLInputElement>) => {
      event.currentTarget.maxLength = 18;
      return maskCPFOrCNPJ(event.currentTarget.value);
    },
    maskRegex: maskCPFOrCNPJ,
  },
  phone: {
    maskEvent: (event: React.FormEvent<HTMLInputElement>) => {
      event.currentTarget.maxLength = 15;
      return maskPhone(event.currentTarget.value);
    },
    maskRegex: maskPhone,
  },
  landlineTelephone: {
    maskEvent: (event: React.FormEvent<HTMLInputElement>) => {
      event.currentTarget.maxLength = 14;
      return maskLandlineTelephone(event.currentTarget.value);
    },
    maskRegex: maskLandlineTelephone,
  },
  cep: {
    maskEvent: (event: React.FormEvent<HTMLInputElement>) => {
      event.currentTarget.maxLength = 9;
      return maskCEP(event.currentTarget.value);
    },
    maskRegex: maskCEP,
  },
  date: {
    maskEvent: (event: React.FormEvent<HTMLInputElement>) => {
      event.currentTarget.maxLength = 10;
      return maskDate(event.currentTarget.value);
    },
    maskRegex: maskDate,
  },
  onlyLetters: {
    maskEvent: (event: React.FormEvent<HTMLInputElement>) =>
      maskOnlyLetters(event.currentTarget.value),
    maskRegex: maskOnlyLetters,
  },
  onlyNumbers: {
    maskEvent: (event: React.FormEvent<HTMLInputElement>) =>
      maskOnlyNumbers(event.currentTarget.value),
    maskRegex: maskOnlyNumbers,
  },
  phoneAndLandlineTelephone: {
    maskEvent: (event: React.FormEvent<HTMLInputElement>) => {
      const clearedValue = event.currentTarget.value.replace(/\D/g, "");
      event.currentTarget.maxLength = 15;
      if (clearedValue.length <= 10) {
        return maskLandlineTelephone(event.currentTarget.value);
      }
      return maskPhone(event.currentTarget.value);
    },
    maskRegex: (value: string) => {
      console.log(value);
      if (value.length <= 14) {
        return maskPhone(value);
      }
      return maskLandlineTelephone(value);
    },
  },
};

export default masks;
