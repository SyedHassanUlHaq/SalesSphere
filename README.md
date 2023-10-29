# SalesSphere - Ecommerce Website

SalesSphere is a fully-featured Ecommerce website built with Django and Bootstrap templates. It includes three key modules: a blog page, a shopping cart, and an online shop. This project incorporates a Django admin panel for easy management, integrated payment methods, a functional shopping cart, and an order tracking system.

## Table of Contents

- [SalesSphere - Ecommerce Website](#salessphere---ecommerce-website)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- **Shop Module**: Browse and purchase products from the online store, with product details, images, and prices.
- **Cart**: Add, remove, and manage items in your shopping cart, with real-time updates of the cart total.
- **Order Tracker**: Track the status of your orders, from placement to delivery.
- **Blog**: Read and create blog posts to engage with the community.
- **Django Admin Panel**: Easily manage products, orders, and blog posts through the Django admin interface.
- **Payment Integration**: Secure payment methods for a smooth shopping experience.

## Installation

To run the SalesSphere project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/SalesSphere.git
    ```
2. Navigate to the project directory:

   ```bash
   cd SaleSphere
    ```

   ```bash
   cd mac
    ```
3. Create a virtual environment (recommended):

   ```bash
   python3 -m venv venv
    ```

4. Activate the virtual environment:
   1. On macOS and Linux:
        ```bash
        python3 -m venv venv
        ```
   2. On Windows:
        ```bash
        venv\Scripts\activate
        ```

5. Install the project dependencies:
   
    ```bash
    pip install -r requirements.txt
    ```

6. Apply database migrations:

    ```bash
    python3 manage.py migrate
    ```

7. Create a superuser for the Django admin panel:

    ```bash
    python3 manage.py createsuperuser
    ```

8. Start the development server:

    ```bash
    python3 manage.py runserver
    ```

## Usage

1. To access the Django admin panel, go to [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/) and log in using the superuser credentials you created earlier.

2. Explore the shop, add items to your cart, and proceed to checkout.

3. Write and read blog posts to engage with the community.

4. Track the status of your orders in real time.


## Contributing

Contributions to SalesSphere are welcome. If you'd like to contribute, please follow these guidelines:

1. Fork the repository on GitHub.

2. Create a new branch from the `main` branch for your feature or bug fix.

3. Make your changes, commit them, and push to your fork.

4. Submit a pull request to the original repository.

5. Ensure your code follows best practices and is well-documented.


## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify it for your needs.
