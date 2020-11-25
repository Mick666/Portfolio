import MP1 from './images/MPImp-1.jpg'
import MP1Thumb from './images/MPImp-1-Thumb.jpg'
import MP2 from './images/MPImp-2.jpg'
import MP2Thumb from './images/MPImp-2-Thumb.jpg'
import MP3 from './images/MPImp-3.jpg'
import MP3Thumb from './images/MPImp-3-Thumb.jpg'
import Pics1 from './images/Pics1.jpg'
import Pics1Thumb from './images/Pics1-Thumb.jpg'
import Pics2 from './images/Pics2.jpg'
import Pics2Thumb from './images/Pics2-Thumb.jpg'
import Pics3 from './images/Pics3.jpg'
import Pics3Thumb from './images/Pics3-Thumb.jpg'
import Pics4 from './images/Pics4.jpg'
import Pics4Thumb from './images/Pics4-Thumb.jpg'
import Linker1 from './images/Linker1.jpg'
import Linker1Thumb from './images/Linker1-Thumb.jpg'
import Linker2Thumb from './images/Linker2-Thumb.jpg'
import Linker2 from './images/Linker2.jpg'
import Commands1 from './images/Commands1.jpg'
import Commands1Thumb from './images/Commands1-Thumb.jpg'
import Commands2Thumb from './images/Commands2-Thumb.jpg'
import Commands2 from './images/Commands2.jpg'
import Calc1 from './images/Calc1.jpg'
import Calc1Thumb from './images/Calc1-Thumb.jpg'


const Data = [
    {
        title: 'Mediaportal Improvements',
        images: [
            {
                original: MP1,
                thumbnail: MP1Thumb
            },
            {
                original: MP2,
                thumbnail: MP2Thumb
            },
            {
                original: MP3,
                thumbnail: MP3Thumb
            }
        ],
        text: 'A Chrome extension I created to assist with creating Daily Briefings while at iSentia. \
            The extension fixes several issues my colleagues had with the site we used, Mediaportal,\
            and added several time saving features.\n The extension now has more than 30 users across three\
            teams and has been used in conjunction with the Mediaportal developers to eliminate an ongoing\
            bug we were experiencing.\n',
        live: 'https://chrome.google.com/webstore/detail/mp-improvements/fehdcpnecldplanhfcmhcanpagpmljmo',
        source: 'https://github.com/Mick666/Media-Plugin'
    },
    {
        title: 'Pics Be Gone',
        images: [
            {
                original: Pics1,
                thumbnail: Pics1Thumb
            },
            {
                original: Pics2,
                thumbnail: Pics2Thumb
            },
            {
                original: Pics3,
                thumbnail: Pics3Thumb
            },
            {
                original: Pics4,
                thumbnail: Pics4Thumb
            }
        ],
        text: 'A simpler Chrome extension I made to assist with productivity during a cybersecurity incident\
        at iSentia, which trims down the websites of the national and capital city daily websites. \
        The extension removes all visual elements in a story and prefixes the first paragraph with\
        metadata needed to create a full text PDF of the article',
        live: 'https://chrome.google.com/webstore/detail/pictures-be-gone/nenokcimcmfhbiagecnldfihogiebfde',
        source: 'https://github.com/Mick666/Pics-be-gone'
    },
    {
        title: 'Summary Linker',
        images: [
            {
                original: Linker1,
                thumbnail: Linker1Thumb
            },
            {
                original: Linker2,
                thumbnail: Linker2Thumb
            }
        ],
        text: 'A website designed to assist with linking news summaries when using our online editing tool.\
        Created with React.',
        live: 'https://mick666.github.io/Summs-Linker-Redux/',
        source: 'https://github.com/Mick666/Summs-Linker-Redux'
    },
    {
        title: 'Programming commands',
        images: [
            {
                original: Commands1,
                thumbnail: Commands1Thumb
            },
            {
                original: Commands2,
                thumbnail: Commands2Thumb
            }
        ],
        text: 'A React website I created to list the common npm packages for various JS libraries, as well as other \
        command lines I infrequently need. Powered by Node on the server side, which stores the various commands \
        and their contexts',
        live: 'https://warm-chamber-58678.herokuapp.com/',
        source: 'https://github.com/Mick666/Commands-Frontend'
    },
    {
        title: 'Calculator',
        images: [
            {
                original: Calc1,
                thumbnail: Calc1Thumb
            }
        ],
        text: 'A simple calculator created with vanilla JS',
        live: 'https://mick666.github.io/calculatorProject/',
        source: 'https://github.com/Mick666/calculatorProject'
    }
]

export default Data