# HackFood API Docs

## Models:

_User_

```
- discord: string, required, unique
- username: string, required
```

_Category_

```
- name: string, required
```

_Product_

```
- name: string, required
- price: integer, required
- description: string, required
- imageUrl: string, required
- CategoryId: integer, required
```

_Cart_

```
- UserId: integer, required
- ProductId: integer, required
```

## Endpoints

List of Available Endpoints
- `GET /discord-login`
- `GET /products`
- `GET /products/featured`
- `GET /categories`
- `GET /carts`
- `POST /carts/:productId`
- `DELETE /carts/:id`
- `PATCH /carts/:id`
- `POST /generate-midtrans-token`
- `DELETE /checkout`

### GET /discord-login

#### Description

> login to access cart, via discord

#### response

_201 - Created_
_200 - OK_

```json
{
    "access_token": "<jsonwebtoken>"
}
```

### GET /products

#### Description

> get all products data

#### response

_200 - OK_

```json
[
    {
        "id": 7,
        "name": "Cireng rujak",
        "price": 10000,
        "description": "Cemilan khas indonesia dengan bahan dasar aci yang di goreng",
        "imageUrl": "https://media.istockphoto.com/id/1407337463/id/foto/cireng-bandung-makanan-asia-dengan-piring-putih-dan-latar-belakang-daun.jpg?s=2048x2048&w=is&k=20&c=ptkPM79kKsu9YZ3fHCmzjZXaoF5ID9Oy0tkbXwu7YU4=",
        "CategoryId": 1,
        "createdAt": "2023-09-28T14:03:27.369Z",
        "updatedAt": "2023-09-28T14:03:27.369Z",
        "Category": {
            "id": 1,
            "name": "Cemilan",
            "createdAt": "2023-09-28T14:03:27.360Z",
            "updatedAt": "2023-09-28T14:03:27.360Z"
        }
    },
    {
        "id": 6,
        "name": "Bubur Kacang Ijo",
        "price": 10000,
        "description": "Cemilan khas indonesia dengan cita rasa manis dipadu dengan kuah santan",
        "imageUrl": "https://media.istockphoto.com/id/1456971294/id/foto/bubur-kacang-ijo-or-mungbean-porridge.jpg?s=2048x2048&w=is&k=20&c=xrW7gBUROHLwIHO2uMXE4lwGOIrDm0Sfslqp6JsVPS0=",
        "CategoryId": 1,
        "createdAt": "2023-09-28T14:03:27.369Z",
        "updatedAt": "2023-09-28T14:03:27.369Z",
        "Category": {
            "id": 1,
            "name": "Cemilan",
            "createdAt": "2023-09-28T14:03:27.360Z",
            "updatedAt": "2023-09-28T14:03:27.360Z"
        }
    }
    ...
]
```

### GET /products/featured

#### Description

> get product by each category

#### response

_200 - OK_

```json
[
    {
        "id": 1,
        "name": "Cemilan",
        "createdAt": "2023-09-28T14:03:27.360Z",
        "updatedAt": "2023-09-28T14:03:27.360Z",
        "Products": [
            {
                "id": 6,
                "name": "Bubur Kacang Ijo",
                "price": 10000,
                "description": "Cemilan khas indonesia dengan cita rasa manis dipadu dengan kuah santan",
                "imageUrl": "https://media.istockphoto.com/id/1456971294/id/foto/bubur-kacang-ijo-or-mungbean-porridge.jpg?s=2048x2048&w=is&k=20&c=xrW7gBUROHLwIHO2uMXE4lwGOIrDm0Sfslqp6JsVPS0=",
                "CategoryId": 1,
                "createdAt": "2023-09-28T14:03:27.369Z",
                "updatedAt": "2023-09-28T14:03:27.369Z"
            }
        ]
    },
    {
        "id": 2,
        "name": "Makanan Lokal",
        "createdAt": "2023-09-28T14:03:27.360Z",
        "updatedAt": "2023-09-28T14:03:27.360Z",
        "Products": [
            {
                "id": 1,
                "name": "Sate",
                "price": 18000,
                "description": "Makanan khas indonesia yang dipanggang beraroma khas",
                "imageUrl": "https://media.istockphoto.com/id/1166125076/id/foto/sate-ayam-dengan-saus-kacang.jpg?s=2048x2048&w=is&k=20&c=RYjAR35hnCsonvicFTGY6XwFPe7j4_HX4aKZBcr30vQ=",
                "CategoryId": 2,
                "createdAt": "2023-09-28T14:03:27.369Z",
                "updatedAt": "2023-09-28T14:03:27.369Z"
            }
        ]
    }
    ...
]
```

