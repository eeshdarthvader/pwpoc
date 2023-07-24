/**
 * create a react component called Footer that renders a footer element with the text "All rights reserved" inside of it. 
 * Export the component from the file. 
 * It should stick to the bottom of the page. 
 * Use CSS from Tailwind to style the footer. 
 * The footer should be 100% width and 100px height. 
 * It should have a background color of #333333. 
 * The text should be white and centered. 
 * The text should be 20px font size. 
 * The text should be vertically centered.
 * Include scalable capital logo in the footer
 */

export const Footer = () => {
    return (
        <footer className="bg-[#333333] h-[100px] flex justify-center items-center">
        <img src="/images/scalable-capital-logo.svg" alt="scalable capital logo" className="h-[50px] w-[auto]"/>
        </footer>
    )
}
