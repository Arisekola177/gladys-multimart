
  
  const FormattedPrice = ({ amount }) => {
    const formattedAmount = new Number(amount).toLocaleString("en-NA", {
      style: "currency",
      currency: "NRA",
      maximumFractionDigits: 2,
    });
    return <span>{formattedAmount}</span>;
  };
  
  export default FormattedPrice;