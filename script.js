var selectedPanelid =1;
var panels = {1: '#c44900', 2: '#fce762', 3: '#0c1b33'};
var cardId = 100;
function appendCard(){
    var cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.id = `card-${cardId}`;

    var contentDiv = document.createElement('div');
    contentDiv.className = 'content';

    var textArea = document.createElement('textarea');
    textArea.rows = '10';
    textArea.cols = "30";
    textArea.className = `content-${selectedPanelid}`
    textArea.value = document.getElementById('modal-textarea-id').value;
    contentDiv.appendChild(textArea);

    var footerDiv = document.createElement('div');
    footerDiv.className = 'footer';

    var likeButtonDiv = document.createElement('div');
    likeButtonDiv.className = 'action-button';
    likeButtonDiv.innerHTML = `<div class="like-counter" onclick="increaseLike(${cardId})">
    <svg fill="#fea5d7" stroke="currentcolor" stroke-width="3%" style="color: #ff637eb3;">
        <use xlink:href="#i-like"></use>
    </svg>
    <span class="like-count" id="${cardId}">0</span>
</div>`;

    var trashButtonDiv = document.createElement('div');
    trashButtonDiv.className = 'action-button';
    trashButtonDiv.innerHTML = `<svg fill="#FA9500" stroke="currentcolor" stroke-width="3%" style="color: #502004;" onclick="deleteCard(${cardId})">
    <use xlink:href="#i-trash"></use>
</svg>`;

    footerDiv.appendChild(likeButtonDiv);
    footerDiv.appendChild(trashButtonDiv);

    cardDiv.appendChild(contentDiv);
    cardDiv.appendChild(footerDiv);

    document.getElementById(selectedPanelid).appendChild(cardDiv);
    closeModal();

    cardId= cardId+1;
}   

function openModal(panelId){
    selectedPanelid = panelId;
    document.getElementById('modal-id').style.display = 'flex';
}

function closeModal(){
    document.getElementById('modal-textarea-id').value = '';
    document.getElementById('modal-id').style.display = 'none';
}

function increaseLike(likeId){
    document.getElementById(likeId).innerHTML = parseInt(document.getElementById(likeId).innerHTML) +1;
}

function deleteCard(cardId){
    document.getElementById(`card-${cardId}`).remove();
}