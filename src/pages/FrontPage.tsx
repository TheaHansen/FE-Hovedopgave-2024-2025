import QuoteHeader from "../components/topbars/QuoteHeader";

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
        <div className="container mt-4">
          <h1 className="mb-4">{headline}</h1>
        </div>
      </>
    );
  }
}
export default FrontPage;
