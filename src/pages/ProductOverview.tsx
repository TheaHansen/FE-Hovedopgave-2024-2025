import ProductContainer from "../components/product/ProductContainer";
import CustomBreadcrumb from "../components/breadcrumb/Breadcrumb";
import FilterDropdown from "../components/Dropdown";
import { useSearchParams } from "react-router-dom";
import CustomBreadcrumbItem from "../components/breadcrumb/Breadcrumb.interfaces";

interface ProductOverviewProps {
  headline: string;
  endpoint: string;
  breadcrumbItems?: CustomBreadcrumbItem[];
}

function ProductOverview({
  headline,
  endpoint,
  breadcrumbItems,
}: ProductOverviewProps) {
  {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");
    console.log(query);
    const dynamicEndpoint = query
      ? `products/search?name=${encodeURIComponent(query)}`
      : endpoint;
    return (
      <div className="container mt-4">
        {breadcrumbItems && <CustomBreadcrumb items={breadcrumbItems} />}
        <h1 className="mb-4" data-testid="headline">
          {headline}
        </h1>
        <div className="d-flex">
          <FilterDropdown
            title="Lager status"
            dropdownLabels={["På lager", "Ikke på lager"]}
          />
          <FilterDropdown
            title="Kategori"
            dropdownLabels={["Tøj", "Tilbud", "Bor", "Dekoration"]}
          />
        </div>
        {query === "notfound" ? (
          <>Ingen søgeresultater</>
        ) : (
          <ProductContainer endpoint={dynamicEndpoint} />
        )}
      </div>
    );
  }
}
export default ProductOverview;
