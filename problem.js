// Problem

getUser().subscribe(user => {
  getDetails(user).subscribe(details => {
    getPosts(details).subscribe(posts => {
      getComments(posts).subscribe(comments => {  

        // handle all the data here
      });
    });
  });
})


// :)

getUser().pipe(
  switchMap(user => getDetails(user)),
  switchMap(details => getPosts(details)),
  switchMap(posts => getComments(posts)),
)