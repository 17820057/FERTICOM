
document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.querySelector('.cart-items');
    const subtotalValue = document.getElementById('subtotal-value');
    const shippingValue = document.getElementById('shipping-value');
    const totalValue = document.getElementById('total-value');
  
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    function updateCartDisplay() {
      cartItemsContainer.innerHTML = '';
      let subtotal = 0;
      cart.forEach((item, index) => {
        const measure = item.measures.find(m => m.measure === item.measure);
        const itemTotal = item.quantity * measure.price;
        subtotal += itemTotal;
  
        const cartItem = document.createElement('tr');
        cartItem.innerHTML = `
        <td>
        <img src="${item.image}" alt="${item.name}">
        <div class="item-details">
            <h2>${item.name}</h2>
            <label for="quantity-${index}">Cantidad: </label>
            <input type="number" id="quantity-${index}" name="quantity" value="${item.quantity}" min="1" data-index="${index}" class="quantity-input">
            <label for="measure-${index}">Medida: </label>
            <select id="measure-${index}" name="measure" data-index="${index}" class="measure-select">
                ${item.measures.map(m => `<option value="${m.measure}" ${m.measure === item.measure ? 'selected' : ''}>${m.measure}</option>`).join('')}
            </select>
            <p>Precio: $${measure.price}</p>
            <p>Subtotal: $${itemTotal.toFixed()}</p>
            <button class="remove-button" data-index="${index}">Remover</button>
        </div>
    </td>
    `;
    cartItemsContainer.appendChild(cartItem);
    });
      const shipping = 15000; // Precio fijo de envío
      const total = subtotal + shipping;
      subtotalValue.textContent = subtotal.toFixed(2);
      shippingValue.textContent = shipping.toFixed();
      totalValue.textContent = total.toFixed(2);
    }
  
    cartItemsContainer.addEventListener('input', (e) => {
      const index = e.target.dataset.index;
      if (e.target.classList.contains('quantity-input')) {
        cart[index].quantity = e.target.value;
      } else if (e.target.classList.contains('measure-select')) {
        cart[index].measure = e.target.value;
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartDisplay();
    });
  
    cartItemsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-button')) {
        const index = e.target.dataset.index;
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
      }
    });
  
    updateCartDisplay();
  });
  