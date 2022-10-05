import { CompleteOderForm } from "./components/CompleteOrderForm";
import { CompleteOrderContainer } from "./styles";

export function CompleteOderPage() {
  return (
    <CompleteOrderContainer className="container">
      <CompleteOderForm />
    </CompleteOrderContainer>
  );
}
