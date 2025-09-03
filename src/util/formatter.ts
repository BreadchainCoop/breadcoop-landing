export const formatSupply = (value: number) => {
  const supplyFormatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    minimumIntegerDigits: 1,
    useGrouping: true,
  });

  return supplyFormatter.format(value);
}
