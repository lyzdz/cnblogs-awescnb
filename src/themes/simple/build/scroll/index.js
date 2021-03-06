// import './index.scss'
import { userAgent, pageName } from '@tools'
// 只触发一次向上或向下
// 如果又重新反向滚动则再触发一次

const isPostPage = pageName() === 'post'

function scrollOnce() {
    function scrollFunc() {
        let scrollDirection
        if (!scrollAction) {
            scrollAction = window.pageYOffset
        }
        let diff = scrollAction - window.pageYOffset
        if (diff < 0) {
            scrollDirection = 'down'
        } else if (diff > 0) {
            scrollDirection = 'up'
        } else {
            // First scroll event
        }
        scrollAction = window.pageYOffset
        return scrollDirection
    }
    let scrollAction, originalDir

    $(window).scroll(function() {
        if (userAgent() !== 'pc') return
        let direction = scrollFunc()
        if (direction && originalDir != direction) {
            if (direction == 'down') {
                $('#header').addClass('is-active')
                if (isPostPage) {
                    $('#catalog').addClass('catalog-scroll-up')
                    $('#catalog').removeClass('catalog-scroll-down')
                }
            } else {
                $('#header').removeClass('is-active')
                if (isPostPage) {
                    $('#catalog').removeClass('catalog-scroll-up')
                    $('#catalog').addClass('catalog-scroll-down')
                }
            }
            originalDir = direction
        }
    })
}

export default () => {
    scrollOnce()
}
