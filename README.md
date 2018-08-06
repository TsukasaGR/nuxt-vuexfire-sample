# nuxt-vuexfire-sample

## What is this repos

Sample using nuxt and vuexfire.

## Usage

1. Set the databaseURL of firebase

    ```javascript:plugins/firebase.js
    import firebase from 'firebase'
    
    if (!firebase.apps.length) {
      firebase.initializeApp({
        // Set up your domain
        databaseURL: 'https://xxx.firebaseio.com/',
      })
    }
    export default firebase
    ```

2. Set the db.ref

    ```javascript:store/first.js or second.js
    import firebase from '@/plugins/firebase'
    import { firebaseMutations, firebaseAction } from 'vuexfire'
    
    const db = firebase.database()
    // Set up your db.ref
    const itemsRef = db.ref('xxx')
    ```

3. Set the property

    ```html:components/VuexFireSample.vue
    // Set the property
    <div v-for="item in items" :key="item.id">
      <li>{{ item.id }}</li>
    </div>
    ```

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

