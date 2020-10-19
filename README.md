# Blog.Frontend

## psmever's Blog Fornt-End Source.

#### Git Clone.

```
git clone https://github.com/psmever/blog.front.git blog.front
```

#### Config
```
cd ${project Root}
cp config/sample.environment.env config/development.env
cp config/sample.environment.env config/production.env
```

#### Node Module Install.
```
yarn install
```

### Local Develper

```
yarn start
yarn start:stage
yarn start:prod
```

### Build
```
yarn build
yarn build:stage
yarn build:prod
```

### Server Deploy:prod
```
yarn deploy:stage
yarn deploy:prod
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)