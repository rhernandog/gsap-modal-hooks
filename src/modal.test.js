import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from "./App";

test("Toggles the modal", () => {
	const { getByText, getByTestId } = render(<App />);
	const showBtn = getByText("Show Modal");
	const modalVeil = getByTestId("modalVeil");
	const modalContent = getByTestId("modalContent");
	const closeBtn = getByText("Close Modal");

	expect(showBtn).toBeInTheDocument();
	// Click show button
	fireEvent.click(showBtn);
	expect(modalContent).toHaveAttribute("aria-hidden", "false");
	// Hide clicking the close button
	fireEvent.click(closeBtn);
	expect(modalContent).toHaveAttribute("aria-hidden", "true");
	// Hide the modal clicking in the veil
	fireEvent.click(showBtn);
	fireEvent.click(modalVeil);
	expect(modalContent).toHaveAttribute("aria-hidden", "true");
});
