1. Install dependencies

- `npm install`

2. Run visualization

- `node maps.js merge`
- `node maps.js concat`
- `node maps.js switch`
- `node maps.js exhaust`

Time
0s -- 1s -- 2s -- 3s -- 4s -- 5s -- 6s -- 7s
Red stream
xx -- \_1 -- \_2 -- \_3 -- \_4 -- xx -- xx -- xx
Green stream
xx -- xx -- \_1 -- \_2 -- \_3 -- \_4 -- xx -- xx
Yellow stream
xx -- xx -- xx -- \_1 -- \_2 -- \_3 -- \_4 -- xx

![Image of Pusheencat](https://octodex.github.com/images/pusheencat.png)
