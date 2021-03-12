export default function () {
    return {
        todos: [
            {
                id: 1,
                name : 'tache 1',
                completed : false
            },
            {
                id: 2,
                name : 'tache 2',
                completed: true
            },
            {
                id: 3,
                name: 'tache 3',
                completed: false
            }
        ]
        ,
        newTodo: '',
        filter: 'all',
    }
}