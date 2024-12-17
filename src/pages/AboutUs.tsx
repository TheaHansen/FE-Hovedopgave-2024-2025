import CustomBreadcrumb from "../components/Breadcrumb";

interface AboutUsProps {
  breadcrumbItems?: string[];
}

function AboutUs({ breadcrumbItems }: AboutUsProps) {
  return (
    <div className="container mt-4">
      {breadcrumbItems && <CustomBreadcrumb items={breadcrumbItems} />}
      <h1 className="mb-4" data-testid="headline">
        Om os
      </h1>
    </div>
  );
}

export default AboutUs;
