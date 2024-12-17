import CustomBreadcrumb from "../components/Breadcrumb";

interface AboutUsProps {
  breadcrumbItems: string[];
}

function AboutUs({ breadcrumbItems }: AboutUsProps) {
  return (
    <div className="container mt-4 mb-4">
      {breadcrumbItems && <CustomBreadcrumb items={breadcrumbItems} />}
      <div className="d-flex flex-column gap-5">
        <div>
          <h1 className="mb-4" data-testid="headline">
            Din partner inden for tandlægeudstyr
          </h1>
          <span>
            Hos Odontologic har vi en passion for at levere professionelt udstyr
            og pålidelige instrumenter til tandlægeklinikker i hele landet. Vi
            ved, hvor vigtigt det er at kunne stole på sit udstyr i en travl
            klinikhverdag, og derfor har vi gjort det til vores mission at
            tilbyde produkter, der kombinerer høj kvalitet, brugervenlighed og
            holdbarhed. Med et bredt sortiment og fokus på service er vi her for
            at sikre, at du altid har det bedste udstyr til rådighed. Uanset om
            du leder efter avancerede tandlægeinstrumenter, sterilisationsudstyr
            eller forbrugsartikler til daglig brug, finder du det hele samlet ét
            sted hos os. Vi samarbejder med nogle af branchens mest anerkendte
            producenter og leverer kun løsninger, der opfylder strenge
            kvalitetskrav.
          </span>
        </div>
        <div>
          <h2>Kvalitet, du kan stole på</h2>
          <span>
            Kvalitet og pålidelighed er hjørnestenene i vores udvalg. Alle vores
            produkter er nøje udvalgt og gennemtestet for at sikre, at de lever
            op til de højeste standarder. Vi ved, at hver enkelt detalje tæller,
            når det handler om præcision og patientpleje, og derfor går vi
            aldrig på kompromis. Med vores udstyr får du ikke kun høj ydeevne,
            men også lang levetid og ergonomisk design, som gør hverdagen
            lettere for dig og dit team. Uanset om du driver en mindre klinik
            eller en større praksis, kan du stole på, at vores løsninger lever
            op til dine forventninger – hver gang.
          </span>
        </div>
        <div className="d-flex flex-column">
          {/* h2 at the top */}
          <h2 className="mb-3">
            Din tid er vigtig – vi gør det nemt at handle
          </h2>

          {/* Content in a row layout */}
          <div className="d-flex justify-content-between align-items-start">
            {/* Span text on the left */}
            <span className="w-75">
              Hos Odontologic forstår vi, at tid er en værdifuld ressource.
              Derfor har vi gjort det nemt og hurtigt at finde og bestille det
              udstyr, du har brug for. Vores brugervenlige webshop er designet
              til at give dig en problemfri oplevelse, hvor du kan finde de
              rigtige produkter på få minutter. Vi tilbyder hurtig levering og
              konkurrencedygtige priser, så du altid kan holde din klinik i
              drift uden forsinkelser. Skulle du have spørgsmål eller brug for
              rådgivning, står vores kompetente kundeserviceteam altid klar til
              at hjælpe dig med at finde den bedste løsning.
            </span>

            <div style={{ marginRight: "5rem" }}>
              <img
                src="../images/logo/iso_fake.jpg"
                alt="fake-iso-logo"
                className="img-fluid"
                style={{
                  height: "200px",
                  marginTop: "-70px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