### GET /categories

#### Description

> get all categories data

#### Response

_200 - OK_

```json
[
    {
        "id": 1,
        "name": "Cemilan",
        "createdAt": "2023-09-28T14:03:27.360Z",
        "updatedAt": "2023-09-28T14:03:27.360Z"
    },
    {
        "id": 2,
        "name": "Makanan Lokal",
        "createdAt": "2023-09-28T14:03:27.360Z",
        "updatedAt": "2023-09-28T14:03:27.360Z"
    },
    {
        "id": 3,
        "name": "Makanan Asing",
        "createdAt": "2023-09-28T14:03:27.360Z",
        "updatedAt": "2023-09-28T14:03:27.360Z"
    },
    {
        "id": 4,
        "name": "Minuman",
        "createdAt": "2023-09-28T14:03:27.360Z",
        "updatedAt": "2023-09-28T14:03:27.360Z"
    }
]
```

### GET /carts


#### Description

> get carts data for login user

#### Response

```json
[
    {
        "id": 9,
        "UserId": 1,
        "ProductId": 5,
        "quantity": 1,
        "createdAt": "2023-09-28T14:38:34.013Z",
        "updatedAt": "2023-09-28T14:38:34.013Z",
        "Product": {
            "id": 5,
            "name": "Ayam Goreng dan Nasi Liwet",
            "price": 25000,
            "description": "Makanan khas indonesia dari dataran sunda yang sangat khas oleh sambelnya",
            "imageUrl": "https://media.istockphoto.com/id/1469972381/id/foto/nasi-tutug-oncom-traditional-sundanese-meal-rice.jpg?s=2048x2048&w=is&k=20&c=_XRyEfn6k57CLUjE-E8lRJm7ynLpApZJby4a0G-nlDI=",
            "CategoryId": 2,
            "createdAt": "2023-09-28T14:03:27.369Z",
            "updatedAt": "2023-09-28T14:03:27.369Z"
        }
    }
    ...
]
```

### POST /carts/:productId

#### Description

> add new cart by product id

#### Response

_201 - Created_

```json
{
    "message": "Add new chart successfully"
}
```

_404 - Error Not Found_

```json
{
    "message": "Product not found"
}
```

### DELETE /carts/:id

#### Description

> Delete cart by cart id

#### Response

_200 - OK_

```json
{
    "message": "Success delete from cart"
}
```

_400 - Error Not Found_

```json
{
    "message": "Cart not found"
}
```

### PATCH /carts/:id

#### Description

> update increment/decrement quantity of carts

#### Response

_200 - OK_

```json
{
    "message": "Cart updated successfully"
}
```

_404 - Error Not Found_

```json
{
    "message": "Cart not found"
}
```

### POST /generate-midtrans-token

#### Description

> payment item in cart

#### response

_201 - Created_

```json
{
  "token": "<token_from_midtrans>",
  "redirect_url": "https://app.sandbox.midtrans.com/snap/v3/redirection/<token_from_midtrans>"
}
```

### DELETE /checkout

#### Description

> delete all item in cart after payment success

#### Response

_200 - OK_

```json
{
    "message": "Thankyou for your order"
}
```

### GLOBAL ERROR

#### Response

_401 - Unauthorized_

```json
{
  "message": "Invalid token"
}
```

_500 - Internal Server Error_

```json
{
  "message": "Internal server error"
}
```