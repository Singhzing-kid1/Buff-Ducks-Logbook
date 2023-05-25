function createLogEntryCardFormJson(cardData){
    console.log(cardData);

    var template = `
        <div class="logEntryCard" id="${cardData.monthDate}">
            <div>
                <img class="thumbnail" src="${cardData.thumbnail || 'https://placehold.co/127x127/000/FFF.png'}" alt="thumbnail">
                <button id="${cardData.id}">Open Log</button>
            </div>
            <div>
                <h1>${cardData.author || 'Author Name'}</h1>
                <h2>${cardData.date || 'date(dd/mm/yyyy)'}</h2>
                <p>${cardData.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</p>
            </div>
        </div>
    `;

    return $(template);}

var cardList = [];

$.ajax({
    url: 'logEntries.json',
    dataType: 'json',
    success: function(data) {
        var jsonData = data;

        console.log(jsonData);

        $.each(jsonData, function(index, cardData){
            console.log(cardData);
            cardList.push(cardData);
        });


        cardTemplates = $();

        $.each(cardList, function(index, cardListItems){
            console.log(cardListItems);
            cardTemplates = cardTemplates.add(createLogEntryCardFormJson(cardListItems));
        });

        console.log(cardTemplates);


        cardTemplates.appendTo('div.gridContainer');
    }

});


// console.log(jsonData);


