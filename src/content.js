
const AkumaPigShogun = 'akuma-pig-shogun'


function main() {
  let handle = setInterval(
    () => {
      Array.from(document.querySelectorAll('mer-display-row > span[slot="body"][data-testid="配送料の負担"]')).forEach(it => {
        if (0 <= it.textContent.indexOf('送料込み')) {
          return
        }
        let klass = it.getAttribute('class') || '';
        if (0 <= klass.indexOf(AkumaPigShogun))
          return
        it.setAttribute('class', klass + ' ' + AkumaPigShogun)
      })
    },
    500
  )
}

main()
