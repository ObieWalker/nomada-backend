# Nomada

This is the backend for the nomada riders app. This provides all the endpoints for the frontend part of the application.

## Installation


Clone the app to a folder and carry out the following instructions.

```bash
npm run build
```
The dist folder will be created in the root and then run docker
```bash
docker-compose up
```

## Usage

If changes are made to the app and it is not reflecting, run these commands:

```bash
docker-compose down
```
```bash
docker system prune -af
```

```bash
docker-compose up
```




```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

