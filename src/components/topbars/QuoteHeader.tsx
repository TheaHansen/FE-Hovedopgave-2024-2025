function QuoteHeader({ quote }: { quote: string }) {
  return (
    <div
      className="border-bottom border-dark-subtle text-center"
      style={{
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span
        style={{
          display: "inline-block",
          maxWidth: "700px",
          wordWrap: "break-word",
          whiteSpace: "normal",
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        {quote}
      </span>
    </div>
  );
}
export default QuoteHeader;
