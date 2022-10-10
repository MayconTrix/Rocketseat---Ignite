import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from "./styles";
import { Trash } from "phosphor-react";

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1666569600&Signature=NUgPNDu-210vgLAekY86HMKADP1I0wtpMrWoOFuVJEQL5iGXd6ATOD~udJnpGxvWNHoFHIDgK0roE2PkAHkPsVqnltrJo8xfpnZjvMxXEIgd3KHIh4crV0LSETQR61moiow8JTGdYR7i~8aF-2K-oSZv~4PjDdgtMZKC6e0scTSebxirOec20NjFMMDWKUlRgd7x3~fme6MR4~09FiJRQTZC9IavlGUyIENntKENxU1AnnH3Myky87y8btjIDLGiYcZqekblmxuqEr393uTnPecxta-dFWI-KzAeYyZAkdNypJS9~Lvwcbk9LaKeKpuv6EKHJ0ZVMoTDxyibQXQWRQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ 9,90</p>
    </CoffeeCartCardContainer>
  );
}
