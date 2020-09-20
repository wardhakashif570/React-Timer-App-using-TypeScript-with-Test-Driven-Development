import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import App from "./App";
import Timer from "../Timer/Timer";


describe("App", () => {
  let container: ShallowWrapper;

  beforeEach(() => (container = shallow(<App />)));

  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(1);
  });

  it("should render the Timer component", () => {
    expect(container.containsMatchingElement(<Timer/>)).toEqual(true);
  });
});