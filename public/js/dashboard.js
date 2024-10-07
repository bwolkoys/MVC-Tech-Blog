//new form handler function retrieves the title and content from input fields, checks if they are provided, thens ends post request to endpoint (postRoutes), if successful it returns back to dashboard
const newFormHandler = async (event) => {
	event.preventDefault();

	const title = document.querySelector('#post-title').value.trim();

	const content = document.querySelector('#post-content').value.trim();

	if (title && content) {
		const response = await fetch(`/api/post`, {
			method: 'POST',
			body: JSON.stringify({ title, content }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
		//	document.location.replace('/dashboard');
			document.location.replace('/');
		} else {
			alert('cannot create post');
		}
	}
};



//to delete a post it checks if the ID of the post to be deleted. it sends a delete request to postRoutes and if ID matches it's deleted
const delButtonHandler = async (event) => {
	if (event.target.hasAttribute('data-id')) {
		const id = event.target.getAttribute('data-id');

		const response = await fetch(`/api/postRoutes/${id}`, {
			method: 'DELETE',
		});

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert('cannot delete post');
		}
	}
};

//added event listeners to trigger a new post and to show the post list after one is deleted
document
	.querySelector('.new-post-section')
	.addEventListener('submit', newFormHandler);
	

document
	.querySelector('.post-list')
	.addEventListener('click', delButtonHandler);
