
Vue.component('fuck',
    {
        props: ['item'],
        template: '<h2>{{ item.text }}</h2>'
    })


let app = new Vue({
    el: '#app-2',
    data: {
        list : [
            {id: 0, text: 'Fuck1'},
            {id: 1, text: 'Fuck2'},
            {id: 2, text: 'Fuck3'}
        ]
    }
})