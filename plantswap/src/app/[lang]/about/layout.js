import "../globals.css";

export const metadata = {
  title: "PlantSwap",
  description: "PlantSwap, identify and swap plants with your neighbours.",
};

export default function RootLayout(props) {
  const { children, params, req } = props;

  return (
    <html lang={params.lang}>
      <body
        style={{
          scrollSnapType: "y mandatory",
          display: "flex",
          flexDirection: "column",
          overflow: "scroll",
          maxHeight: "100dvh",
        }}>
        {children}
      </body>
    </html>
  );
}
