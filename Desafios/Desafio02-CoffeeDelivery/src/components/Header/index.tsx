import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles";
import coffeeLogoImg from "../../assets/coffeeDeliveryLogo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={coffeeLogoImg} />
        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Curitiba, PR
          </HeaderButton>
          <HeaderButton variant="yellow">
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  );
}
