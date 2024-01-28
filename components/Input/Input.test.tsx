import { render } from "@testing-library/react"
import { Input } from "."
import { UseFormRegisterReturn, FieldName, FieldValue } from "react-hook-form"
import { InputProps } from "./Input.component"

const props: InputProps = {
  errors: {},
  label: "Nome",
  name: "name",
  masked: false,
  register: () =>
    ({
      ref: () => {},
      onBlur: () => {},
      onChange: () => {},
      name: "name",
      value: "value",
    } as unknown as UseFormRegisterReturn<FieldValue<any>>),
}

describe("Input", () => {
  it("renders correctly", () => {
    render(<Input {...props} />)
  })
    
    it('should render the Input', () => {
        const { getByTestId } = render(<Input {...props}/>)
        const input = getByTestId("input-testid")
        expect(input).toBeInTheDocument()
    })
    
    it('should render the Input with the correct label', () => {
        const { getByText } = render(<Input {...props}/>)
        const label = getByText("Nome")
        expect(label).toBeInTheDocument()
    })
    
    it('should render the Masked Input', () => {
        const { getByTestId } = render(<Input {...props} masked={true}/>)
        const input = getByTestId("input-mask-testid")
        expect(input).toBeInTheDocument()
    })
    
    it('should render the Input with error', () => {
        const { getByTestId } = render(<Input {...props} errors={{name: {message: "error"}}}/>)
        const input = getByTestId("error-testid")
        expect(input).toBeInTheDocument()
    })
})
