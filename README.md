# api-correios-node
API to search the zip code and calculate shipping in Brazil, using [node-correios] (https://www.npmjs.com/package/node-correios)

## Starting:

```
$ npm install
$ npm main.js
```

## Using:

### Searching address by zip code:

```
$ curl -X GET \
  http://localhost:9000/zipCode \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'cep=60761245' 
```

### Calculate shipping:

```
$ curl -X GET \
  http://localhost:9000/shipping \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'cache-control: no-cache' \
  -d 'nCdServico=40010&sCepOrigem=60761245&sCepDestino=60060610&nVlPeso=1&nCdFormato=1&nVlComprimento=30&nVlAltura=5&nVlLargura=15&nVlDiametro=20'
```

### Most informations about node-correios

https://www.npmjs.com/package/node-correios#m%C3%A9todos