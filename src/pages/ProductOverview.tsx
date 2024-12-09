import ProductContainer from "../components/product/ProductContainer";
import CustomBreadcrumb from "../components/Breadcrumb";
import FilterDropdown from "../components/Dropdown";

interface ProductOverviewProps {
  headline: string;
  endpoint: string;
  breadcrumbItems?: string[];
}

function ProductOverview({
  headline,
  endpoint,
  breadcrumbItems,
}: ProductOverviewProps) {
  {
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
        <ProductContainer endpoint={endpoint} />
      </div>
    );
  }
}
export default ProductOverview;
