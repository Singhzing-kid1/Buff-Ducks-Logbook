function createLogEntryCardFormJson(cardData){
    console.log(cardData);

    var template = `
        <div class="logEntryCard ${cardData.monthDate}">
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

    return $(template);
}

function fillLogWithContent(logData){
    var template = `
			<div class="logEntry">
				<div class="modalHeader">
					<h1>${logData.author || 'Author Name'} | ${logData.date || 'dd/mm/yyyy'}</h1>
				</div>
				<div class="modalBody">
					<p>
                        ${logData.content || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
					</p>
				</div>
			</div>

    `;

    return $(template);
}

var cardList = [];

$.ajax({
    url: './js/logEntries.json',
    dataType: 'json',
    success: function(data) {
        var jsonData = data;

        console.log(jsonData);

        $.each(jsonData, function(index, cardData){
            console.log(cardData);
            cardList.push(cardData);
        });

        let rowAmount = Math.ceil(jsonData.length / 3);

        console.log(rowAmount);

        $('div.gridContainer').css('grid-template-rows', `repeat(${rowAmount}, 208px)`);

        cardTemplates = $();

        $.each(cardList, function(index, cardListItems){
            console.log(cardListItems);
            cardTemplates = cardTemplates.add(createLogEntryCardFormJson(cardListItems));
        });

        console.log(cardTemplates);

        cardTemplates.appendTo('div.gridContainer');

        $('button').on('click', function(){
            var id = $(this).attr('id');

            fillLogWithContent(cardList[id-1]).appendTo('div.modalContent');
            $('div.modal').css('display', 'block');

        });

        $('#close').on('click', function(){
            $('div.modal').css('display', 'none');
            $('div.logEntry').remove();
        });
        
        $('.filter').on('change', function(){
            var filter = $(this).val();
    
            if(filter == 'all'){
                $('.logEntryCard').hide();
                $('.logEntryCard').show();
            } else {
                $('.logEntryCard').hide();
                $(`.${filter}`).show();
            }
        });


    }

});


