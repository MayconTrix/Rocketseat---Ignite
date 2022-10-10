import { CompleteOderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CompleteOrderContainer } from "./styles";

export function CompleteOderPage() {
  return (
    <CompleteOrderContainer className="container">
      <CompleteOderForm />
      <SelectedCoffees />
    </CompleteOrderContainer>
  );
}
