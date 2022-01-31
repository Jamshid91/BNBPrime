let rangeInp = document.querySelector('.calculate-item .range__inp')
let daily = document.querySelector('.calculate-item .daily');
let total = document.querySelector('.calculate-item .total');
let earn = document.querySelector('.calculate-item .earn');
let day = document.querySelector('.calculate-item .day');
let modal = document.querySelector('.modal');
let openModals = document.querySelectorAll('.open_modal');
let closeModals = document.querySelectorAll('.close__modal');
let faq = document.querySelector('.faq');
let faqBtn = document.querySelector('.faq__btn');
let closeFaq = document.querySelector('.close__faq');

openModals.forEach(open => {
    open.addEventListener('click', () => {
        modal.classList.remove('hidden')
    });
});

closeModals.forEach(close => {
    close.addEventListener('click', () => {
        modal.classList.add('hidden')
    });
});


faqBtn.addEventListener('click', () => {
    faq.classList.remove('hidden');
});

closeFaq.addEventListener('click', () => {
    faq.classList.add('hidden');
});

window.onclick = function(event) {
    if (event.target == modal || event.target == faq) {
        modal.classList.add('hidden');
        faq.classList.add('hidden');
    }
  }

rangeInp.addEventListener('input', () => {
    let val = rangeInp.value;
    day.innerText = val
    if(val == 7) {
        daily.innerText = '17%'
        total.innerText = '119%'
        earn.innerText = '59.5 BNB'
    }
    if(val == 8) {
        daily.innerText = '15%'
        total.innerText = '124%'
        earn.innerText = '62 BNB'
    }
    if(val == 9) {
        daily.innerText = '14.33%'
        total.innerText = '129%'
        earn.innerText = '64.5 BNB'
    }
    if(val == 10) {
        daily.innerText = '13.4%'
        total.innerText = '134%'
        earn.innerText = '67 BNB'
    }
    if(val == 11) {
        daily.innerText = '12.63%'
        total.innerText = '139%'
        earn.innerText = '69.5 BNB'
    }
    if(val == 12) {
        daily.innerText = '12%'
        total.innerText = '144%'
        earn.innerText = '72 BNB'
    }
    if(val == 13) {
        daily.innerText = '11.46%'
        total.innerText = '149%'
        earn.innerText = '74.5 BNB'
    }
    if(val == 14) {
        daily.innerText = '11%'
        total.innerText = '154%'
        earn.innerText = '77 BNB'
    }
    if(val == 15) {
        daily.innerText = '10.9%'
        total.innerText = '159%'
        earn.innerText = '79.5 BNB'
    }
    if(val == 16) {
        daily.innerText = '10.25%'
        total.innerText = '164%'
        earn.innerText = '82 BNB'
    }
    if(val == 17) {
        daily.innerText = '9.94%'
        total.innerText = '169%'
        earn.innerText = '84.5 BNB'
    }
    if(val == 18) {
        daily.innerText = '9.66%'
        total.innerText = '174%'
        earn.innerText = '87 BNB'
    }
    if(val == 19) {
        daily.innerText = '9.42%'
        total.innerText = '179%'
        earn.innerText = '89.5 BNB'
    }
    if(val == 20) {
        daily.innerText = '9.19%'
        total.innerText = '184%'
        earn.innerText = '92 BNB'
    }
    if(val == 21) {
        daily.innerText = '9%'
        total.innerText = '189%'
        earn.innerText = '94.5 BNB'
    }
    if(val == 22) {
        daily.innerText = '8.81%'
        total.innerText = '194%'
        earn.innerText = '97 BNB'
    }
    if(val == 23) {
        daily.innerText = '8.65%'
        total.innerText = '199%'
        earn.innerText = '99.5 BNB'
    }
    if(val == 24) {
        daily.innerText = '8.5%'
        total.innerText = '204%'
        earn.innerText = '102 BNB'
    }
    if(val == 25) {
        daily.innerText = '8.36%'
        total.innerText = '209%'
        earn.innerText = '104.5 BNB'
    }
    if(val == 26) {
        daily.innerText = '8.23%'
        total.innerText = '214%'
        earn.innerText = '107 BNB'
    }
    if(val == 27) {
        daily.innerText = '8.11%'
        total.innerText = '219%'
        earn.innerText = '109.5 BNB'
    }
    if(val == 28) {
        daily.innerText = '8%'
        total.innerText = '224%'
        earn.innerText = '112 BNB'
    }
    if(val == 29) {
        daily.innerText = '7.89%'
        total.innerText = '229%'
        earn.innerText = '114.5 BNB'
    }
    if(val == 30) {
        daily.innerText = '7.8%'
        total.innerText = '234%'
        earn.innerText = '117 BNB'
    }
})

