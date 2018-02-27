const http = new EasyHTTP();
const data = {
  title: 'Custom Post (Fixed)',
  body: 'This is a custom post.'
};

http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
  if(err) {
    console.log(err);
  }
  else {
    console.log(posts);
  }
});

http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
  if(err) {
    console.log(err);
  }
  else {
    console.log(post);
  }
});

http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
  if(err) {
    console.log(err);
  }
  else {
    console.log(post);
  }
});

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, res) {
  if(err) {
    console.log(err);
  }
  else {
    console.log(res);
  }
});