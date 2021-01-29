
function main() {
  Array.from(document.querySelectorAll('.item-shipping-fee')).forEach(it => {
    if (it.textContent === '送料込み')
      return
    it.setAttribute('class', it.getAttribute('class', '') + ' akuma-pig-shogun')
  })
}

main()
