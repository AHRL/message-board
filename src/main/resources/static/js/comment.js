$.ajax({
    type: 'GET',
    url: 'http://192.168.43.245:8080/back',
    dataType: 'json',
    data: {},
    success: function (data) {
        alert('a');
    },
    error: function () {
        alert('b');
    }
})