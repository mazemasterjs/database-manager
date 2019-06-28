# database-manager

Wrapper for the MongoDB driver for node that provides CRUD operations (and a few extended operations). Primarily used by MazeMasterJS services.

## Details

- database-manager leverages the singleton pattern and cannot be instantiated directly
  -- Correct: `const dbm = DatabaseManager().getInstance()`
  -- Incorrect: `const dbm = new DatabaseManager()`
- "query" parameter is in object format and specifies search parameters. Examples:
  -- Get document with id matching "3:3:3:MazeSeed": `{ id: '3:3:3:MazeSeed' }`
  -- Get all documents that have height and width of 3: `{ height: 3, width: 3}`
- "projection" parameter, also in object format, is for field selection. Examples:
  -- All fields _except_ specified: `{ _id: 0, cells: 0, textRender: 0 }`
  -- Only the specified fields: `{ id: 1, height: 1, width: 1, textRender: 1}`
- getDocuments() is paged and cannot return more than the number of documents specified by process.env.MONGO_CURSOR_LIMIT.
  -- pageSize indicates the number of documents desired (1 to process.env.MONGO_CURSOR_LIMIT)
  -- pageNumber indicates the page set to return
- Optional parameters (denoted by ?) may be omitted - default values, typically select-all wildcards, will be used instead.

### Public Method Signatures (v1.2.3)

- `public static async getInstance(): Promise<any>`
- `public async getDocumentCount(collectionName: string, query?: any): Promise<number>`
- `public async getDocuments(collectionName: string, query: any, projection: any, pageSize: number, pageNumber: number ): Promise<Array<any>>`
- `public async getDocument(collectionName: string, query: any, projection?: any): Promise<any>`
- `public async updateDocument(collectionName: string, query: any, doc: any): Promise<UpdateWriteOpResult>`
- `public async deleteDocument(collectionName: string, query: any): Promise<DeleteWriteOpResultObject>`
- `public async deleteDocuments(collectionName: string, query: any): Promise<DeleteWriteOpResultObject>`
- `public isConnected(): boolean`
- `public disconnect(): boolean`

## Notes

- Mocha/Chai used for unit testing (see /test)
- SonarCloud scan results: https://sonarcloud.io/dashboard?id=mazemasterjs_database-manager

## Change Log

### v1.5.0

- Added support for a users collection to be used for authentication / authorization

### v1.5.0

- Added support for a bot_code collection to be used by service-base/team to store, version, and retrieve bot code scripts

### v1.4.1

- added sort support to getDocuments() : @param sort any - JSON object listing fields and sort types: {lastUpdated: -1, name: 1} (-1=descending, 1=ascending)

### v1.3.0

- added support for trophies collection

### v1.2.7

- fixed promise return bug in deleteDocuments()
- more logging tweaks
- updated dependencies

### v1.2.6

- added deleteDocuments(collectionName: string, query: any) to delete multiple documents
- updated disconnect() to disconnect(): boolean - now returns true after completion
- added disconnect delay to mocha "after()" hook
- added tests for deleteDocuments()

### v1.2.3

- Raised several debug logs to trace level

### v1.1.0 -> v1.2.2

- **BREAKING CHANGE** Added cursor limit (env.MONGO_CURSOR_LIMIT). Current value value is 10.
- **BREAKING CHANGE** getDocuments(collectionName: string, query: any,_ projection: any, pageSize: number, pageNumber: number _)
- **BREAKING CHANGE** getDocument(collectionName: _string, query: any, projection?: any_)
- **BREAKING CHANGE** updateDocument(collectionName: string, _query: any, doc: any_)
- **BREAKING CHANGE** deleteDocument(collectionName: string, _query: any_)
- Performance: Added logic to avoid making calls to logger with serialized parameters when debug logging is disabled
- Quality: Additional test cases added to verify paging and new query/projection parameters
