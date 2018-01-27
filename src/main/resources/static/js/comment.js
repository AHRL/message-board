$.ajax({
    type: 'POST',
    url: 'http://localhost:7070/post',
    dataType: 'json',
    data: {},
    success: function (data) {
        var arr1 = [],
            arr2 = [];
        for(var key in data)
        {
            if(data[key].type){
                arr1.push(data[key]);
            }
            else {
                arr2.push(data[key]);
            }
        }
        for(var i = 0;i < arr1.length;i ++)
        {
            var word = $('<ul class="media-list ul-list" data-type="'+ arr1[i].type +'">' +
                '                <li class="media">' +
                '                    <div class="media-left">' +
                '                        <img src="../static/img/boy.png" alt="头像"/>' +
                '                        <span>阿呆</span>' +
                '                    </div>' +
                '                    <div class="media-body">' +
                '                        <p>'+ arr1[i].word +'</p>' +
                '                        <div class="media-footer clearfix">' +
                '                            <button class="delete pull-right">删除</button>' +
                '                            <img src="../static/img/pl.png" class="com" alt="评论" title="评论"/>' +
                '                            <time datatime="2017-10-21">2017/10/21</time>' +
                '                        </div>' +
                '                    </div>' +
                '                </li>' +
                '            </ul>')
            $('.ul-list:last').after(word);
        }
        for(var j = 0;j < arr2.length;j ++)
        {
            var commentUl = $('<ul class="media-list comment" comment="'+ arr2[j].comment +'"></ul>')
            $('ul[data-type = '+ arr2[j].comment + ']').createElement(commentUl);
            var comment = $(' <li class="media">' +
                '                                <div class="media-left">' +
                '                                    <img src="../static/img/girl-2.png" alt="头像"/>' +
                '                                    <span>秀智</span>' +
                '                                </div>' +
                '                                <div class="media-body">' +
                '                                    <p>'+ arr2[j].com +
                '                                    </p>' +
                '                                    <div class="media-footer">' +
                '                                        <button class="delete pull-right">删除</button>' +
                '                                        <time datatime="2017-10-21">2017/10/21</time>' +
                '                                    </div>' +
                '                                </div>' +
                '                            </li>')
            $('ul[comment = '+ arr2[j].comment +']').createElement(comment);
        }
    },
    error: function () {
        alert('网络连接错误，请刷新重试。');
    }
})