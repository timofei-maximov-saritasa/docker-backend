# Docker backend

## Development

### Local development

#### Install deps

```bash
yarn
```

#### Run server

```bash
yarn start
```

### Docker

#### Build docker image

```bash
docker build -t <image-name> . --platform linux/amd64
```

#### Run docker container

```bash
docker run -dp 8000:8000 --platform linux/amd64 <image-name>
```
