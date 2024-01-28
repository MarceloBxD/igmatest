import { render } from "@testing-library/react"
import { Button } from "."

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button />)
  })

  it("should render the button", () => {
    const { getByTestId } = render(<Button />)
    const button = getByTestId("button-testid")
    expect(button).toBeInTheDocument()
  })

  it("should render title correctly", () => {
    const { getByTestId } = render(<Button title="test" />)
    const button = getByTestId("button-testid")
    expect(button).toHaveTextContent("test")
  })
})
