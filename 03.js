for (var i = 0; i < 8; i++) {
    var oddCol = i % 2
    var raws = []
    for (var j = 0; j < 8; j++) {
        if (j % 2 === oddCol) {
            var square = '[ ]'
        } else {
            var square = '[#]'
        }
        raws.push(square)
    }
    console.log(raws.join(''));
} 
