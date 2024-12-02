interface FrontPageProps {
  headline: string;
  endpoint: string;
}

function FrontPage({ headline, endpoint }: FrontPageProps) {
  {
    return (
      <div className="container mt-4">
        <h1 className="mb-4">{headline}</h1>
        <div className="d-flex"></div>
      </div>
    );
  }
}
export default FrontPage;
