const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))   // To Serve the Static Files
// app.use() is used to use a middleware and express.static is a built in middleware which tell use to make the folder named public(this name of the folder is a standard), a public folder. The files within this folder will be availbale to all. So don't put the backend code in this folder :))

// Syntax : app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World2!')
})

app.get('/about', (req, res) => { // about endpoint
  res.send('About Us')
})

app.get('/contact', (req, res) => { // contact endpoint
  res.send('Hello Contact!')
})

app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})

app.get('/blog/:slug', (req, res) => { // Because in our website we will have thousands of blog and it's not maintainable and its tiring to write endpoints for each blog.
    // Logic to fetch {slug} blog from the DB
    console.log(req)

    // For URL : http://127.0.0.1:3000/blog/rohan?mode=dark&region=in
    console.log(req.params) // Will output { slug: 'rohan' }
    console.log(req.query) // Will output somthing like  { mode: 'dark', region: 'in' }
    /*
    
    If we add add a question mark after the endpoint, then we get the set the query like
    "http://127.0.0.1:3000/blog/rohan?mode=dark&region=in"

    And when we printed the req object in the console, we got query and params too.. as follows:-

    params: { slug: 'rohan' },
    query: { mode: 'dark', region: 'in' },
    
    */

  res.send(`Hello ${req.params.slug}`)
})

app.get('/blog/:slug/:secondParam', (req, res) => { // This is also possible
    // Logic to fetch {slug} blog from the DB
  res.send(`Hello ${req.params.slug}  and ${req.params.secondParam}`)
})

/*

app.get('/blog/intro-to-js', (req, res) => {
    // Logic to fetch 'intro-to-js' blog from the DB
  res.send('Hello intro-to-js!')
})

app.get('/blog/intro-to-python', (req, res) => {
    // Logic to fetch 'intro-to-python' blog from the DB
  res.send('Hello intro-to-python!')
}) // But if we keep creating each endpoint for every blob, then will get thousands of lines of codes of endpoints only and the code becomes very less maintainable. That's why we use Express

*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
