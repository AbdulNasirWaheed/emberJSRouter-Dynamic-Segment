# emberJSRouter-Dynamic-Segment
It begins with a : in the route() method followed by an identifier.

You can define nested routes by defining a template inside another template by passing a callback to the current route.

To create a nested route, run the below command −

ember generate route blog-post

Open the file .hbs file created under app/templates/. Here, we have created the file as blog-post.hbs with the below code −

<h2>My Profile</h2>
Hello

Open the router.js file in emberJSApp/demo-app/app to define URL mappings −

Router.map(function() {
   this.route('blog-post', { path: '/blog-post/:username'});
});

Create the application.hbs file in app/templates/ and add the following code −

{{#link-to 'blog-post' 'smith'}}View Profile{{/link-to}}
{{outlet}}

To construct the URL, you need to implement the serialize hook which passes the model and returns the object with dynamic segment as 
the key.

To do this, open the blog-post.js file in emberApp1\demo-app\app\routes directory

 model: function(params, transition) {
      return { username: params.username }; 
   },
   
   serialize: function(model) {
      return { username: model.get('username') }; 
   }

Only blog-post.hbs,router.js,blog-post.js and application.hbs files are included in this repository
