##Front End Depolyemt
https://soft-sawine-ecb1a3.netlify.app/

To take the shoe website a step further and simulate a more complete e-commerce flow, I introduced a payment feature using React’s Context API. Here are the core enhancement decisions made during this process:

Used React Context API for Centralized Cart State Management:
I decided to manage the shopping cart state using the Context API so that both the Cart page and the newly added Payment page can access and manipulate the same shared cart data without prop-drilling. This made the architecture cleaner and more scalable.

Implemented a “Proceed to Payment” Navigation Flow:
A dedicated button labeled “Proceed to Payment” was added to the shopping cart. Clicking this button routes the user to the /payment page using React Router. This decision allows for a clear separation between browsing and checkout logic.

Created a Separate Payment Page Component:
I built a new page component where users can:

Review cart contents (fetched via Context).

Access an option to return to the cart to make changes before paying.

Fill out a credit card form (mock UI) for completing the payment process.

Maintained Cart Data Consistency Between Pages:
Thanks to the Context API, any updates in the cart (like adding/removing items) are reflected immediately across all components, including the payment screen. This helps avoid redundancy and potential bugs due to duplicated state.

Built a Basic Credit Card Form for UX Demonstration:
A mock form was added to simulate credit card entry. Although not connected to a real payment gateway, it serves as a UI placeholder for future integration.

Prioritized Navigation Flexibility and User Control:
The payment page includes a button to return to the shopping cart—a small but intentional UX choice that allows users to modify their cart without losing progress in the checkout process.
