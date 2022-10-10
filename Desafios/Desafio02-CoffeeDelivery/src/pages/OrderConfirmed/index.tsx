import { RegularText, TitleText } from "../../components/Typography";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import confirmedOrderImg from "../../assets/confirmedOrder.svg";
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { InfoWithIcon } from "../../components/Header/InfoWithIcon";
import { useTheme } from "styled-components";

export function OrderConfirmedPage() {
  const { colors } = useTheme();
  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>
      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            text={
              <RegularText>
                Entrega em <strong>Rua João Daniel Martinelli, 182</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </RegularText>
            }
            iconBg={colors["brand-purple"]}
          />
          <InfoWithIcon
            icon={<Clock weight="fill" />}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
            iconBg={colors["brand-yellow"]}
          />
          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
            iconBg={colors["brand-yellow-dark"]}
          />
        </OrderDetailsContainer>
        <img src={confirmedOrderImg} />
      </section>
    </OrderConfirmedContainer>
  );
}
