//how to use react-router-dom?
<Router history={browserHistory}>
  <Route path='/' component={App} >
    <IndexRoute component={Home} />
    <Route path='product/:productId' component={Product} />
    <Route path='category/:catNumber' component={Category} />
    <Route path='cart' component={Cart} />
  </Route>
  <Route path='*' component={NotFound} />
</Router>


