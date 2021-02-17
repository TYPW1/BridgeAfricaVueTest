# bridge-products

## Project description
The bridge product is a simple Vue App with the following features
- User account management (Login, Register, Logout)
- Product Permission
- Product Management (CRUD)

#### Test users
- email : `test@test.com`
- password: `123456`

#### Usage
- The app is accessible to any one. 
- If you are not logged in, you can just view available product
- If you need to add, delete, update a product, you must login
- Your cannot delete nor update a product who was not created by you
- The app uses local storage to persist data and simulate network operation using a timeout


## Project setup
### Online test
You can test the application online following this [Online Link](https://bridge-product.netlify.com/bridge-products). 

### Manual build
In order to try the app, you must type the following command

```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```



### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Build with :heart: by hiro
