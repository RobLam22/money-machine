import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../../context/AuthContext";
import Signup from "../../components/Signup";
import TextProcessor from "../../components/TextProcessor";
import BlogPostWriter from "./BlogPostWriter";

it("Should allow user to input their username", async () => {
  const user = userEvent.setup();
  render(
    <BrowserRouter>
      <BlogPostWriter>
        <TextProcessor />
      </BlogPostWriter>
    </BrowserRouter>
  );
  const input = screen.getByPlaceholderText(
    "Describe the blog post you want to create. eg A blog article explaining how AI writing tools can boost engagement with your content"
  );
  await user.click(input);
  await user.keyboard("Testing Username");
  expect(input.value).equals("Testing Username");
});
