let comments = JSON.parse(localStorage.getItem('comments')) || [];

const commentForm = document.getElementById('comment-form');
const commentsContainer = document.getElementById('comments-container');

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    comments.push({ name, comment });
    localStorage.setItem('comments', JSON.stringify(comments));
    displayComments();
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
});

function displayComments() {
    commentsContainer.innerHTML = '';
    comments.forEach((comment) => {
        const commentHTML = `
            <div class="comment">
                <span class="name">${comment.name}</span>
                <p class="text">${comment.comment}</p>
            </div>
        `;
        commentsContainer.insertAdjacentHTML('beforeend', commentHTML);
    });
}

displayComments();
