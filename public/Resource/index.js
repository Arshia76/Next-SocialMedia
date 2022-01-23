import LOGO from './Images/logo.png'
import GOOGLE from './Images/google.png'
import FACEBOOK from './Images/facebook.png'
import USER from './Svg/user.svg'
import PASSWORD from './Svg/password.svg'
import PASSWORD2 from './Svg/password2.svg'
import EMAIL from './Svg/email.svg'
import CALENDAR from './Svg/calendar.svg'
import GENDER from './Svg/gender.svg'
import ATTACHMENT from './Svg/attachment.svg'
import PHONE from './Svg/phone.svg'
import AUTHUP from './Blobs/up.svg'
import AUTHDOWN from './Blobs/down.svg'
import USERFILLED from './Svg/filled/user-filled.svg'
import GLOBEFILLED from './Svg/filled/world.svg'
import ENVELOPEFILLED from './Svg/filled/envelope.svg'
import PHONEFILLED from './Svg/filled/phone.svg'
import BELLFILLED from './Svg/filled/bell.svg'
import SEARCH from './Svg/search.svg'
import SEARCH2 from './Svg/search2.svg'
import MALEAVATAR from './Images/maleAvatar.png'
import MALEAVATAR2 from './Images/maleAvatar2.png'
import FEMALEAVATAR from './Images/femaleAvatar.png'
import GROUPFILLED from './Svg/filled/group-filled.svg'
import HOMEFILLED from './Svg/filled/home-filled.svg'
import VIDEOFILLED from './Svg/filled/video-filled.svg'
import MESSAGEFILLED from './Svg/filled/message-filled.svg'
import CAMERAFILLED from './Svg/filled/camera-filled.svg'
import CALENDAR2 from './Svg/calendar-2.svg'
import CONTENT from './Svg/content.svg'
import SEND from './Svg/send.svg'
import EMOJI from './Svg/emoji.svg'
import ENVIRONMENT from './Images/environment.jpg'
import ENVIRONMENT1 from './Images/environment1.jpg'
import ENVIRONMENT2 from './Images/environment2.jpg'
import ENVIRONMENT3 from './Images/environment3.jpg'
import ENVIRONMENT4 from './Images/environment4.jpg'
import HEART from './Svg/heart.svg'
import COMMENT from './Svg/comment.svg'
import FORWARD from './Svg/forward.svg'
import EYEOPEN from './Svg/eye-open.svg'
import DOT from './Svg/dot.svg'
import PLUS from './Svg/plus.svg'
import MINIMIZE from './Svg/minimize.svg'
import MAXIMIZE from './Svg/maximize.svg'
import CROSS from './Svg/cross.svg'
import CROSSWHITE from './Svg/cross-white.svg'

class Resource {
    static Images = {
        LOGO,
        GOOGLE,
        FACEBOOK,
        MALEAVATAR,
        MALEAVATAR2,
        FEMALEAVATAR,
        ENVIRONMENT,
        ENVIRONMENT1,
        ENVIRONMENT2,
        ENVIRONMENT3,
        ENVIRONMENT4,
    }

    static Svg = {
        USER,
        PHONE,
        PASSWORD,
        PASSWORD2,
        EMAIL,
        ATTACHMENT,
        GENDER,
        CALENDAR,
        SEARCH,
        SEARCH2,
        CALENDAR2,
        SEND,
        CONTENT,
        EMOJI,
        EYEOPEN,
        COMMENT,
        HEART,
        FORWARD,
        DOT,
        MAXIMIZE,
        MINIMIZE,
        PLUS,
        CROSS,
        CROSSWHITE
    }

    static FilledSVG = {
        PHONEFILLED,
        USERFILLED,
        GLOBEFILLED,
        ENVELOPEFILLED,
        BELLFILLED,
        MESSAGEFILLED,
        HOMEFILLED,
        GROUPFILLED,
        VIDEOFILLED,
        CAMERAFILLED

    }

    static Blob = {
        AUTHUP,
        AUTHDOWN
    }

    static Routes = {
        HOME: '/',
        AUTH: '/auth'
    }
}

export default Resource;