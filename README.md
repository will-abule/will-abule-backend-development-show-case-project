# Basic Example

Hi, My name is Will Abule, I’m a Full-Stack web developer with over 6 years of professional software development experience. I primarily code using JavaScript, TypeScript, or Python. However, I have a history with Kotlin, C#, and Java. I make client-side applications using Angular, Vue, React and React Native with its ecosystem of friends. Node Js, and Express framework for backend/server-side RestFul and Graphql APIS applications and MongoDB, MySQL, or Firebase as Database. And recently took interest in graph databases using DGraph and gRPC for APIs communication. This project is to show case my ability with backend development. This api application consist of test, rest, graphql and mongodb database.

## Rquirements

You need the following installed in your meachine to run this project.

- [Node](https://nodejs.org/)
- [MongoDb](https://docs.mongodb.com/manual/installation/)
- [Typescript](https://www.npmjs.com/package/typescript) Installed globally in your computer.

you can install typescript globally using the following command.

`npm i -g typescript`

### Folder Structure

**\_\_**config
|**\_\_**|\_**\_custom-environment-variables.json
|\_\_\_\_**|\_**\_default.json
|\_\_\_\_**|\_**\_production.json
|\_\_\_\_**|\_**\_test.json
|\_\_\_\_**dist
|**\_\_**|\_**\_middleware
|\_\_\_\_**|\_**\_|**\_\_\***\*error-middleware.js
|**\_\_**|\_**\_|**\_\_\*\***error-middleware.js.map
|**\_\_**|\_**\_models
|\_\_\_\_**|\_**\_|**\_\_\***\*comment-model.js
|**\_\_**|\_**\_|**\_\_\*\***comment-model.js.map
|**\_\_**|\_**\_|**\_\_\***\*post-model.js
|**\_\_**|\_**\_|**\_\_\*\***post-model.js.map
|**\_\_**|\_**\_routes
|\_\_\_\_**|\_**\_|**\_\_\***\*graphql
|**\_\_**|\_**\_|**\_\_\*\***|**\_\_\_\_**mutations
|**\_\_**|\_**\_|**\_\_\***\*|**\_\_\_\_**|\*\***\_\_\***\*comment-mutation.js
|**\_\_**|\_**\_|**\_\_\*\***|**\_\_\_\_**|\***\*\_\_\*\***comment-mutation.js.map
|**\_\_**|\_**\_|**\_\_\***\*|**\_\_\_\_**query
|**\_\_**|\_**\_|**\_\_\*\***|**\_\_\_\_**|\***\*\_\_\*\***comment-query.js
|**\_\_**|\_**\_|**\_\_\***\*|**\_\_\_\_**|\*\***\_\_\***\*comment-query.js.map
|**\_\_**|\_**\_|**\_\_\*\***|**\_\_\_\_**schema
|**\_\_**|\_**\_|**\_\_\***\*|**\_\_\_\_**|\*\***\_\_\***\*index.js
|**\_\_**|\_**\_|**\_\_\*\***|**\_\_\_\_**|\***\*\_\_\*\***index.js.map
|**\_\_**|\_**\_|**\_\_\***\*|**\_\_\_\_**type-definitions
|**\_\_**|\_**\_|**\_\_\*\***|**\_\_\_\_**|\***\*\_\_\*\***comment-type-definitions.js
|**\_\_**|\_**\_|**\_\_\***\*|**\_\_\_\_**|\*\***\_\_\***\*comment-type-definitions.js.map
|**\_\_**|\_**\_|**\_\_\*\***rest
|**\_\_**|\_**\_|**\_\_\***\*|**\_\_\_\_**post-route.js
|**\_\_**|\_**\_|**\_\_\*\***|**\_\_\_\_**post-route.js.map
|**\_\_**|\_**\_startup
|\_\_\_\_**|\_**\_|**\_\_\***\*config.js
|**\_\_**|\_**\_|**\_\_\*\***config.js.map
|**\_\_**|\_**\_|**\_\_\***\*db.js
|**\_\_**|\_**\_|**\_\_\*\***db.js.map
|**\_\_**|\_**\_|**\_\_\***\*init.js
|**\_\_**|\_**\_|**\_\_\*\***init.js.map
|**\_\_**|\_**\_|**\_\_\***\*logger.js
|**\_\_**|\_**\_|**\_\_\*\***logger.js.map
|**\_\_**|\_**\_|**\_\_\***\*route.js
|**\_\_**|\_**\_|**\_\_\*\***route.js.map
|**\_\_**|\_**\_test
|\_\_\_\_**|\_**\_|**\_\_\***\*post-rest-api-route.test.js
|**\_\_**|\_**\_|**\_\_\*\***post-rest-api-route.test.js.map
|**\_\_**|\_**\_utils
|\_\_\_\_**|\_**\_|**\_\_\***\*functions
|**\_\_**|\_**\_|**\_\_\*\***|**\_\_**empty-object-function.js
|**\_\_**|\_**\_|**\_\_\***\*|**\_\_**empty-object-function.js.map
|**\_\_**|\_**\_|**\_\_\*\***|**\_\_**query-validator-function.js
|**\_\_**|\_**\_|**\_\_\***\*|**\_\_**query-validator-function.js.map
|**\_\_**|\_**\_|**\_\_\*\***|**\_\_**select-functions-function.js
|**\_\_**|\_**\_|**\_\_\***\*|**\_\_**select-functions-function.js.map
|**\_\_**|\_**\_|**\_\_\*\***interfaces
|**\_\_**|\_**\_|**\_\_\***\*|**\_\_**comment-interface.js
|**\_\_**|\_**\_|**\_\_\*\***|**\_\_**comment-interface.js.map
|**\_\_**|\_**\_|**\_\_\***\*|**\_\_**post-interface.js
|**\_\_**|\_**\_|**\_\_\*\***|**\_\_**post-interface.js.map
|**\_\_**|\_**\_postman-collection-export
|\_\_\_\_**|\_**\_|**\_\_\***\*Will Abule Showcase.postman_collection.json
|**\_\_**index.js
|**\_\_**index.js.map
|**\_\_**src
|**\_\_**|\_**\_middleware
|\_\_\_\_**|\_**\_|**\_\_\*\***error-middleware.ts
|**\_\_**|\_**\_models
|\_\_\_\_**|\_**\_|**\_\_\***\*comment-model.ts
|**\_\_**|\_**\_|**\_\_\*\***post-model.ts
|**\_\_**|\_**\_routes
|\_\_\_\_**|\_**\_|**\_\_\***\*graphql
|**\_\_**|\_**\_|**\_\_\*\***|**\_\_\_\_**mutations
|**\_\_**|\_**\_|**\_\_\***\*|**\_\_\_\_**|\*\***\_\_\***\*comment-mutation.ts
|**\_\_**|\_**\_|**\_\_\*\***|**\_\_\_\_**query
|**\_\_**|\_**\_|**\_\_\***\*|**\_\_\_\_**|\*\***\_\_\***\*comment-query.ts
|**\_\_**|\_**\_|**\_\_\*\***|**\_\_\_\_**schema
|**\_\_**|\_**\_|**\_\_\***\*|**\_\_\_\_**|\*\***\_\_\***\*index.ts
|**\_\_**|\_**\_|**\_\_\*\***|**\_\_\_\_**type-definitions
|**\_\_**|\_**\_|**\_\_\***\*|**\_\_\_\_**|\*\***\_\_\***\*comment-type-definitions.ts
|**\_\_**|\_**\_|**\_\_\*\***rest
|**\_\_**|\_**\_|**\_\_\***\*|**\_\_\_\_**post-route.ts
|**\_\_**|\_**\_startup
|\_\_\_\_**|\_**\_|**\_\_\*\***config.ts
|**\_\_**|\_**\_|**\_\_\***\*db.ts
|**\_\_**|\_**\_|**\_\_\*\***init.ts
|**\_\_**|\_**\_|**\_\_\***\*logger.ts
|**\_\_**|\_**\_|**\_\_\*\***route.ts
|**\_\_**|\_**\_test
|\_\_\_\_**|\_**\_|**\_\_\***\*post-rest-api-route.test.ts
|**\_\_**|\_**\_utils
|\_\_\_\_**|\_**\_|**\_\_\*\***functions
|**\_\_**|\_**\_|**\_\_\***\*|**\_\_**empty-object-function.ts
|**\_\_**|\_**\_|**\_\_\*\***|**\_\_**query-validator-function.ts
|**\_\_**|\_**\_|**\_\_\***\*|**\_\_**select-functions-function.ts
|**\_\_**|\_**\_|**\_\_\*\***interfaces
|**\_\_**|\_**\_|**\_\_\***\*|**\_\_**comment-interface.ts
|**\_\_**|\_**\_|**\_\_\*\***|**\_\_**post-interface.ts
|**\_\_**index.ts
|**\_\_**package-lock.json
|**\_\_**package.json
|**\_\_**README.md
|**\_\_**tsconfig.json

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
