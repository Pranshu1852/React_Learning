const child1=React.createElement('p',{},'This is first child1');
const child2=React.createElement('p',{},'This is first child2');

const div=React.createElement('div',{className: 'container'},[child1,child2]);

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(div);