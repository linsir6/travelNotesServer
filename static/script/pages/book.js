/**
 * Created by on 17/1/15.bookjs文件
 */
var id = location.href.split('?id=').pop();
$.get('/ajax/book?id=' + id, function (d) {
    new Vue({
        el: '#app',
        data: d,
        methods: {
            readBook: function () {

            }
        }
    });
}, 'json');