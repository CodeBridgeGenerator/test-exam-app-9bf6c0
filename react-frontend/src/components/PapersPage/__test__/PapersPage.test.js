import React from "react";
import { render, screen } from "@testing-library/react";

import PapersPage from "../PapersPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders papers page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PapersPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("papers-datatable")).toBeInTheDocument();
    expect(screen.getByRole("papers-add-button")).toBeInTheDocument();
});
