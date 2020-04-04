import footer from './footer'
import mobileMenu from './mobileMenu'
import mode from './mode'
import avatar from './avatar'
import qrcode from './qrcode'
import scroll from './scroll'
import catalog from './catalog'
import back2top from './back2top'
import themeColor from './themeColor'
import indexList from './indexList'

function build() {
    mobileMenu()
    mode()
    avatar()
    qrcode()
    scroll()
    catalog()
    back2top()
    themeColor()
    footer()
    indexList()
}

export default build

module.exports = build
