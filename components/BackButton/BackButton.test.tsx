import { render } from "@testing-library/react"
import { BackButton } from "."

describe("BackButton", () => {
  it("renders correctly", () => {
    render(<BackButton />)
  })

  it("should render the back button", () => {
    const { getByTestId } = render(<BackButton />)
    const backButton = getByTestId("backbutton-testid")
    expect(backButton).toBeInTheDocument()
  })

  // when it clicks on the button, it should go back to '/'
  it('should go back to "/" when clicked', () => {
    const { getByTestId } = render(<BackButton />)
    const backButton = getByTestId("backbutton-testid")

    backButton.click()
    expect(window.location.pathname).toBe("/")
  })
})
