function modalInit(modal) {
    modal.childNodes.forEach(node => {
        if (node.className === 'modal-close')
            node.onclick = () => {
                modal.style.display = 'none';
            }
    });
}

function openModal(id) {
    document.getElementById(id).style.display = 'block';
}
