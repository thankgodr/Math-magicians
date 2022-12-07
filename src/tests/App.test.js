import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import App from "../App";

describe("Testing snapshot of App", () => {
  test("Snapshot of App view", () => {
    const elem = renderer
      .create(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
