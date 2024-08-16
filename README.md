# GadgetGlobe

GadgetGlobe is an online electronics store built using React. It allows users to browse and purchase a wide range of electronic products such as laptops, phones, tablets, and accessories. The app provides features like product filtering by categories, a shopping cart, and order placement.

## Features

- **Home Page:** Browse featured products and explore different categories.
- **Product Categories:** View and filter products based on categories like MacBook, iPhone, Laptops, etc.
- **Shopping Cart:** Add and remove items from the cart, view cart details, and proceed to checkout.
- **Order Placement:** Place orders for products in the cart.
- **User Authentication:** Popup login functionality for user authentication.
- **Responsive Design:** Optimized for various screen sizes.

## Project Structure

- **`assets/`:** Contains images and icons used throughout the application.
- **`components/`:** Reusable UI components like Navbar, Footer, ProductDisplay, etc.
- **`context/`:** Contains the StoreContext which manages the global state of the app.
- **`pages/`:** Main pages such as Home, Cart, and Place Order.
- **`App.jsx`:** Main component that sets up routes and layout.
- **`main.jsx`:** Entry point of the application.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/iamanrajput/gadgetglobe.git
   cd gadgetglobe

2. **Install Dependencies:**

  ```bash
  npm install
  ```
3. **Run the Application:**

  ```bash
  npm start
  ```
### This will start the development server and open the app in your default browser.

## Usage
- Browsing Products: Navigate through different categories and explore products.
- Adding to Cart: Click on the "Add to Cart" button to add items to your shopping cart.
- Viewing Cart: Go to the Cart page to review items and proceed to checkout.
- Placing Orders: Once satisfied with the cart items, proceed to place an order.
  
## Components Overview
- Navbar: Displays the navigation menu and search bar.
- Footer: Contains links to social media and other resources.
- ProductDisplay: Shows a list of products in the selected category.
- ProductItem: Individual product item component.
- LoginPopup: Popup for user login.
- Context API

#### The app uses React's Context API to manage global state such as the shopping cart and user authentication status.

## Future Enhancements
- User Accounts: Add user registration and profile management.
- Payment Integration: Integrate payment gateways for order completion.
- Order History: Allow users to view their order history.
  
## License
This project is licensed under the MIT License. See the LICENSE file for more details.
