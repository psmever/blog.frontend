# Blog.FrontEnd

## psmever's Blog Front-End Source.


## Git Clone.

```bash
git clone https://github.com/psmever/blog.frontend.git blog.backend
```

## Git Clone (Single Branch).

```bash
git clone -b develop --single-branch https://github.com/psmever/blog.frontend.git
```

## First Config.
```bash
yarn install

cp .config/sample.environment.env .config/local.env
cp .config/sample.environment.env .config/production.env
cp .config/sample.environment.env .config/stage.env
```

## Local Develop Server.
```bash
yarn start
yarn start:stage
yarn start:prod
```

## Local build.
```bash
yarn build
yarn build:stage
yarn build:prod

yarn -s serve build
```


## Production Deploy.
```bash
yarn deploy:stage
yarn deploy:prod
```

## webhook

```
test
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
