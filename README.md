1. Install dependencies

- `npm install`

2. Run visualization

- `node maps.js merge`
- `node maps.js concat`
- `node maps.js switch`
- `node maps.js exhaust`

Time <br/>
0s -- 1s -- 2s -- 3s -- 4s -- 5s -- 6s -- 7s <br/>
Red stream<br/>
xx -- \_1 -- \_2 -- \_3 -- \_4 -- xx -- xx -- xx <br/>
Green stream<br/>
xx -- xx -- \_1 -- \_2 -- \_3 -- \_4 -- xx -- xx <br/>
Yellow stream<br/>
xx -- xx -- xx -- \_1 -- \_2 -- \_3 -- \_4 -- xx <br/>

![Image of Pusheencat](https://octodex.github.com/images/pusheencat.png)
