import CustomCarousel from "../components/CustomCarousel";
import QuoteHeader from "../components/topbars/QuoteHeader";

//Made by Thea
interface FrontPageProps {
  headline: string;
  endpoint: string;
}

function FrontPage({ headline, endpoint }: FrontPageProps) {
  {
    return (
      <>
        <QuoteHeader
          quote={`"Et sundt smil starter her – med produkter skabt til at løfte din tandplejeoplevelse. Vi er dedikeret til at levere kvalitet og innovation, så du kan nyde et smil, der holder livet ud."`}
        />
        <div className="mt-4">
          <h1 className="mb-4 text-center">{headline}</h1>
          <CustomCarousel endpoint={endpoint} />
        </div>
      </>
    );
  }
}
export default FrontPage;
