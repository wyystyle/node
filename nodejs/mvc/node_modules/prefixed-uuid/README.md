prefixed-uuid
====

`prefixed-uuid` is a tiny module that adds optional prefixes to UUIDs.

## Installation

    npm install prefixed-uuid

## Usage

```javascript
var uuid = require( 'prefixed-uuid' );

uuid();
// '0428ccac-e9f0-4485-85f6-382ca438136f'

uuid( 'my-prefix' );
// 'my-prefix-bfe89a5c-6766-4acf-89be-70a122012f1a'

uuid( 'my-prefix', 'v1' );
// 'my-prefix-f3cc5d20-15a5-11e2-bec9-510613aafe0d'

uuid( null, 'v1' );
// 'fd8fe7f0-15a5-11e2-bec9-510613aafe0d'
```