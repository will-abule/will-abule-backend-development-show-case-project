<h1>Basic Example</h1>

<p>Hi, My name is Will Abule, I&rsquo;m a Full-Stack web developer with over 6 years of professional software development experience. I primarily code using JavaScript, TypeScript, or Python. However, I have a history with Kotlin, C#, and Java. I make client-side applications using Angular, Vue, React and React Native with its ecosystem of friends. Node Js, and Express framework for backend/server-side RestFul and Graphql APIS applications and MongoDB, MySQL, or Firebase as Database. And recently took interest in graph databases using DGraph and gRPC for APIs communication. This project is to showcase my ability with backend development. This API application is built with Node JS and Typescript and consists of tests code, rest, GraphQl, and MongoDB database.</p>

<h2>Requirements</h2>

<p>You need the following installed in your machine to run this project.</p>

<ul>
	<li><a href="https://nodejs.org/">Node</a></li>
	<li><a href="https://docs.mongodb.com/manual/installation/">MongoDB</a></li>
	<li><a href="https://www.npmjs.com/package/typescript">Typescript</a> Installed globally on your computer.</li>
</ul>

<p>you can install typescript globally using the following command.</p>

<p><code>npm i -g typescript</code></p>

<h3>Folder Structure</h3>

<p><strong>__</strong>config
	<br>|<strong>__</strong>|__<strong><strong>custom-environment-variables.json<br>|__</strong></strong>|__<strong><strong>default.json<br>|__</strong></strong>|__<strong><strong>production.json<br>|__</strong></strong>|__<strong><strong>test.json<br>|__</strong></strong>dist
	<br>|<strong>__</strong>|__<strong><strong>middleware<br>|__</strong></strong>|__<strong><strong>|<em>__</em></strong></strong>error-middleware.js
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>error-middleware.js.map
	<br>|<strong>__</strong>|__<strong><strong>models<br>|____</strong></strong>|<strong><strong>|<em>__</em></strong></strong>comment-model.js
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>comment-model.js.map
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>post-model.js
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>post-model.js.map
	<br>|<strong>__</strong>|__<strong><strong>routes<br>|__</strong></strong>|__<strong><strong>|<em>__</em></strong></strong>graphql
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong><em>__</em></strong>mutations
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong><em>__</em></strong>|<strong><strong>__</strong></strong>comment-mutation.js
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong><em>__</em></strong>|<strong><strong>__</strong></strong>comment-mutation.js.map
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong><em>__</em></strong>query
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong><em>__</em></strong>|<strong><strong>__</strong></strong>comment-query.js
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong><em>__</em></strong>|<strong><strong>__</strong></strong>comment-query.js.map
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong><em>__</em></strong>schema
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong><em>__</em></strong>|<strong><strong>__</strong></strong>index.js
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong><em>__</em></strong>|<strong><strong>__</strong></strong>index.js.map
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong><em>__</em></strong>type-definitions
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong><em>__</em></strong>|<strong><strong>__</strong></strong>comment-type-definitions.js
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong><em>__</em></strong>|<strong><strong>__</strong></strong>comment-type-definitions.js.map
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>rest
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong><em>__</em></strong>post-route.js
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong><em>__</em></strong>post-route.js.map
	<br>|<strong>__</strong>|<strong><strong>startup<br>|__</strong></strong>|__<strong><strong>|<em>__</em></strong></strong>config.js
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>config.js.map
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>db.js
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>db.js.map
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>init.js
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>init.js.map
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>logger.js
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>logger.js.map
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>route.js
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>route.js.map
	<br>|<strong>__</strong>|__<strong><strong>test<br>|__</strong></strong>|__<strong><strong>|<em>__</em></strong></strong>post-rest-api-route.test.js
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>post-rest-api-route.test.js.map
	<br>|<strong>__</strong>|<strong><strong>utils<br>|__</strong></strong>|__<strong><strong>|<em>__</em></strong></strong>functions
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong>__</strong>empty-object-function.js
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong>__</strong>empty-object-function.js.map
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong>__</strong>query-validator-function.js
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong>__</strong>query-validator-function.js.map
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong>__</strong>select-functions-function.js
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong>__</strong>select-functions-function.js.map
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>interfaces
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong>__</strong>comment-interface.js
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong>__</strong>comment-interface.js.map
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong>__</strong>post-interface.js
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong>__</strong>post-interface.js.map
	<br>|<strong>__</strong>|__<strong><strong>postman-collection-export<br>|__</strong></strong>|__<strong><strong>|<em>__</em></strong></strong>Will Abule Showcase.postman_collection.json
	<br>|<strong>__</strong>index.js
	<br>|<strong>__</strong>index.js.map
	<br>|<strong>__</strong>src
	<br>|<strong>__</strong>|<strong><strong>middleware<br>|__</strong></strong>|__<strong><strong>|<em>__</em></strong></strong>error-middleware.ts
	<br>|<strong>__</strong>|<strong><strong>models<br>|__</strong></strong>|__<strong><strong>|<em>__</em></strong></strong>comment-model.ts
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>post-model.ts
	<br>|<strong>__</strong>|__<strong><strong>routes<br>|__</strong></strong>|__<strong><strong>|<em>__</em></strong></strong>graphql
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong><em>__</em></strong>mutations
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong><em>__</em></strong>|<strong><strong>__</strong></strong>comment-mutation.ts
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong><em>__</em></strong>query
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong><em>__</em></strong>|<strong><strong>__</strong></strong>comment-query.ts
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong><em>__</em></strong>schema
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong><em>__</em></strong>|<strong><strong>__</strong></strong>index.ts
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong><em>__</em></strong>type-definitions
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong><em>__</em></strong>|<strong><strong>__</strong></strong>comment-type-definitions.ts
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>rest
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong><em>__</em></strong>post-route.ts
	<br>|<strong>__</strong>|<strong><strong>startup<br>|__</strong></strong>|__<strong><strong>|<em>__</em></strong></strong>config.ts
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>db.ts
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>init.ts
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>logger.ts
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>route.ts
	<br>|<strong>__</strong>|<strong><strong>test<br>|__</strong></strong>|__<strong><strong>|<em>__</em></strong></strong>post-rest-api-route.test.ts
	<br>|<strong>__</strong>|__<strong><strong>utils<br>|__</strong></strong>|__<strong><strong>|<em>__</em></strong></strong>functions
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong>__</strong>empty-object-function.ts
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong>__</strong>query-validator-function.ts
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong>__</strong>select-functions-function.ts
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>interfaces
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong>__</strong>comment-interface.ts
	<br>|<strong>__</strong>|__<strong><strong>|<em>__</em></strong></strong>|<strong>__</strong>post-interface.ts
	<br>|<strong>__</strong>index.ts
	<br>|<strong>__</strong>package-lock.json
	<br>|<strong>__</strong>package.json
	<br>|<strong>__</strong>README.md
	<br>|<strong>__</strong>tsconfig.json</p>

