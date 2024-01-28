import { render } from "@testing-library/react"
import { FormBackground } from "."


describe("FormBackground", () => {
  it("renders correctly", () => {
    render(<FormBackground form={(<></>)} />)
  })
    
    it('should render the FormBackground', () => {
        const { getByTestId } = render(<FormBackground form={(<></>)}/>)
        const formbackground = getByTestId("formbackground-testid")
        expect(formbackground).toBeInTheDocument()
    })

    it('should render the Image of FormBackground', () => {
        const { getByTestId } = render(<FormBackground form={(<></>)}/>)
        const image = getByTestId("image-testid")
        expect(image).toBeInTheDocument()
    })
    
    // it('should render the Image with the correct url', () => {
    //     const { getByTestId } = render(<FormBackground form={(<></>)}/>)
    //     const image = getByTestId("image-testid")
    //     expect(image).toHaveStyle(`background-image: url('/bg-igma.jpg')`)
    // })
})
