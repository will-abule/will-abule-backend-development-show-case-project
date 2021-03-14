# Basic Example
Hi, My name is Will Abule, I’m a Full-Stack web developer with over 6 years of professional software development experience. I primarily code using JavaScript, TypeScript, or Python. However, I have a history with Kotlin, C#, and Java. I make client-side applications using Angular, Vue, React and React Native with its ecosystem of friends. Node Js, and Express framework for backend/server-side RestFul and Graphql APIS applications and MongoDB, MySQL, or Firebase as Database. And recently took interest in graph databases using DGraph and gRPC for APIs communication. This project is to show case my ability with backend development. This api application consist of test, rest, graphql and mongodb database.


## Rquirements
You need the following installed in your meachine to run this project.

* [Node](https://nodejs.org/)
* [MongoDb](https://docs.mongodb.com/manual/installation/)
* [Typescript](https://www.npmjs.com/package/typescript) Installed globally in your computer.

you can install typescript globally using the following command.

`npm i -g typescript`

### Folder Structure

______config
|______|____custom-environment-variables.json
|______|____default.json
|______|____production.json
|______|____test.json
|______dist
|______|____middleware
|______|____|________error-middleware.js
|______|____|________error-middleware.js.map
|______|____models
|______|____|________comment-model.js
|______|____|________comment-model.js.map
|______|____|________post-model.js
|______|____|________post-model.js.map
|______|____routes
|______|____|________graphql
|______|____|________|________mutations
|______|____|________|________|__________comment-mutation.js
|______|____|________|________|__________comment-mutation.js.map
|______|____|________|________query
|______|____|________|________|__________comment-query.js
|______|____|________|________|__________comment-query.js.map
|______|____|________|________schema
|______|____|________|________|__________index.js
|______|____|________|________|__________index.js.map
|______|____|________|________type-definitions
|______|____|________|________|__________comment-type-definitions.js
|______|____|________|________|__________comment-type-definitions.js.map
|______|____|________rest
|______|____|________|________post-route.js
|______|____|________|________post-route.js.map
|______|____startup
|______|____|________config.js
|______|____|________config.js.map
|______|____|________db.js
|______|____|________db.js.map
|______|____|________init.js
|______|____|________init.js.map
|______|____|________logger.js
|______|____|________logger.js.map
|______|____|________route.js
|______|____|________route.js.map
|______|____test
|______|____|________post-rest-api-route.test.js
|______|____|________post-rest-api-route.test.js.map
|______|____utils
|______|____|________functions
|______|____|________|______empty-object-function.js
|______|____|________|______empty-object-function.js.map
|______|____|________|______query-validator-function.js
|______|____|________|______query-validator-function.js.map
|______|____|________|______select-functions-function.js
|______|____|________|______select-functions-function.js.map
|______|____|________interfaces
|______|____|________|______comment-interface.js
|______|____|________|______comment-interface.js.map
|______|____|________|______post-interface.js
|______|____|________|______post-interface.js.map
|______|____postman-collection-export
|______|____|________Will Abule Showcase.postman_collection.json
|______index.js
|______index.js.map
|______src
|______|____middleware
|______|____|________error-middleware.ts
|______|____models
|______|____|________comment-model.ts
|______|____|________post-model.ts
|______|____routes
|______|____|________graphql
|______|____|________|________mutations
|______|____|________|________|__________comment-mutation.ts
|______|____|________|________query
|______|____|________|________|__________comment-query.ts
|______|____|________|________schema
|______|____|________|________|__________index.ts
|______|____|________|________type-definitions
|______|____|________|________|__________comment-type-definitions.ts
|______|____|________rest
|______|____|________|________post-route.ts
|______|____startup
|______|____|________config.ts
|______|____|________db.ts
|______|____|________init.ts
|______|____|________logger.ts
|______|____|________route.ts
|______|____test
|______|____|________post-rest-api-route.test.ts
|______|____utils
|______|____|________functions
|______|____|________|______empty-object-function.ts
|______|____|________|______query-validator-function.ts
|______|____|________|______select-functions-function.ts
|______|____|________interfaces
|______|____|________|______comment-interface.ts
|______|____|________|______post-interface.ts
|______index.ts
|______package-lock.json
|______package.json
|______README.md
|______tsconfig.json

#### Runing App

`npm stsrt`

#### Runing REST 

`npm run test`

#### Testing REST APIs

##### "GET api/posts " : - All post, (with filter)
```
		{
			"url": "http://localhost:50011/api/post/",
				"method": "GET",
				"params": {
								"filtet": true,
								"pageSize": 10,
								"pageNumber":  1,
								"sort": "asc",
								"sortName": "title",
								"searchFilters": JSON.stringify({
											"searchOption":"OR",
											"rules":[{
														"field":"content",
														"option":"cn",
														"type":"string",
														"data":"example"
											 }]
								}),
					},
		},
```
##### "GET api/posts" : - All post (without filter)
```
		{
			"url": "http://localhost:50011/api/post/",
				"method": "GET",
				"params": {
							"filtet": false,
							"pageSize": 10,
							"pageNumber":  1,
							"sort": "asc",
							"sortName": "title"
					},
		},
```

##### "GET api/posts/:id" : - Single post 

```
{
	"url": "http://localhost:50011/api/post/update/604d0d0e8ec8f083549c7d03",
}
```

##### "POST api/posts/add"

```
{
  "url": "http://localhost:50011/api/post/add",
  "body": {
      "title": "Example Title",
      "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "meta":{
        "author": "Will Abule",
        "authorProfilePicture": "https://lh3.googleusercontent.com/ogw/ADGmqu91E9OHpXVoUIy7ASGCCjl3T6CkOj02NXFupAW2Fg=s64-c-mo"
      },
      "images": [{
        "url": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
        "cover": true
      },{
        "url": "https://lh3.googleusercontent.com/ogw/ADGmqu91E9OHpXVoUIy7ASGCCjl3T6CkOj02NXFupAW2Fg=s64-c-mo",
        "cover": false
      },{
        "url": "https://www.maketecheasier.com/assets/uploads/2017/09/Dummy-Text-Random-Example.jpg",
        "cover": false
      }]
  }

```

##### "PUT api/posts/update/:id"

```
{
  "url": "http://localhost:50011/api/post/update/604d0d0e8ec8f083549c7d03",
  "body": {
    {
      "content": "Example Lorem ipsum dolor sit amet."
    }
  }
}
```

#### Testing REST APIs

[Go to](http://localhost:50011/graphql).


##### To add 

```
mutation {
  createComment(
			postId: "604d0d0e8ec8f083549c7d03",
			comment: "qwerty dolor sit amet."
	) {
		status,
		error,
    data
  }
}
```

##### To get (witouth filter) 

```
{
  getComments(
			query: {
						filter: false, 
						sort: "asc", 
						sortName: "createdAt",
						pageSize: 10, 
						pageNumber: 1
			}
		) {
    status
    data
  }
}

```

##### To get (with filter) 

```
{
  getComments(
			query: {
						filter: false, 
						sort: "asc", 
						sortName: "createdAt",
						pageSize: 10, 
						pageNumber: 1,
						searchFilters: "{"searchOption":"OR","rules":[{"field":"content","option":"cn","type":"string","data":"example"}]}"
			}
		) {
    status
    data
  }
}

```

## Done! 🤓


                                    