<h4>Runing App</h4>

<p><code>npm stsrt</code></p>

<h4>Runing REST</h4>

<p><code>npm run test</code></p>

<h4>Testing REST APIs</h4>

<h5>&quot;GET api/posts &quot; : - All post, (with filter)</h5><pre>
<code>{</code>
<code>   &quot;url&quot;: &quot;http://localhost:50011/api/post/&quot;,</code>
<code>   &quot;method&quot;: &quot;GET&quot;,</code>
<code>   &quot;params&quot;: {</code>
<code>      &quot;filtet&quot;: true,</code>
<code>      &quot;pageSize&quot;: 10,</code>
<code>      &quot;pageNumber&quot;:  1,</code>
<code>      &quot;sort&quot;: &quot;asc&quot;,</code>
<code>      &quot;sortName&quot;: &quot;title&quot;,</code>
<code>      &quot;searchFilters&quot;: JSON.stringify({</code>
<code>          &quot;searchOption&quot;:&quot;OR&quot;,</code>
<code>          &quot;rules&quot;:[{</code>
<code>          &quot;field&quot;:&quot;content&quot;,</code>
<code>          &quot;option&quot;:&quot;cn&quot;,</code>
<code>          &quot;type&quot;:&quot;string&quot;,</code>
<code>          &quot;data&quot;:&quot;example&quot;</code>
<code>        }]</code>
<code>      }),</code>
<code>     },
  },
