const items = document.querySelectorAll('.item');
const totalSubtotal = document.getElementById('totalSubtotal');
const resetButton = document.getElementById('resetButton'); // Add this line to get the reset button element

function resetValues() {
  var quantityInputs = document.querySelectorAll('input[type="text"]');
  quantityInputs.forEach(function(input) {
    input.value = '0';
  });
  updateSubtotal(); // Call updateSubtotal() after resetting the values
}

items.forEach(item => {
  const decrementBtn = item.querySelector('.decrement');
  const incrementBtn = item.querySelector('.increment');
  const quantityInput = item.querySelector('.quantity');

  decrementBtn.addEventListener('click', () => {
    let value = parseInt(quantityInput.value);
    if (value > 0) {
      value--;
      quantityInput.value = value;
      updateSubtotal();
    }
  });

  incrementBtn.addEventListener('click', () => {
    let value = parseInt(quantityInput.value);
    value++;
    quantityInput.value = value;
    updateSubtotal();
  });
});

function updateSubtotal() {
  let subtotal = 0;
  items.forEach(item => {
    const quantity = parseInt(item.querySelector('.quantity').value);
    if (isNaN(quantity)) { // Add this check to handle invalid numbers
      return;
    }
    if (item.querySelector('h3').textContent.includes('Pav')) {
      subtotal += quantity * 4;
    } else if (item.querySelector('h3').textContent.includes('Drinking Water (Small)')) {
      subtotal += quantity * 10;
    } else if (item.querySelector('h3').textContent.includes('Drinking Water (Big)')) {
      subtotal += quantity * 20;
    } else if (item.querySelector('h3').textContent.includes('Vada')) {
      subtotal += quantity * 13;
    } else if (item.querySelector('h3').textContent.includes('Moong pakoda')) {
      subtotal += quantity * 25;
      
    } else if (item.querySelector('h3').textContent.includes('vada pav')) {
      subtotal += quantity * 15;
    }
      else if (item.querySelector('h3').textContent.includes('Chai')) {
      subtotal += quantity * 10;
    }
    else if (item.querySelector('h3').textContent.includes('batata bhaji')) {
      subtotal += quantity * 25;
    }
    else if (item.querySelector('h3').textContent.includes('bhaji pav')) {
      subtotal += quantity * 15;
    }
    else if (item.querySelector('h3').textContent.includes('Mirchi Pakoda')) {
      subtotal += quantity * 20;
    }
    else if (item.querySelector('h3').textContent.includes('Mirchi Half')) {
      subtotal += quantity * 10;
    }
  });
  totalSubtotal.textContent = subtotal;
}

document.getElementById('printButton').addEventListener('click', function() {
  window.print();
});

resetButton.addEventListener('click', resetValues); // Add this line to call resetValues() when the reset button is clicked