import { memo } from "react";

type Props = {
  onFetch: () => Promise<void>;
};

const GetProductsButton = memo(({ onFetch }: Props) => {
  console.log("Rendered Button Component");
  return <button onClick={onFetch}>Fetch products</button>;
});

export default GetProductsButton;
