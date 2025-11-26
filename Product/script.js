function deleteRow(button) {
    const row = button.parentElement.parentElement;
    const tbody = row.parentElement;
    
    row.remove();
    updateSTT(tbody.id);
}

function updateSTT(tbodyId) {
    const tbody = document.getElementById(tbodyId);
    const rows = tbody.getElementsByTagName('tr');
    
    for (let i = 0; i < rows.length; i++) {
        rows[i].cells[0].innerText = i + 1;
    }
}

function addProduct() {
    const name = document.getElementById('prodName').value;
    const price = document.getElementById('prodPrice').value;

    if (name === '' || price === '') {
        alert("Vui lòng nhập đầy đủ tên và giá sản phẩm!");
        return;
    }

    const tableBody = document.getElementById('productTableBody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td></td> 
        <td>${name}</td>
        <td>${Number(price).toLocaleString()} VNĐ</td>
        <td><button id="deleteBtn"">Xóa</button></td>
    `;

    tableBody.appendChild(newRow);
    updateSTT('productTableBody');

    document.getElementById('prodName').value = '';
    document.getElementById('prodPrice').value = '';
}

function addUser() {
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;

    if (name === '' || email === '') {
        alert("Vui lòng nhập đầy đủ tên và email!");
        return;
    }

    const tableBody = document.getElementById('userTableBody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td></td>
        <td>${name}</td>
        <td>${email}</td>
        <td><button id="deleteBtn">Xóa</button></td>
    `;

    tableBody.appendChild(newRow);
    updateSTT('userTableBody');

    document.getElementById('userName').value = '';
    document.getElementById('userEmail').value = '';
}