const{ from, zip, timer} = require('rxjs');
const{ map, mergeMap, switchMap, concatMap, exhaustMap } = require('rxjs/operators');

const operators = {
    merge: mergeMap,
    concat: concatMap,
    switch: switchMap,
    exhaust: exhaustMap
}

const operator = operators[process.argv[2]];

const color = {
    red: "\x1b[31m%s\x1b[0m",
    green: '\x1b[32m%s\x1b[0m',
    yellow: "\x1b[33m%s\x1b[0m"
}

const colors = [color.red, color.green, color.yellow];
const numbers = [1,2,3,4]

const numbers$ = zip(
  from(numbers),
  timer(0, 1000),  
)

const colors$ = zip(
  from(colors),
  timer(1000, 1000),  
)
.pipe(
    operator(
        (val) => numbers$.pipe(
            map(
                (item) => { return {item, val};}
            )
        )
    )
)

colors$
.subscribe(x => {
    console.log(x.val[0], x.item[0])
});



// 0s -- 1s -- 2s -- 3s -- 4s -- 5s -- 6s -- 7s
// Czerwone
// xx -- _1 -- _2 -- _3 -- _4 -- xx 
// Zielone 
// xx -- xx -- _1 -- _2 -- _3 -- _4 -- xx
// Żółte
// xx -- xx -- xx -- _1 -- _2 -- _3 -- _4 -- xx