import { render } from "@testing-library/react"
import { Form } from "."


describe("Form", () => {
  it("renders correctly", () => {
    render(<Form />)
  })

  it("should render the Form", () => {
    const { getByTestId } = render(<Form/>)
    const form = getByTestId("form-testid")
    expect(form).toBeInTheDocument()
  })
    
    it('should render the Button of Form', () => {
        const { getByTestId } = render(<Form/>)
        const button = getByTestId("form-button-testid")
        expect(button).toBeInTheDocument()
    })
    
    it('should render 3 Inputs in Form', () => {
        const { getAllByTestId } = render(<Form/>)
        const inputs = getAllByTestId("input-testid")
        expect(inputs.length).toBe(3)
    })
})
