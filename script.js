function markdown(id){
	document.getElementById(id).innerHTML = marked(document.getElementById(id).innerHTML);
}
markdown('markdown');
