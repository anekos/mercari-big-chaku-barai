
function main() {
  Array.from(document.querySelectorAll('mer-price[data-testid="price"] + span')).forEach(it => {
    if (0 <= it.textContent.indexOf('送料込み'))
      return
    it.setAttribute('class', it.getAttribute('class', '') + ' akuma-pig-shogun')
  })
}

main()