</code></pre>

<h5>&quot;GET api/posts&quot; : - All post (without filter)</h5><pre>
<code>{</code>
<code>    &quot;url&quot;: &quot;http://localhost:50011/api/post/&quot;,
    &quot;method&quot;: &quot;GET&quot;,
    &quot;params&quot;: {
        &quot;filter&quot;: false,
        &quot;pageSize&quot;: 10,
        &quot;pageNumber&quot;:  1,
        &quot;sort&quot;: &quot;asc&quot;,
        &quot;sortName&quot;: &quot;title&quot;
     },
},
</code></pre>

<h5>&quot;GET api/posts/:id&quot; : - Single post</h5><pre><code>{
    &quot;url&quot;: &quot;http://localhost:50011/api/post/update/604d0d0e8ec8f083549c7d03&quot;,
}
</code></pre>

<h5>&quot;POST api/posts/add&quot;</h5><pre><code>{
  &quot;url&quot;: &quot;http://localhost:50011/api/post/add&quot;,
  &quot;body&quot;: {
      &quot;title&quot;: &quot;Example Title&quot;,
      &quot;content&quot;: &quot;Lorem ipsum dolor sit amet, consectetuer adipiscing elit.&quot;,
      &quot;meta&quot;:{
        &quot;author&quot;: &quot;Will Abule&quot;,
        &quot;authorProfilePicture&quot;: &quot;https://lh3.googleusercontent.com/ogw/ADGmqu91E9OHpXVoUIy7ASGCCjl3T6CkOj02NXFupAW2Fg=s64-c-mo&quot;
      },
      &quot;images&quot;: [{
        &quot;url&quot;: &quot;https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png&quot;,
        &quot;cover&quot;: true
      },{
        &quot;url&quot;: &quot;https://lh3.googleusercontent.com/ogw/ADGmqu91E9OHpXVoUIy7ASGCCjl3T6CkOj02NXFupAW2Fg=s64-c-mo&quot;,
        &quot;cover&quot;: false
      },{
        &quot;url&quot;: &quot;https://www.maketecheasier.com/assets/uploads/2017/09/Dummy-Text-Random-Example.jpg&quot;,
        &quot;cover&quot;: false
      }]
  }
</code></pre>

<h5>&quot;PUT api/posts/update/:id&quot;</h5><pre><code>{
  &quot;url&quot;: &quot;http://localhost:50011/api/post/update/604d0d0e8ec8f083549c7d03&quot;,
  &quot;body&quot;: {
    {
      &quot;content&quot;: &quot;Example Lorem ipsum dolor sit amet.&quot;
    }
  }
}
</code></pre>

<h4>Testing REST APIs</h4>

<p><a href="http://localhost:50011/graphql">Go to</a>.</p>

<h5>To add</h5><pre><code>mutation {
  createComment(
            postId: &quot;604d0d0e8ec8f083549c7d03&quot;,
            comment: &quot;qwerty dolor sit amet.&quot;
    ) {
        status,
        error,
    data
  }
}
</code></pre>

<h5>To get (without filter)</h5><pre><code>{
  getComments(
            query: {
                     filter: false, 
                     sort: &quot;asc&quot;, 
                     sortName: &quot;createdAt&quot;,
                     pageSize: 10, 
                     pageNumber: 1
            }
        ) {
    status
    data
  }
}
</code></pre>

<h5>To get (with filter)</h5><pre><code>{
  getComments(
            query: {
                        filter: false, 
                        sort: &quot;asc&quot;, 
                        sortName: &quot;createdAt&quot;,
                        pageSize: 10, 
                        pageNumber: 1,
                        searchFilters: &quot;{&quot;searchOption&quot;:&quot;OR&quot;,&quot;rules&quot;:[{&quot;field&quot;:&quot;content&quot;,&quot;option&quot;:&quot;cn&quot;,&quot;type&quot;:&quot;string&quot;,&quot;data&quot;:&quot;example&quot;}]}&quot;
            }
        ) {
    status
    data
  }
}
</code></pre>

<h2>Done! 🤓</h2>
