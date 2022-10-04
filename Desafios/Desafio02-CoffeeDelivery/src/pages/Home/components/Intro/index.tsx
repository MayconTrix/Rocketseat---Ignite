import { IntroContainer, IntroContent } from "./styles";
import introImg from "../../../../assets/introImagem.png";

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section></section>
        </div>
        <img src={introImg} />
      </IntroContent>
    </IntroContainer>
  );
}
