import * as S from './styles';

const Main = ({
  title = 'React Avançado',
  description = 'Typescription, React.js, Next.js e Styled Components'
}) => {
  return (
    <S.Wrapper>
      <h1>hello world</h1>
      <S.Logo
        src="img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
        width="200"
        height="200"
      />

      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>

      <S.Illustration
        src="img/hero-illustration.svg"
        alt="Um Desenvolverdor de frente para uma tela de código"
        width="200"
        height="200"
      />
    </S.Wrapper>
  );
};

export default Main;
