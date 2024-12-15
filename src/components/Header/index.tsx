import { Container, Logo, BanckIcon, BackButton } from "./styles";
import logoImg from "@assets/logo.png";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BanckIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
