import { StockText } from "./StockText.enum";

function StockStatus({
  stockStatusFromProduct,
}: {
  stockStatusFromProduct: string;
}) {
  const getColorForStatus = (stockStatus: string) => {
    switch (stockStatus) {
      case StockText.InStock:
        return "green";
      case StockText.OutOfStock:
        return "red";
      default:
        return "gray";
    }
  };

  const getTextForStatus = (stockStatus: string) => {
    switch (stockStatus) {
      case StockText.InStock:
        return "På lager";
      case StockText.OutOfStock:
        return "Ikke på lager";
      default:
        return "Error";
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center p-2"
      data-testid="product-card-stock-status"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="9"
        fill={getColorForStatus(stockStatusFromProduct)}
        className="bi bi-circle-fill mt-1 me-1 align-self-center"
        viewBox="0 0 16 16"
      >
        <circle cx="8" cy="8" r="8" />
      </svg>
      <div>{getTextForStatus(stockStatusFromProduct)}</div>
    </div>
  );
}

export default StockStatus;
