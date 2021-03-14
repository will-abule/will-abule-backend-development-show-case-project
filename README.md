<h1>Basic Example</h1>

<p>Hi, My name is Will Abule, I&rsquo;m a Full-Stack web developer with over 6 years of professional software development experience. I primarily code using JavaScript, TypeScript, or Python. However, I have a history with Kotlin, C#, and Java. I make client-side applications using Angular, Vue, React and React Native with its ecosystem of friends. Node Js, and Express framework for backend/server-side RestFul and Graphql APIS applications and MongoDB, MySQL, or Firebase as Database. And recently took interest in graph databases using DGraph and gRPC for APIs communication. This project is to showcase my ability with backend development. This API application consists of tests code, rest, GraphQl, and MongoDB database.</p>

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

<p>__<strong>config</strong>
	<br>|__|__custom-environment-variables.json
	<br>|__|__default.json
	<br>|__|__production.json
	<br>|__|__test.json<strong><br></strong>|__<strong>dist</strong>
	<br>|__|__<strong>middleware</strong>
	<br>|__|__|<em>__</em>error-middleware.js
	<br>|__|__|<em>__</em>error-middleware.js.map
	<br>|__|__<strong>models</strong>
	<br>|__|__|<em>__</em>comment-model.js
	<br>|__|__|<em>__</em>comment-model.js.map
	<br>|__|__|<em>__</em>post-model.js
	<br>|__|__|<em>__</em>post-model.js.map
	<br>|__|__r<strong>routes</strong>
	<br>|__|__|<em>__</em><strong>graphql</strong>
	<br>|__|__|<em>__</em>|<em>__</em>mutations
	<br>|__|__|<em>__</em>|<em>__</em>|__comment-mutation.js
	<br>|__|__|<em>__</em>|<em>__</em>|__comment-mutation.js.map
	<br>|__|__|<em>__</em>|<em>__</em><strong>query</strong>
	<br>|__|__|<em>__</em>|<em>__</em>|__comment-query.js
	<br>|__|__|<em>__</em>|<em>__</em>|__comment-query.js.map
	<br>|__|__|<em>__</em>|<em>__</em><strong>schema</strong>
	<br>|__|__|<em>__</em>|<em>__</em>|__index.js
	<br>|__|__|<em>__</em>|<em>__</em>|__index.js.map
	<br>|__|__|<em>__</em>|<em>__</em><strong>type-definitions</strong>
	<br>|__|__|<em>__</em>|<em>__</em>|__comment-type-definitions.js
	<br>|__|__|<em>__</em>|<em>__</em>|__comment-type-definitions.js.map
	<br>|__|__|<em>__</em><strong>rest</strong>
	<br>|__|__|<em>__</em>|<em>__</em>post-route.js
	<br>|__|__|<em>__</em>|<em>__</em>post-route.js.map
	<br>|__|__<strong>startup</strong>
	<br>|__|__|<em>__</em>config.js
	<br>|__|__|<em>__</em>config.js.map
	<br>|__|__|<em>__</em>db.js
	<br>|__|__|<em>__</em>db.js.map
	<br>|__|__|<em>__</em>init.js
	<br>|__|__|<em>__</em>init.js.map
	<br>|__|__|<em>__</em>logger.js
	<br>|__|__|<em>__</em>logger.js.map
	<br>|__|__|<em>__</em>route.js
	<br>|__|__|<em>__</em>route.js.map
	<br>|__|__<strong>test</strong>
	<br>|__|__|<em>__</em>post-rest-api-route.test.js
	<br>|__|__|<em>__</em>post-rest-api-route.test.js.map
	<br>|__|__<strong>utils</strong>
	<br>|__|__|<em>__</em><strong>functions</strong>
	<br>|__|__|<em>__</em>|__empty-object-function.js
	<br>|__|__|<em>__</em>|__empty-object-function.js.map
	<br>|__|__|<em>__</em>|__query-validator-function.js
	<br>|__|__|<em>__</em>|__query-validator-function.js.map
	<br>|__|__|<em>__</em>|__select-functions-function.js
	<br>|__|__|<em>__</em>|__select-functions-function.js.map
	<br>|__|__|<em>__</em><strong>interfaces</strong>
	<br>|__|__|<em>__</em>|__comment-interface.js
	<br>|__|__|<em>__</em>|__comment-interface.js.map
	<br>|__|__|<em>__</em>|__post-interface.js
	<br>|__|__|<em>__</em>|__post-interface.js.map
	<br>|__|__<strong>postman-collection-export</strong>
	<br>|__|__|<em>__</em>Will Abule Showcase.postman_collection.json
	<br>|__index.js
	<br>|__index.js.map
	<br>|__<strong>src</strong>
	<br>|__|__<strong>middleware</strong>
	<br>|__|__|<em>__</em>error-middleware.ts
	<br>|__|__<strong>models</strong>
	<br>|__|__|<em>__</em>comment-model.ts
	<br>|__|__|<em>__</em>post-model.ts
	<br>|__|__<strong>routes</strong>
	<br>|__|__|<em>__</em><strong>graphql</strong>
	<br>|__|__|<em>__</em>|<em>__</em><strong>mutations</strong>
	<br>|__|__|<em>__</em>|<em>__</em>|__comment-mutation.ts
	<br>|__|__|<em>__</em>|<em>__</em><strong>query</strong>
	<br>|__|__|<em>__</em>|<em>__</em>|__comment-query.ts
	<br>|__|__|<em>__</em>|<em>__</em><strong>schema</strong>
	<br>|__|__|<em>__</em>|<em>__</em>|__index.ts
	<br>|__|__|<em>__</em>|<em>__</em><strong>type-definitions</strong>
	<br>|__|__|<em>__</em>|<em>__</em>|__comment-type-definitions.ts
	<br>|__|__|<em>__</em><strong>rest</strong>
	<br>|__|__|<em>__</em>|<em>__</em>post-route.ts
	<br>|__|__<strong>startup</strong>
	<br>|__|__|<em>__</em>config.ts
	<br>|__|__|<em>__</em>db.ts
	<br>|__|__|<em>__</em>init.ts
	<br>|__|__|<em>__</em>logger.ts
	<br>|__|__|<em>__</em>route.ts
	<br>|__|__<strong>test</strong>
	<br>|__|__|<em>__</em>post-rest-api-route.test.ts
	<br>|__|__<strong>utils</strong>
	<br>|__|__|<em>__</em><strong>functions</strong>
	<br>|__|__|<em>__</em>|__empty-object-function.ts
	<br>|__|__|<em>__</em>|__query-validator-function.ts
	<br>|__|__|<em>__</em>|__select-functions-function.ts
	<br>|__|__|<em>__</em><strong>interfaces</strong>
	<br>|__|__|<em>__</em>|__comment-interface.ts
	<br>|__|__|<em>__</em>|__post-interface.ts
	<br>|__index.ts
	<br>|__package-lock.json
	<br>|__package.json
	<br>|__README.md
	<br>|__tsconfig.json</p>

<h4>Running App</h4>

<p><code>npm start</code></p>

<h4>Running TEST</h4>

<p><code>npm run test</code></p>

<h4>Testing REST APIs</h4>

<p>
	<br>
</p>

<h5>&quot;GET api/posts &quot; : - All post, (with filter)</h5><pre><code>{</code>
<code>   &quot;url&quot;: &quot;http://localhost:50011/api/post/&quot;,</code>
<code>   &quot;method&quot;: &quot;GET&quot;,</code>
<code>   &quot;params&quot;: {</code>
<code>      &quot;filter&quot;: true,</code>
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

<h5>&quot;GET api/posts&quot; : - All post (without filter)</h5><pre><code>{</code>
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

<h4>Testing GraphQL APIs</h4>

<p><a href="http://localhost:50011/graphql" rel="noopener noreferrer" target="_blank">Go to http://localhost:50011/graphql</a>.</p>

<h5>To TEST Mutations</h5><pre><code>mutation {
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

<h5>To TEST Query (without filter)</h5><pre><code>{
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

<h5>To TEST Query (with filter)</h5><pre><code>{
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
