const formatCurrency = (current: number): string => {
  return current.toLocaleString("pt-Br", {
    style: "currency",
    currency: "BRL",
  });
};

export default formatCurrency;
