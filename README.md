# UI Assessment

# Design file
https://www.figma.com/file/fO9SrIq6PCQSoJ8iqT0A3O/Sample-UI?node-id=1%3A2

# Assets
Icons and images are included in the assets folder of this repo

# API
Docs: https://camiestas-futbol.effectstudios.co/api/docs <br>
Base URL: https://camiestas-futbol.effectstudios.co/api

#### Banners
```shell
GET https://camiestas-futbol.effectstudios.co/api/v1/banner
```
#### Popular products
```shell
GET https://camiestas-futbol.effectstudios.co/api/v1/product-category
```
#### Product collections/categories
Slugs for `Country Leagues` and `Other Collections` can be found in the results returned from this endpoint
```shell
GET https://camiestas-futbol.effectstudios.co/api/v1/product-category
```
#### Single collection/category
```shell
GET https://camiestas-futbol.effectstudios.co/api/v1/product-category-slug/{slug}
```
#### Single product details/information
```shell
GET https://camiestas-futbol.effectstudios.co/api/v1/product-single/{slug}
```

# Objectives
- Fork this repository.
- Build the user interface exaclty as seen in the design file linked above. Alignment, spacing and precision are key.
- Connect the UI to the backend using the API provided above
- Animations are not required, but would be a plus.

# Requirements
### Web Framework (Any of)
- React ([Vite](https://vitejs.dev/)) or [Next.js](https://nextjs.org/)
- [Vue 3](https://vuejs.org/) or [Nuxt 3](https://v3.nuxtjs.org/)

### UI library (Any of) 
- [TailwindCSS](https://tailwindcss.com/)
- Vanilla CSS or SCSS

# Deadline
72hrs after you've accepted the invite to the Figma file.

If you've got any questions, do leave it in the discussions panel and mention @pyplacca in it.

# Submission Instructions
1. Create a deployment link.
2. [Email](mailto:david@effectstudios.co?subject=Submission:%20Frontend%20Developer%20Assessment) links of the deployment and Github repository.
