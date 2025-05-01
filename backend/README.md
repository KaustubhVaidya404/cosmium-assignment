<h1 align="center" style="font-weight: bold;">Cosmium Backend</h1>

<p align="center">
 <a href="#tech">Technologies</a> • 
 <a href="#started">Getting Started</a> • 
  <a href="#routes">API Endpoints</a> 
</p>

<p align="center">
    <b>Simple description of what your project do or how to use it.</b>
</p>

<h2 id="tech">💻 Technologies</h2>

- ExpressJS
- NodeJS
- MongoDB


<h2 id="started">🚀 Getting started</h2>


<h3>Prerequisites</h3>

Here you list all prerequisites necessary for running your project. For example:

- [NodeJS](https://github.com/)
- Account on MongoDB

<h3>Cloning</h3>

How to clone your project

```bash
git clone git@github.com:KaustubhVaidya404/cosmium-assignment.git
```

<h3>Config .env variables</h2>

Use the `.env.example` as reference to create your configuration file `.env` with your AWS Credentials

```yaml
# server config
PORT=3000
NODE_ENV=DEV

# database connection string
MONGODB_URI=your_mongodb_connection_string

# JWT secret key
JWT_SECRET=your_secret
```

<h3>Starting</h3>

How to start your project

```bash
cd backend
# For dev
npm run dev
# For prod
npm run start
```

<h2 id="routes">📍 API Endpoints</h2>

Here you can list the main routes of your API, and what are their expected request bodies.
​
| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>POST /api/auth/register</kbd>     | register user
| <kbd>POST /authenticate/login</kbd>     | user login
| <kbd>GET /api/users/dashboard?productsPage={value}&usersPage={value}&postsPage={value}&limit=10</kbd>     | retrieves data for secured dashboard

<h3 id="post-auth-detail">POST /api/auth/register</h3>

**REQUEST**
```json
{
    "email": "testUser2@gmail.com",
    "password": "testpasswordfkfk"
}
```

**RESPONSE**
```json
{
    "message": "User registered successfully"
}
```

<h3 id="post-auth-detail">POST /api/auth/login  </h3>

**REQUEST**
```json
{
    "email": "testUser1@gmail.com",
    "password": "testpassword"
}
```

**RESPONSE**
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MTFkYmM5OGJiNzg3YmE4NmM3ZjExMyIsImlhdCI6MTc0NjA4MTkzOX0.DG6cWqfnrkaXsycq63fnIcMo2-1fUjHCQVgvxzBS65Y"
}
```

<h3 id="get-auth-detail">GET /api/users/dashboard?productsPage={value}&usersPage={value}&postsPage={value}&limit=10</h3>

**RESPONSE**
```json
{
    "user": "testUser1@gmail.com",
    "pagination": {
        "products": {
            "currentPage": 2,
            "totalItems": 194,
            "totalPages": 20,
            "limit": 10
        },
        "users": {
            "currentPage": 2,
            "totalItems": 208,
            "totalPages": 21,
            "limit": 10
        },
        "posts": {
            "currentPage": 2,
            "totalItems": 251,
            "totalPages": 26,
            "limit": 10
        }
    },
    "products": [
        {
            "id": 11,
            "title": "Annibale Colombo Bed",
            "description": "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
            "category": "furniture",
            "price": 1899.99,
            "discountPercentage": 8.57,
            "rating": 4.77,
            "stock": 88,
            "tags": [
                "furniture",
                "beds"
            ],
            "brand": "Annibale Colombo",
            "sku": "FUR-ANN-ANN-011",
            "weight": 10,
            "dimensions": {
                "width": 28.16,
                "height": 25.36,
                "depth": 17.28
            },
            "warrantyInformation": "1 year warranty",
            "shippingInformation": "Ships in 1 month",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 2,
                    "comment": "Would not recommend!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Christopher West",
                    "reviewerEmail": "christopher.west@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Highly impressed!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Vivian Carter",
                    "reviewerEmail": "vivian.carter@x.dummyjson.com"
                },
                {
                    "rating": 1,
                    "comment": "Poor quality!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Mason Wright",
                    "reviewerEmail": "mason.wright@x.dummyjson.com"
                }
            ],
            "returnPolicy": "No return policy",
            "minimumOrderQuantity": 1,
            "meta": {
                "createdAt": "2025-04-30T09:41:02.053Z",
                "updatedAt": "2025-04-30T09:41:02.053Z",
                "barcode": "3610757456581",
                "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp",
                "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/2.webp",
                "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/3.webp"
            ],
            "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp"
        },
        {
            "id": 12,
            "title": "Annibale Colombo Sofa",
            "description": "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
            "category": "furniture",
            "price": 2499.99,
            "discountPercentage": 14.4,
            "rating": 3.92,
            "stock": 60,
            "tags": [
                "furniture",
                "sofas"
            ],
            "brand": "Annibale Colombo",
            "sku": "FUR-ANN-ANN-012",
            "weight": 6,
            "dimensions": {
                "width": 12.75,
                "height": 20.55,
                "depth": 19.06
            },
            "warrantyInformation": "Lifetime warranty",
            "shippingInformation": "Ships in 1 week",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 3,
                    "comment": "Very unhappy with my purchase!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Christian Perez",
                    "reviewerEmail": "christian.perez@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Fast shipping!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Lillian Bishop",
                    "reviewerEmail": "lillian.bishop@x.dummyjson.com"
                },
                {
                    "rating": 1,
                    "comment": "Poor quality!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Lillian Simmons",
                    "reviewerEmail": "lillian.simmons@x.dummyjson.com"
                }
            ],
            "returnPolicy": "7 days return policy",
            "minimumOrderQuantity": 1,
            "meta": {
                "createdAt": "2025-04-30T09:41:02.053Z",
                "updatedAt": "2025-04-30T09:41:02.053Z",
                "barcode": "1777662847736",
                "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp",
                "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/2.webp",
                "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/3.webp"
            ],
            "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp"
        },
        {
            "id": 13,
            "title": "Bedside Table African Cherry",
            "description": "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
            "category": "furniture",
            "price": 299.99,
            "discountPercentage": 19.09,
            "rating": 2.87,
            "stock": 64,
            "tags": [
                "furniture",
                "bedside tables"
            ],
            "brand": "Furniture Co.",
            "sku": "FUR-FUR-BED-013",
            "weight": 2,
            "dimensions": {
                "width": 13.47,
                "height": 24.99,
                "depth": 27.35
            },
            "warrantyInformation": "5 year warranty",
            "shippingInformation": "Ships overnight",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 4,
                    "comment": "Excellent quality!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Aaliyah Hanson",
                    "reviewerEmail": "aaliyah.hanson@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Excellent quality!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Liam Smith",
                    "reviewerEmail": "liam.smith@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Highly recommended!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Avery Barnes",
                    "reviewerEmail": "avery.barnes@x.dummyjson.com"
                }
            ],
            "returnPolicy": "7 days return policy",
            "minimumOrderQuantity": 3,
            "meta": {
                "createdAt": "2025-04-30T09:41:02.053Z",
                "updatedAt": "2025-04-30T09:41:02.053Z",
                "barcode": "6441287925979",
                "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp",
                "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/2.webp",
                "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/3.webp"
            ],
            "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp"
        },
        {
            "id": 14,
            "title": "Knoll Saarinen Executive Conference Chair",
            "description": "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
            "category": "furniture",
            "price": 499.99,
            "discountPercentage": 2.01,
            "rating": 4.88,
            "stock": 26,
            "tags": [
                "furniture",
                "office chairs"
            ],
            "brand": "Knoll",
            "sku": "FUR-KNO-KNO-014",
            "weight": 10,
            "dimensions": {
                "width": 13.81,
                "height": 7.5,
                "depth": 5.62
            },
            "warrantyInformation": "2 year warranty",
            "shippingInformation": "Ships overnight",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 2,
                    "comment": "Waste of money!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Ella Cook",
                    "reviewerEmail": "ella.cook@x.dummyjson.com"
                },
                {
                    "rating": 2,
                    "comment": "Very dissatisfied!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Clara Berry",
                    "reviewerEmail": "clara.berry@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Would buy again!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Elena Long",
                    "reviewerEmail": "elena.long@x.dummyjson.com"
                }
            ],
            "returnPolicy": "60 days return policy",
            "minimumOrderQuantity": 5,
            "meta": {
                "createdAt": "2025-04-30T09:41:02.053Z",
                "updatedAt": "2025-04-30T09:41:02.053Z",
                "barcode": "8919386859966",
                "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/1.webp",
                "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/2.webp",
                "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/3.webp"
            ],
            "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp"
        },
        {
            "id": 15,
            "title": "Wooden Bathroom Sink With Mirror",
            "description": "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
            "category": "furniture",
            "price": 799.99,
            "discountPercentage": 8.8,
            "rating": 3.59,
            "stock": 7,
            "tags": [
                "furniture",
                "bathroom"
            ],
            "brand": "Bath Trends",
            "sku": "FUR-BAT-WOO-015",
            "weight": 10,
            "dimensions": {
                "width": 7.98,
                "height": 8.88,
                "depth": 28.46
            },
            "warrantyInformation": "3 year warranty",
            "shippingInformation": "Ships in 3-5 business days",
            "availabilityStatus": "Low Stock",
            "reviews": [
                {
                    "rating": 4,
                    "comment": "Fast shipping!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Logan Torres",
                    "reviewerEmail": "logan.torres@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Very pleased!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Aria Parker",
                    "reviewerEmail": "aria.parker@x.dummyjson.com"
                },
                {
                    "rating": 3,
                    "comment": "Poor quality!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Dylan Wells",
                    "reviewerEmail": "dylan.wells@x.dummyjson.com"
                }
            ],
            "returnPolicy": "60 days return policy",
            "minimumOrderQuantity": 2,
            "meta": {
                "createdAt": "2025-04-30T09:41:02.053Z",
                "updatedAt": "2025-04-30T09:41:02.053Z",
                "barcode": "1958104402873",
                "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/1.webp",
                "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/2.webp",
                "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/3.webp"
            ],
            "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp"
        },
        {
            "id": 16,
            "title": "Apple",
            "description": "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
            "category": "groceries",
            "price": 1.99,
            "discountPercentage": 12.62,
            "rating": 4.19,
            "stock": 8,
            "tags": [
                "fruits"
            ],
            "sku": "GRO-BRD-APP-016",
            "weight": 9,
            "dimensions": {
                "width": 13.66,
                "height": 11.01,
                "depth": 9.73
            },
            "warrantyInformation": "3 year warranty",
            "shippingInformation": "Ships in 2 weeks",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Very satisfied!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Sophia Brown",
                    "reviewerEmail": "sophia.brown@x.dummyjson.com"
                },
                {
                    "rating": 1,
                    "comment": "Very dissatisfied!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Scarlett Bowman",
                    "reviewerEmail": "scarlett.bowman@x.dummyjson.com"
                },
                {
                    "rating": 3,
                    "comment": "Very unhappy with my purchase!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "William Gonzalez",
                    "reviewerEmail": "william.gonzalez@x.dummyjson.com"
                }
            ],
            "returnPolicy": "90 days return policy",
            "minimumOrderQuantity": 7,
            "meta": {
                "createdAt": "2025-04-30T09:41:02.053Z",
                "updatedAt": "2025-04-30T09:41:02.053Z",
                "barcode": "7962803553314",
                "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp"
            ],
            "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp"
        },
        {
            "id": 17,
            "title": "Beef Steak",
            "description": "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
            "category": "groceries",
            "price": 12.99,
            "discountPercentage": 9.61,
            "rating": 4.47,
            "stock": 86,
            "tags": [
                "meat"
            ],
            "sku": "GRO-BRD-BEE-017",
            "weight": 10,
            "dimensions": {
                "width": 18.9,
                "height": 5.77,
                "depth": 18.57
            },
            "warrantyInformation": "3 year warranty",
            "shippingInformation": "Ships overnight",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 3,
                    "comment": "Would not recommend!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Eleanor Tyler",
                    "reviewerEmail": "eleanor.tyler@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Fast shipping!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Alexander Jones",
                    "reviewerEmail": "alexander.jones@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Great value for money!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Natalie Harris",
                    "reviewerEmail": "natalie.harris@x.dummyjson.com"
                }
            ],
            "returnPolicy": "60 days return policy",
            "minimumOrderQuantity": 43,
            "meta": {
                "createdAt": "2025-04-30T09:41:02.053Z",
                "updatedAt": "2025-04-30T09:41:02.053Z",
                "barcode": "5640063409695",
                "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/product-images/groceries/beef-steak/1.webp"
            ],
            "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp"
        },
        {
            "id": 18,
            "title": "Cat Food",
            "description": "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
            "category": "groceries",
            "price": 8.99,
            "discountPercentage": 9.58,
            "rating": 3.13,
            "stock": 46,
            "tags": [
                "pet supplies",
                "cat food"
            ],
            "sku": "GRO-BRD-FOO-018",
            "weight": 10,
            "dimensions": {
                "width": 18.08,
                "height": 9.26,
                "depth": 21.86
            },
            "warrantyInformation": "1 year warranty",
            "shippingInformation": "Ships overnight",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 3,
                    "comment": "Would not recommend!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Noah Lewis",
                    "reviewerEmail": "noah.lewis@x.dummyjson.com"
                },
                {
                    "rating": 3,
                    "comment": "Very unhappy with my purchase!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Ruby Andrews",
                    "reviewerEmail": "ruby.andrews@x.dummyjson.com"
                },
                {
                    "rating": 2,
                    "comment": "Very disappointed!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Ethan Thompson",
                    "reviewerEmail": "ethan.thompson@x.dummyjson.com"
                }
            ],
            "returnPolicy": "No return policy",
            "minimumOrderQuantity": 18,
            "meta": {
                "createdAt": "2025-04-30T09:41:02.053Z",
                "updatedAt": "2025-04-30T09:41:02.053Z",
                "barcode": "1483991328610",
                "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/product-images/groceries/cat-food/1.webp"
            ],
            "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp"
        },
        {
            "id": 19,
            "title": "Chicken Meat",
            "description": "Fresh and tender chicken meat, suitable for various culinary preparations.",
            "category": "groceries",
            "price": 9.99,
            "discountPercentage": 13.7,
            "rating": 3.19,
            "stock": 97,
            "tags": [
                "meat"
            ],
            "sku": "GRO-BRD-CHI-019",
            "weight": 1,
            "dimensions": {
                "width": 11.03,
                "height": 22.11,
                "depth": 16.01
            },
            "warrantyInformation": "1 year warranty",
            "shippingInformation": "Ships in 1 month",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Great product!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Mateo Bennett",
                    "reviewerEmail": "mateo.bennett@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Highly recommended!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Jackson Evans",
                    "reviewerEmail": "jackson.evans@x.dummyjson.com"
                },
                {
                    "rating": 3,
                    "comment": "Not worth the price!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Sadie Morales",
                    "reviewerEmail": "sadie.morales@x.dummyjson.com"
                }
            ],
            "returnPolicy": "7 days return policy",
            "minimumOrderQuantity": 22,
            "meta": {
                "createdAt": "2025-04-30T09:41:02.053Z",
                "updatedAt": "2025-04-30T09:41:02.053Z",
                "barcode": "8829514594521",
                "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/1.webp",
                "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/2.webp"
            ],
            "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/thumbnail.webp"
        },
        {
            "id": 20,
            "title": "Cooking Oil",
            "description": "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
            "category": "groceries",
            "price": 4.99,
            "discountPercentage": 9.33,
            "rating": 4.8,
            "stock": 10,
            "tags": [
                "cooking essentials"
            ],
            "sku": "GRO-BRD-COO-020",
            "weight": 5,
            "dimensions": {
                "width": 19.95,
                "height": 27.54,
                "depth": 24.86
            },
            "warrantyInformation": "Lifetime warranty",
            "shippingInformation": "Ships in 1-2 business days",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Very happy with my purchase!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Victoria McDonald",
                    "reviewerEmail": "victoria.mcdonald@x.dummyjson.com"
                },
                {
                    "rating": 2,
                    "comment": "Would not recommend!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Hazel Evans",
                    "reviewerEmail": "hazel.evans@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Would buy again!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Zoe Bennett",
                    "reviewerEmail": "zoe.bennett@x.dummyjson.com"
                }
            ],
            "returnPolicy": "30 days return policy",
            "minimumOrderQuantity": 46,
            "meta": {
                "createdAt": "2025-04-30T09:41:02.053Z",
                "updatedAt": "2025-04-30T09:41:02.053Z",
                "barcode": "4874727824518",
                "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/1.webp"
            ],
            "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp"
        }
    ],
    "users": [
        {
            "id": 11,
            "firstName": "Liam",
            "lastName": "Garcia",
            "maidenName": "",
            "age": 29,
            "gender": "male",
            "email": "liam.garcia@x.dummyjson.com",
            "phone": "+92 870-217-6201",
            "username": "liamg",
            "password": "liamgpass",
            "birthDate": "1995-6-6",
            "image": "https://dummyjson.com/icon/liamg/128",
            "bloodGroup": "AB-",
            "height": 162.32,
            "weight": 93.16,
            "eyeColor": "Violet",
            "hair": {
                "color": "Red",
                "type": "Wavy"
            },
            "ip": "56.201.85.9",
            "address": {
                "address": "576 Fifth Street",
                "city": "Denver",
                "state": "South Dakota",
                "stateCode": "SD",
                "postalCode": "57252",
                "coordinates": {
                    "lat": -66.218177,
                    "lng": -145.340165
                },
                "country": "United States"
            },
            "macAddress": "31:9a:28:8b:99:6c",
            "university": "Ohio State University",
            "bank": {
                "cardExpire": "02/27",
                "cardNumber": "2302893002194899",
                "cardType": "Discover",
                "currency": "GBP",
                "iban": "O8ENPRB9UVBL2EFZ7601KC09"
            },
            "company": {
                "department": "Services",
                "name": "Considine - Torp",
                "title": "Web Developer",
                "address": {
                    "address": "27 Cedar Street",
                    "city": "Philadelphia",
                    "state": "Connecticut",
                    "stateCode": "CT",
                    "postalCode": "79574",
                    "coordinates": {
                        "lat": -81.841588,
                        "lng": 31.79423
                    },
                    "country": "United States"
                }
            },
            "ein": "326-604",
            "ssn": "933-784-949",
            "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
            "crypto": {
                "coin": "Bitcoin",
                "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
                "network": "Ethereum (ERC20)"
            },
            "role": "moderator"
        },
        {
            "id": 12,
            "firstName": "Mia",
            "lastName": "Rodriguez",
            "maidenName": "",
            "age": 24,
            "gender": "female",
            "email": "mia.rodriguez@x.dummyjson.com",
            "phone": "+49 989-461-8403",
            "username": "miar",
            "password": "miarpass",
            "birthDate": "2000-8-4",
            "image": "https://dummyjson.com/icon/miar/128",
            "bloodGroup": "O-",
            "height": 188.08,
            "weight": 56.03,
            "eyeColor": "Blue",
            "hair": {
                "color": "Purple",
                "type": "Wavy"
            },
            "ip": "11.72.253.90",
            "address": {
                "address": "1627 Sixth Street",
                "city": "Jacksonville",
                "state": "West Virginia",
                "stateCode": "WV",
                "postalCode": "41810",
                "coordinates": {
                    "lat": 24.857497,
                    "lng": -34.865429
                },
                "country": "United States"
            },
            "macAddress": "53:d7:a4:6:1e:58",
            "university": "William & Mary",
            "bank": {
                "cardExpire": "05/26",
                "cardNumber": "1539872303456158",
                "cardType": "Carte Bancaire",
                "currency": "CAD",
                "iban": "EBMD95RLK8B82ZAZNXBJ09V5"
            },
            "company": {
                "department": "Accounting",
                "name": "Miller, Schowalter and Wisozk",
                "title": "Business Analyst",
                "address": {
                    "address": "1039 Washington Street",
                    "city": "Philadelphia",
                    "state": "New Jersey",
                    "stateCode": "NJ",
                    "postalCode": "57518",
                    "coordinates": {
                        "lat": 85.455933,
                        "lng": 164.246103
                    },
                    "country": "United States"
                }
            },
            "ein": "754-660",
            "ssn": "749-524-124",
            "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
            "crypto": {
                "coin": "Bitcoin",
                "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
                "network": "Ethereum (ERC20)"
            },
            "role": "moderator"
        },
        {
            "id": 13,
            "firstName": "Noah",
            "lastName": "Hernandez",
            "maidenName": "",
            "age": 40,
            "gender": "male",
            "email": "noah.hernandez@x.dummyjson.com",
            "phone": "+49 393-605-6968",
            "username": "noahh",
            "password": "noahhpass",
            "birthDate": "1984-6-5",
            "image": "https://dummyjson.com/icon/noahh/128",
            "bloodGroup": "AB+",
            "height": 188.62,
            "weight": 69.49,
            "eyeColor": "Brown",
            "hair": {
                "color": "Red",
                "type": "Curly"
            },
            "ip": "169.154.126.57",
            "address": {
                "address": "1413 Maple Street",
                "city": "New York",
                "state": "North Dakota",
                "stateCode": "ND",
                "postalCode": "73696",
                "coordinates": {
                    "lat": -25.0377,
                    "lng": -151.70469
                },
                "country": "United States"
            },
            "macAddress": "d4:fe:ae:8f:eb:a3",
            "university": "New York University (NYU)",
            "bank": {
                "cardExpire": "05/26",
                "cardNumber": "1681772579326385",
                "cardType": "Discover",
                "currency": "SEK",
                "iban": "G4UIZKIQVPJM9D31XQVR1E9Z"
            },
            "company": {
                "department": "Engineering",
                "name": "Botsford, Marquardt and Roberts",
                "title": "Database Administrator",
                "address": {
                    "address": "62 Third Street",
                    "city": "Seattle",
                    "state": "Oregon",
                    "stateCode": "OR",
                    "postalCode": "83474",
                    "coordinates": {
                        "lat": 19.490447,
                        "lng": -13.173207
                    },
                    "country": "United States"
                }
            },
            "ein": "877-628",
            "ssn": "660-847-389",
            "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
            "crypto": {
                "coin": "Bitcoin",
                "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
                "network": "Ethereum (ERC20)"
            },
            "role": "moderator"
        },
        {
            "id": 14,
            "firstName": "Charlotte",
            "lastName": "Lopez",
            "maidenName": "Martinez",
            "age": 36,
            "gender": "female",
            "email": "charlotte.lopez@x.dummyjson.com",
            "phone": "+44 373-953-5028",
            "username": "charlottem",
            "password": "charlottempass",
            "birthDate": "1988-6-8",
            "image": "https://dummyjson.com/icon/charlottem/128",
            "bloodGroup": "AB-",
            "height": 178.92,
            "weight": 82.46,
            "eyeColor": "Brown",
            "hair": {
                "color": "Gray",
                "type": "Kinky"
            },
            "ip": "119.103.95.60",
            "address": {
                "address": "208 Second Street",
                "city": "Columbus",
                "state": "Ohio",
                "stateCode": "OH",
                "postalCode": "42044",
                "coordinates": {
                    "lat": -44.443762,
                    "lng": -151.420561
                },
                "country": "United States"
            },
            "macAddress": "f6:ff:37:aa:6c:f1",
            "university": "Northeastern University",
            "bank": {
                "cardExpire": "02/27",
                "cardNumber": "5675368650551956",
                "cardType": "Maestro",
                "currency": "CNY",
                "iban": "FKK6U634LGI3E7N517DLVVTL"
            },
            "company": {
                "department": "Accounting",
                "name": "Zulauf and Sons",
                "title": "Chief Executive Officer",
                "address": {
                    "address": "569 Jefferson Street",
                    "city": "Los Angeles",
                    "state": "Montana",
                    "stateCode": "MT",
                    "postalCode": "17779",
                    "coordinates": {
                        "lat": -18.371256,
                        "lng": 22.566258
                    },
                    "country": "United States"
                }
            },
            "ein": "364-782",
            "ssn": "255-491-479",
            "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
            "crypto": {
                "coin": "Bitcoin",
                "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
                "network": "Ethereum (ERC20)"
            },
            "role": "moderator"
        },
        {
            "id": 15,
            "firstName": "William",
            "lastName": "Gonzalez",
            "maidenName": "",
            "age": 32,
            "gender": "male",
            "email": "william.gonzalez@x.dummyjson.com",
            "phone": "+81 905-252-7319",
            "username": "williamg",
            "password": "williamgpass",
            "birthDate": "1992-3-27",
            "image": "https://dummyjson.com/icon/williamg/128",
            "bloodGroup": "B-",
            "height": 173.21,
            "weight": 82.41,
            "eyeColor": "Hazel",
            "hair": {
                "color": "Gray",
                "type": "Curly"
            },
            "ip": "250.2.241.204",
            "address": {
                "address": "31 Maple Street",
                "city": "San Jose",
                "state": "Utah",
                "stateCode": "UT",
                "postalCode": "78243",
                "coordinates": {
                    "lat": 8.152876,
                    "lng": 113.29799
                },
                "country": "United States"
            },
            "macAddress": "f5:68:28:f9:ec:89",
            "university": "Tufts University",
            "bank": {
                "cardExpire": "03/27",
                "cardNumber": "6053000793215148",
                "cardType": "Mir",
                "currency": "EUR",
                "iban": "AR01SNDMKGECX0EYH7UCW61W"
            },
            "company": {
                "department": "Marketing",
                "name": "Spinka - Dickinson",
                "title": "Software Architect",
                "address": {
                    "address": "1538 Eighth Street",
                    "city": "San Jose",
                    "state": "Missouri",
                    "stateCode": "MO",
                    "postalCode": "29673",
                    "coordinates": {
                        "lat": 24.169361,
                        "lng": -29.395167
                    },
                    "country": "United States"
                }
            },
            "ein": "830-515",
            "ssn": "690-544-755",
            "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
            "crypto": {
                "coin": "Bitcoin",
                "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
                "network": "Ethereum (ERC20)"
            },
            "role": "moderator"
        },
        {
            "id": 16,
            "firstName": "Avery",
            "lastName": "Perez",
            "maidenName": "",
            "age": 25,
            "gender": "female",
            "email": "avery.perez@x.dummyjson.com",
            "phone": "+61 731-431-3457",
            "username": "averyp",
            "password": "averyppass",
            "birthDate": "1999-3-10",
            "image": "https://dummyjson.com/icon/averyp/128",
            "bloodGroup": "O-",
            "height": 172.68,
            "weight": 93.9,
            "eyeColor": "Brown",
            "hair": {
                "color": "Green",
                "type": "Curly"
            },
            "ip": "131.217.4.214",
            "address": {
                "address": "1125 First Street",
                "city": "Columbus",
                "state": "Iowa",
                "stateCode": "IA",
                "postalCode": "30973",
                "coordinates": {
                    "lat": 12.789127,
                    "lng": 85.792598
                },
                "country": "United States"
            },
            "macAddress": "b3:ff:f3:c5:37:46",
            "university": "Harvard University",
            "bank": {
                "cardExpire": "04/27",
                "cardNumber": "0961014686718571",
                "cardType": "Carte Bancaire",
                "currency": "USD",
                "iban": "28JYZAY4KYT48YI8QW40PWXR"
            },
            "company": {
                "department": "Accounting",
                "name": "Herzog Inc",
                "title": "Database Administrator",
                "address": {
                    "address": "183 Maple Street",
                    "city": "New York",
                    "state": "Rhode Island",
                    "stateCode": "RI",
                    "postalCode": "45238",
                    "coordinates": {
                        "lat": -53.318189,
                        "lng": 105.835271
                    },
                    "country": "United States"
                }
            },
            "ein": "348-493",
            "ssn": "679-523-686",
            "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
            "crypto": {
                "coin": "Bitcoin",
                "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
                "network": "Ethereum (ERC20)"
            },
            "role": "user"
        },
        {
            "id": 17,
            "firstName": "Evelyn",
            "lastName": "Sanchez",
            "maidenName": "",
            "age": 37,
            "gender": "female",
            "email": "evelyn.sanchez@x.dummyjson.com",
            "phone": "+1 623-880-6871",
            "username": "evelyns",
            "password": "evelynspass",
            "birthDate": "1987-10-13",
            "image": "https://dummyjson.com/icon/evelyns/128",
            "bloodGroup": "B+",
            "height": 184.08,
            "weight": 83.15,
            "eyeColor": "Violet",
            "hair": {
                "color": "Blue",
                "type": "Curly"
            },
            "ip": "87.114.135.146",
            "address": {
                "address": "1170 Lincoln Street",
                "city": "San Diego",
                "state": "Wyoming",
                "stateCode": "WY",
                "postalCode": "43423",
                "coordinates": {
                    "lat": -83.31484,
                    "lng": 11.768071
                },
                "country": "United States"
            },
            "macAddress": "f8:e5:bd:43:bc:d8",
            "university": "Washington University in St. Louis",
            "bank": {
                "cardExpire": "04/29",
                "cardNumber": "4557521697420096",
                "cardType": "UnionPay",
                "currency": "SEK",
                "iban": "KN8XAPR2J5UB8AKDI1EVJ56R"
            },
            "company": {
                "department": "Support",
                "name": "Predovic - Johns",
                "title": "Chief Financial Officer",
                "address": {
                    "address": "1802 Ninth Street",
                    "city": "San Diego",
                    "state": "Minnesota",
                    "stateCode": "MN",
                    "postalCode": "89416",
                    "coordinates": {
                        "lat": 29.034592,
                        "lng": -78.004598
                    },
                    "country": "United States"
                }
            },
            "ein": "604-817",
            "ssn": "689-332-644",
            "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
            "crypto": {
                "coin": "Bitcoin",
                "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
                "network": "Ethereum (ERC20)"
            },
            "role": "user"
        },
        {
            "id": 18,
            "firstName": "Logan",
            "lastName": "Torres",
            "maidenName": "",
            "age": 31,
            "gender": "male",
            "email": "logan.torres@x.dummyjson.com",
            "phone": "+81 507-434-8733",
            "username": "logant",
            "password": "logantpass",
            "birthDate": "1993-10-26",
            "image": "https://dummyjson.com/icon/logant/128",
            "bloodGroup": "A+",
            "height": 190.04,
            "weight": 72.43,
            "eyeColor": "Green",
            "hair": {
                "color": "Green",
                "type": "Curly"
            },
            "ip": "155.98.15.162",
            "address": {
                "address": "907 Seventh Street",
                "city": "Columbus",
                "state": "Arkansas",
                "stateCode": "AR",
                "postalCode": "78805",
                "coordinates": {
                    "lat": -64.846516,
                    "lng": 174.775744
                },
                "country": "United States"
            },
            "macAddress": "40:d:5c:1:7d:bf",
            "university": "University of Illinois--Urbana-Champaign",
            "bank": {
                "cardExpire": "05/26",
                "cardNumber": "7884268130452098",
                "cardType": "UnionPay",
                "currency": "NZD",
                "iban": "HZM7V9PYHPZBN72IDFPXGN8Q"
            },
            "company": {
                "department": "Training",
                "name": "Jast - Nader",
                "title": "Data Analyst",
                "address": {
                    "address": "947 Main Street",
                    "city": "Denver",
                    "state": "Minnesota",
                    "stateCode": "MN",
                    "postalCode": "71896",
                    "coordinates": {
                        "lat": -24.654063,
                        "lng": -147.255268
                    },
                    "country": "United States"
                }
            },
            "ein": "576-218",
            "ssn": "806-639-934",
            "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
            "crypto": {
                "coin": "Bitcoin",
                "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
                "network": "Ethereum (ERC20)"
            },
            "role": "user"
        },
        {
            "id": 19,
            "firstName": "Abigail",
            "lastName": "Rivera",
            "maidenName": "",
            "age": 28,
            "gender": "female",
            "email": "abigail.rivera@x.dummyjson.com",
            "phone": "+91 228-363-7806",
            "username": "abigailr",
            "password": "abigailrpass",
            "birthDate": "1996-10-11",
            "image": "https://dummyjson.com/icon/abigailr/128",
            "bloodGroup": "B+",
            "height": 186.39,
            "weight": 74.61,
            "eyeColor": "Violet",
            "hair": {
                "color": "Blue",
                "type": "Kinky"
            },
            "ip": "19.183.240.94",
            "address": {
                "address": "996 Oak Street",
                "city": "Chicago",
                "state": "New Mexico",
                "stateCode": "NM",
                "postalCode": "11407",
                "coordinates": {
                    "lat": 44.321308,
                    "lng": -3.723903
                },
                "country": "United States"
            },
            "macAddress": "1d:a6:58:2a:e5:e4",
            "university": "California Institute of Technology (Caltech)",
            "bank": {
                "cardExpire": "02/28",
                "cardNumber": "4832361886407551",
                "cardType": "RuPay",
                "currency": "BRL",
                "iban": "O02LHDNNFCVSM6D4H81DIQHE"
            },
            "company": {
                "department": "Human Resources",
                "name": "Prohaska - Thiel",
                "title": "Business Analyst",
                "address": {
                    "address": "1402 Adams Street",
                    "city": "Austin",
                    "state": "Wisconsin",
                    "stateCode": "WI",
                    "postalCode": "51456",
                    "coordinates": {
                        "lat": 25.672938,
                        "lng": -76.54967
                    },
                    "country": "United States"
                }
            },
            "ein": "173-637",
            "ssn": "655-823-929",
            "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/97.0.1072.76 Safari/537.36",
            "crypto": {
                "coin": "Bitcoin",
                "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
                "network": "Ethereum (ERC20)"
            },
            "role": "user"
        },
        {
            "id": 20,
            "firstName": "Jackson",
            "lastName": "Evans",
            "maidenName": "",
            "age": 34,
            "gender": "male",
            "email": "jackson.evans@x.dummyjson.com",
            "phone": "+44 468-628-6686",
            "username": "jacksone",
            "password": "jacksonepass",
            "birthDate": "1990-11-30",
            "image": "https://dummyjson.com/icon/jacksone/128",
            "bloodGroup": "O-",
            "height": 162.57,
            "weight": 74.37,
            "eyeColor": "Green",
            "hair": {
                "color": "Red",
                "type": "Straight"
            },
            "ip": "221.127.144.198",
            "address": {
                "address": "1873 Main Street",
                "city": "New York",
                "state": "Arkansas",
                "stateCode": "AR",
                "postalCode": "26600",
                "coordinates": {
                    "lat": 34.722451,
                    "lng": 63.448927
                },
                "country": "United States"
            },
            "macAddress": "81:14:1:97:88:85",
            "university": "Ohio State University",
            "bank": {
                "cardExpire": "04/26",
                "cardNumber": "2109192842527801",
                "cardType": "BC Card",
                "currency": "EUR",
                "iban": "TX26FO9B7YR2VHYDSJBE32AX"
            },
            "company": {
                "department": "Legal",
                "name": "Kuhlman LLC",
                "title": "Web Developer",
                "address": {
                    "address": "1706 First Street",
                    "city": "Chicago",
                    "state": "Hawaii",
                    "stateCode": "HI",
                    "postalCode": "34725",
                    "coordinates": {
                        "lat": -80.416937,
                        "lng": -83.224516
                    },
                    "country": "United States"
                }
            },
            "ein": "843-260",
            "ssn": "248-787-886",
            "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
            "crypto": {
                "coin": "Bitcoin",
                "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
                "network": "Ethereum (ERC20)"
            },
            "role": "user"
        }
    ],
    "posts": [
        {
            "id": 11,
            "title": "It wasn't quite yet time to panic.",
            "body": "It wasn't quite yet time to panic. There was still time to salvage the situation. At least that is what she was telling himself. The reality was that it was time to panic and there wasn't time to salvage the situation, but he continued to delude himself into believing there was.",
            "tags": [
                "mystery",
                "american",
                "history"
            ],
            "reactions": {
                "likes": 453,
                "dislikes": 8
            },
            "views": 984,
            "userId": 43
        },
        {
            "id": 12,
            "title": "She was aware that things could go wrong.",
            "body": "She was aware that things could go wrong. In fact, she had trained her entire life in anticipation that things would go wrong one day. She had quiet confidence as she started to see that this was the day that all her training would be worthwhile and useful. At this point, she had no idea just how wrong everything would go that day.",
            "tags": [
                "love",
                "english"
            ],
            "reactions": {
                "likes": 362,
                "dislikes": 45
            },
            "views": 480,
            "userId": 82
        },
        {
            "id": 13,
            "title": "She wanted rainbow hair.",
            "body": "She wanted rainbow hair. That's what she told the hairdresser. It should be deep rainbow colors, too. She wasn't interested in pastel rainbow hair. She wanted it deep and vibrant so there was no doubt that she had done this on purpose.",
            "tags": [
                "mystery",
                "classic",
                "french"
            ],
            "reactions": {
                "likes": 268,
                "dislikes": 39
            },
            "views": 3038,
            "userId": 199
        },
        {
            "id": 14,
            "title": "The paper was blank.",
            "body": "The paper was blank. It shouldn't have been. There should have been writing on the paper, at least a paragraph if not more. The fact that the writing wasn't there was frustrating. Actually, it was even more than frustrating. It was downright distressing.",
            "tags": [
                "mystery",
                "english",
                "love"
            ],
            "reactions": {
                "likes": 118,
                "dislikes": 17
            },
            "views": 721,
            "userId": 140
        },
        {
            "id": 15,
            "title": "The trees, therefore, must be such old",
            "body": "The trees, therefore, must be such old and primitive techniques that they thought nothing of them, deeming them so inconsequential that even savages like us would know of them and not be suspicious. At that, they probably didn't have too much time after they detected us orbiting and intending to land. And if that were true, there could be only one place where their civilization was hidden.",
            "tags": [
                "fiction",
                "history",
                "crime"
            ],
            "reactions": {
                "likes": 951,
                "dislikes": 12
            },
            "views": 2911,
            "userId": 1
        },
        {
            "id": 16,
            "title": "There was only one way to do things in the Statton house.",
            "body": "There was only one way to do things in the Statton house. That one way was to do exactly what the father, Charlie, demanded. He made the decisions and everyone else followed without question. That was until today.",
            "tags": [
                "magical",
                "french",
                "american"
            ],
            "reactions": {
                "likes": 1257,
                "dislikes": 11
            },
            "views": 2019,
            "userId": 99
        },
        {
            "id": 17,
            "title": "She was in a hurry.",
            "body": "She was in a hurry. Not the standard hurry when you're in a rush to get someplace, but a frantic hurry. The type of hurry where a few seconds could mean life or death. She raced down the road ignoring speed limits and weaving between cars. She was only a few minutes away when traffic came to a dead standstill on the road ahead.",
            "tags": [
                "french",
                "magical",
                "english"
            ],
            "reactions": {
                "likes": 50,
                "dislikes": 31
            },
            "views": 511,
            "userId": 30
        },
        {
            "id": 18,
            "title": "She had a terrible habit o comparing her life to others",
            "body": "She had a terrible habit o comparing her life to others. She realized that their life experiences were completely different than her own and that she saw only what they wanted her to see, but that didn't matter. She still compared herself and yearned for what she thought they had and she didn't.",
            "tags": [
                "history",
                "french",
                "love"
            ],
            "reactions": {
                "likes": 277,
                "dislikes": 29
            },
            "views": 1127,
            "userId": 97
        },
        {
            "id": 19,
            "title": "The rain and wind abruptly stopped.",
            "body": "The rain and wind abruptly stopped, but the sky still had the gray swirls of storms in the distance. Dave knew this feeling all too well. The calm before the storm. He only had a limited amount of time before all Hell broke loose, but he stopped to admire the calmness. Maybe it would be different this time, he thought, with the knowledge deep within that it wouldn't.",
            "tags": [
                "fiction",
                "crime",
                "magical"
            ],
            "reactions": {
                "likes": 566,
                "dislikes": 2
            },
            "views": 2128,
            "userId": 143
        },
        {
            "id": 20,
            "title": "He couldn't remember exactly where he had read it",
            "body": "He couldn't remember exactly where he had read it, but he was sure that he had. The fact that she didn't believe him was quite frustrating as he began to search the Internet to find the article. It wasn't as if it was something that seemed impossible. Yet she insisted on always seeing the source whenever he stated a fact.",
            "tags": [
                "french",
                "classic"
            ],
            "reactions": {
                "likes": 999,
                "dislikes": 29
            },
            "views": 4280,
            "userId": 12
        }
    ]
}
```

<h3>Documentations that might help</h3>

[📝 How to create a Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request)

[💾 Commit pattern](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
