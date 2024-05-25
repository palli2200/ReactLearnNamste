/*
<div id='parnet'>
    <div id='child1'>
        <h1> iam h1 tag </h1>
        <h1> iam h1 tag </h1>
    </div>
    <div id='child2'>
        <h1> iam h1 tag </h1>
        <h1> iam h1 tag </h1>
    </div>
</div>



*/


const parent = React.createElement('div', { id: 'parent' }, [
    React.createElement('div', {id:'child1'}, 
    [React.createElement('h1', {}, 'iam h1 tag'), React.createElement('h2', {}, 'iam h2 tag')]),
    React.createElement('div', {id:'child2'}, 
    [React.createElement('h1', {}, 'iam h1 tag'), React.createElement('h2', {}, 'iam h2 tag')])])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)