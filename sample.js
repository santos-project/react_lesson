let dom = document.querySelector('#root')
 
let element = React.createElement(
  'h2', {}, 'Welcome to React world.'
)
 
ReactDOM.render(element, dom)
