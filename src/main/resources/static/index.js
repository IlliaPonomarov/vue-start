

var app = new Vue({
    el: '#app-2',
    data: {
        text: 'Вы загрузили эту страницу: ' + new Date().toLocaleString(),
        seen : true,
        address: [
            {text: 'HTML/CSS' },
            {text: 'JavaScript' },
            {text : 'Vue'}
        ]
}
})


// app.seen = false