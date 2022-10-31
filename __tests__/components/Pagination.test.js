import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Pagination from "../../components/Pagination";

const mockedOnNextClick = jest.fn(() => {});
const mockedOnPreviousClick = jest.fn(() => {});
const mockedOnPerPageChange = jest.fn(() => {});

describe("Pagination", () => {
  beforeEach(() => {
    render(
      <Pagination
        page={1}
        perPage={20}
        onNextClick={mockedOnNextClick}
        onPreviousClick={mockedOnPreviousClick}
        onPerPageChange={mockedOnPerPageChange}
      />
    );
  });

  it("it renders the Pagination component", () => {
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });

  describe("with current page being the first one", () => {
    it("should not be able to call the previous page handler", async () => {
      await waitFor(() => {
        fireEvent.click(screen.getByRole("button", { name: "Previous page" }));
      });

      await waitFor(() => {
        const mockedCalls = mockedOnPreviousClick.mock.calls;

        expect(mockedCalls.length).toBe(0);
      });
    });
  });

  it("should be able to call the next page handler", async () => {
    await waitFor(() => {
      fireEvent.click(screen.getByRole("button", { name: "Next page" }));
    });

    await waitFor(() => {
      const mockedCalls = mockedOnNextClick.mock.calls;

      expect(mockedCalls.length).toBe(1);
    });
  });

  it("should be able to change the page size", async () => {
    await waitFor(() => {
      fireEvent.change(
        screen.getByRole("combobox", { name: "Change page size" }),
        { target: { value: "50" } }
      );
    });

    await waitFor(() => {
      const mockedCalls = mockedOnPerPageChange.mock.calls;

      expect(mockedCalls.length).toBe(1);
    });
  });
});
