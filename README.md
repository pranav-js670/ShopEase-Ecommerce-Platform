# ShopEase Ecommerce Website

### Description

**ShopEase** is a full-fledged eCommerce website built with the MERN (MongoDB, Express, React, Node.js) stack. This platform provides seamless online shopping experiences for users and includes an admin dashboard to manage products with features like adding, updating, deleting, and viewing product details. The project integrates secure payment processing using Braintree, real-time form validation, pagination, filtering, and sorting of products. It also includes basic SEO optimization for enhanced discoverability and an overall modern and responsive UI.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [License](#license)

---

## Features

### User Side
- **Product Browsing**: Users can browse through different categories of products.
- **Search & Filtering**: Search products by name and filter based on categories, price, and rating.
- **Product Details**: Detailed product pages showing descriptions, ratings, and prices.
- **Pagination**: Products are paginated to provide a smooth browsing experience.
- **User Authentication**: Users can register and log in to their accounts to manage their orders.
- **Secure Payment Gateway**: Integrated with Braintree for secure online payments.

### Admin Side
- **Admin Dashboard**: Manage products, categories, and view orders from customers.
- **CRUD Operations**: Add, update, delete, and view products.
- **Real-Time Form Validation**: Form validation during product addition and updates.
- **Upload Images**: Admin can upload product images while adding new products.
- **Order Management**: Admin can track and manage user orders.

---

## Technologies Used

### Frontend (Client)
- **React.js**: For building the interactive UI.
- **React Router DOM**: For routing between different pages.
- **Ant Design**: For sleek and responsive UI components.
- **Axios**: To handle HTTP requests.
- **React Helmet**: For managing document head and basic SEO optimization.
- **React Toastify** and **React Hot Toast**: For showing real-time notifications.
- **Bootstrap**: For additional styling and responsive design.
- **Braintree Web Drop-in**: For secure payment processing.

### Backend (Server)
- **Node.js**: As the server-side runtime environment.
- **Express.js**: For handling server-side routing.
- **MongoDB**: As the NoSQL database to store product and user data.
- **Mongoose**: For MongoDB object modeling.
- **Braintree**: For handling secure payments.
- **JWT (JSON Web Token)**: For authentication and authorization.
- **bcrypt**: For hashing user passwords.
- **Slugify**: To create URL-friendly slugs for product names.
- **Morgan**: HTTP request logger middleware.
- **Express Formidable**: For handling form data and file uploads.

---

## Installation and Setup

### Prerequisites

- **Node.js** (v16.0.0 or higher)
- **MongoDB** (local or cloud-based)
- **Braintree** account for payment integration.

### Clone the Repository

```bash
https://github.com/pranav-js670/ShopEase-Ecommerce-Platform.git
cd ShopEase-Ecommerce-Platform
```

## Install Dependencies

# Client-side

Navigate to the client folder:

```bash
cd client
npm install
```

# Server-side

Navigate to the server folder:

```bash
cd ../server
npm install
```

## Usage

### User Registration and Login
Users can sign up for a new account or log in to an existing account. Authentication is handled using JWT (JSON Web Token).

### Browse Products
Users can browse products by categories, filter, and search based on product name and price. Pagination is implemented to display products page by page.

### Secure Payments
Users can add products to the cart and proceed with a secure checkout process using Braintree.

### Admin Features
Admins can manage all products from a dedicated dashboard. They can add new products, update existing ones, delete products, and view orders.

## License

This project is licensed under the MIT License.

