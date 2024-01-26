document.addEventListener('DOMContentLoaded', function() {
    //loadComments(); // Carrega os comentários

    const commentForm = document.getElementById('commentForm');// Obtém o formulário de comentário
    
    // Adiciona um listener para o evento de envio do formulário de comentário
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o comportamento padrão de enviar o formulário
        
        // Obtém os valores dos campos de nome e comentário do formulário
        const nameInput = document.getElementById('nameInput');
        const commentInput = document.getElementById('commentInput');
        
        // Remove espaços em branco extras dos valores dos campos
        const name = nameInput.value.trim();
        const comment = commentInput.value.trim();

        // Verifica se os campos não estão vazios
        if (name === '' || comment === '') {
            alert('Por favor, preencha todos os campos.');   
            return;
        }

        // Cria um objeto contendo o nome, comentário e tempo do novo comentário
        const newComment = {
            name: name,
            comment: comment,
            timestamp: new Date().toISOString()
        };

        //saveComment(newComment);// Salva o novo comentário
        addCommentToUI(newComment);// Adiciona o novo comentário à tela
        

        // Limpa os campos de entrada do formulário
        nameInput.value = '';
        commentInput.value = '';
    });

    


    // Função para adicionar um comentário à tela
    function addCommentToUI(comment) {
        // Obtém o contêiner de comentários na tela
        const commentsContainer = document.getElementById('comments');

        // Cria um elemento para o novo comentário e aplica classes do Bootstrap
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('card', 'mb-3');

        // Cria um elemento para o corpo do cartão e aplica classes
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // Cria um elemento para o nome do autor do comentário
        const commentName = document.createElement('h5');
        commentName.classList.add('card-title');
        commentName.textContent = comment.name;
        
        // Cria um elemento para o texto do comentário
        const commentText = document.createElement('p');
        commentText.classList.add('card-text');
        commentText.textContent = comment.comment;

        // Cria um elemento para o tempo do comentário
        const commentTimestamp = document.createElement('small');
        commentTimestamp.classList.add('text-muted');
        commentTimestamp.textContent = new Date(comment.timestamp).toLocaleString();
        
        // Adiciona os elementos do comentário ao card
        cardBody.appendChild(commentName);
        cardBody.appendChild(commentText);
        cardBody.appendChild(commentTimestamp);

        
        // Adiciona o card de comentário aos comentários na tela
        commentDiv.appendChild(cardBody);
        commentsContainer.prepend(commentDiv);
        
    }
});
