$(function() {
    $("#append-hoge").click(function() {
        var input_word = $("#append-text").val();
        $("#hoge-list").append("<li>" + input_word + "</li>");
        $("#append-text").val("");
    });
});


// $(function() {
//     $("input").bind("click", function() {
//         alert( "hello" );
//     });
// });
//
// これと同じ
// var init = function() {
//     $("input").bind("click", function() {
//         alert( "hello" );
//     });
// };
// $(init);
//

// $の引数に渡した関数を
// htmlの読み込みが終わったタイミングで実行してくれる


// selector
//
// div                -> tag name
// .foo               -> class name
// #hoge              -> id name
// input[type=submit] -> attribute name and value
// *                  -> all
// div input          -> divの子のinput
// div > input        -> divの直下の子のinput
// div[data-myattr=hoge].foo.bar
