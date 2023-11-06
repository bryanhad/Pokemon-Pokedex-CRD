import Container from "./Container";

export default function Title({children}) {
  return (
    <Container>
        <h1 className="text-xl font-semibold">{children}</h1>
    </Container>
  )
}
