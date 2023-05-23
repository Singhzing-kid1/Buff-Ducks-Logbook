function createLogEntryCardFormJson(cardData){
    var template = [
        '<div class="logEntryCard">',
            '<div>',
                '<img class="thumbnail" src="' + cardData.thumbnail || 'https://placehold.co/127x127/000/FFF/png" alt="thumbnail"/>',
                '<button>Open Log</button>',
            '</div>',
            '<div>',
                '<h1>' + cardData.author || 'Author Name' + '</h1>',
                '<h2>' + cardData.date || 'date(dd/mm/yyyy)' + '</h2>',
                '<p>' + cardData.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' + '</p>',
            '</div>',
        '</div>'
    ];
    return $(template.join(''));
}

var listOfItems;

$.getJSON('data.json', function(data){
    listOfItems = data;
});

console.log(listOfItems);

var cards = $();

listOfItems.forEach(function(item, i){
    cards = cards.add(createLogEntryCardFormJson(item));
});


$(function(){
    $('.gridContainer').append(cards);
});