function init() {
    const sliders = document.getElementsByClassName("tick-slider-input");

    for (let slider of sliders) {
        slider.oninput = onSliderInput;

        updateValue(slider);
        updateValuePosition(slider);
        updateLabels(slider);
        updateProgress(slider);

        setTicks(slider);
    }
}

function onSliderInput(event) {
    updateValue(event.target);
    updateValuePosition(event.target);
    updateLabels(event.target);
    updateProgress(event.target);
}

function updateValue(slider) {
    let value = document.getElementById(slider.dataset.valueId);

    value.innerHTML = "<div>" + slider.value + "</div>";
}

function updateValuePosition(slider) {
    let value = document.getElementById(slider.dataset.valueId);

    const percent = getSliderPercent(slider);

    const sliderWidth = slider.getBoundingClientRect().width;
    const valueWidth = value.getBoundingClientRect().width;
    const handleSize = slider.dataset.handleSize;

    let left = percent * (sliderWidth - handleSize) + handleSize / 2 - valueWidth / 2;

    left = Math.min(left, sliderWidth - valueWidth);
    left = slider.value === slider.min ? 0 : left;

    value.style.left = left + "px";
}

function updateLabels(slider) {
    const value = document.getElementById(slider.dataset.valueId);
    const minLabel = document.getElementById(slider.dataset.minLabelId);
    const maxLabel = document.getElementById(slider.dataset.maxLabelId);

    const valueRect = value.getBoundingClientRect();
    const minLabelRect = minLabel.getBoundingClientRect();
    const maxLabelRect = maxLabel.getBoundingClientRect();

    const minLabelDelta = valueRect.left - (minLabelRect.left);
    const maxLabelDelta = maxLabelRect.left - valueRect.left;

    const deltaThreshold = 32;

    if (minLabelDelta < deltaThreshold) minLabel.classList.add("hidden");
    else minLabel.classList.remove("hidden");

    if (maxLabelDelta < deltaThreshold) maxLabel.classList.add("hidden");
    else maxLabel.classList.remove("hidden");
}

function updateProgress(slider) {
    let progress = document.getElementById(slider.dataset.progressId);
    const percent = getSliderPercent(slider);

    progress.style.width = percent * 100 + "%";
}

function getSliderPercent(slider) {
    const range = slider.max - slider.min;
    const absValue = slider.value - slider.min;

    return absValue / range;
}

function setTicks(slider) {
    let container = document.getElementById(slider.dataset.tickId);
    const spacing = parseFloat(slider.dataset.tickStep);
    const sliderRange = slider.max - slider.min;
    const tickCount = sliderRange / spacing + 1; // +1 to account for 0

    for (let ii = 0; ii < tickCount; ii++) {
        let tick = document.createElement("span");

        tick.className = "tick-slider-tick";

        container.appendChild(tick);
    }
}

function onResize() {
    const sliders = document.getElementsByClassName("tick-slider-input");

    for (let slider of sliders) {
        updateValuePosition(slider);
    }
}

window.onload = init;
window.addEventListener("resize", onResize);


const btnCopy = document.querySelector('.copy__btn');

    btnCopy.addEventListener('click', () => {
    let copied = btnCopy.nextElementSibling;
    let copyText = btnCopy.parentElement.parentElement.children[1].textContent;
   console.dir(btnCopy.parentElement.parentElement.children[1])
    let inputElem = document.createElement('input');
    inputElem.type = 'text';

    inputElem.value = copyText;

    document.body.appendChild(inputElem);
    inputElem.select();
    document.execCommand('copy');
    inputElem.style.display = 'none'

    copied.style.visibility = 'visible';

    setTimeout(() => {
      copied.style.visibility = 'hidden';
    }, 800);
  });


$('.faq-list').click(function() {
    $(this).siblings().removeClass('showFaq');
    $(this).toggleClass('showFaq');
  });