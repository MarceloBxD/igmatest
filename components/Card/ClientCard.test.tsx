import { render } from "@testing-library/react"
import { ClientCard } from "."

const clientData = {
  name: "Marcelo Bracet",
  cpf: "191.435.457-50",
  birthday: "15/01/2002",
}

describe("ClientCard", () => {
  it("renders correctly", () => {
    render(<ClientCard clientData={clientData} />)
  })

  it("should render the ClientCard", () => {
    const { getByTestId } = render(<ClientCard clientData={clientData} />)
    const card = getByTestId("clientcard-testid")
    expect(card).toBeInTheDocument()
  })

  it("should render name correctly", () => {
    const { getByTestId } = render(<ClientCard clientData={clientData} />)
    const card = getByTestId("clientcard-testid")
    expect(card).toHaveTextContent("Marcelo Bracet")
  })

  it("should render cpf correctly", () => {
    const { getByTestId } = render(<ClientCard clientData={clientData} />)
    const card = getByTestId("clientcard-testid")
    expect(card).toHaveTextContent("191.435.457-50")
  })

  it("should render birthday correctly", () => {
    const { getByTestId } = render(<ClientCard clientData={clientData} />)
    const card = getByTestId("clientcard-testid")
    expect(card).toHaveTextContent("15/01/2002")
  })
})
