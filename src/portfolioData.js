import MP1 from './images/MPImp-1.jpg'
import MP1Thumb from './images/MPImp-1-Thumb.jpg'
import MP2 from './images/MPImp-2.jpg'
import MP2Thumb from './images/MPImp-2-Thumb.jpg'
import MP3 from './images/MPImp-3.jpg'
import MP3Thumb from './images/MPImp-3-Thumb.jpg'
import MP4 from './images/MPImp-4.jpg'
import MP4Thumb from './images/MPImp-4-Thumb.jpg'
import MP5 from './images/MPImp-5.jpg'
import MP5Thumb from './images/MPImp-4-Thumb.jpg'
import Aghs1 from './images/Aghs1.jpg'
import Aghs1Thumb from './images/Aghs1-Thumb.jpg'
import Aghs2 from './images/Aghs2.jpg'
import Aghs2Thumb from './images/Aghs2-Thumb.jpg'
import Aghs3 from './images/Aghs3.jpg'
import Aghs3Thumb from './images/Aghs3-Thumb.jpg'
import Aghs4 from './images/Aghs4.jpg'
import Aghs4Thumb from './images/Aghs4-Thumb.jpg'
import Aghs5 from './images/Aghs5.jpg'
import Aghs5Thumb from './images/Aghs5-Thumb.jpg'
import Aghs6 from './images/Aghs6.jpg'
import Aghs6Thumb from './images/Aghs6-Thumb.jpg'
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
        title: 'Aghanim\'s Pathfinders Guides',
        image: Aghs1,
        text: [
            'A website for a popular mod for Dota 2, Aghanim’s Pathfinders.',
            'The site hosts player-made guides, showcases recent victories and displays a wide range of statistics on the mod\'s heroes',
            'The website features: ',
            ['Hover elements', 'Live stats from the game\'s server', 'Complex guide creation page', 'Detailed post-game screens'],
            'Tech stack:',
            ['React', 'Node.js', 'GraphQL', 'MongoDB', 'CSS3']
        ],
        live: 'https://aghs-pathfinder-guides.herokuapp.com/',
        source: 'https://github.com/Mick666/aghs-pathfinders-guides',
    },
    {
        title: 'Mediaportal Improvements',
        image: MP4,
        text: ['A Chrome extension I created to assist with creating Daily Briefings while at iSentia. \
            The extension fixes several issues my colleagues had with the site we used, Mediaportal,\
            and added several time saving features.\n The extension now has more than 30 users across three\
            teams and has been used in conjunction with the Mediaportal developers to eliminate an ongoing\
            bug we were experiencing.\n'],
        live: 'https://chrome.google.com/webstore/detail/mp-improvements/fehdcpnecldplanhfcmhcanpagpmljmo',
        source: 'https://github.com/Mick666/Media-Plugin'
    },
    {
        title: 'Summary Linker',
        image: Linker1,
        text: ['A website designed to assist with linking news summaries when using our online editing tool.\
        Created with React.'],
        live: 'https://mick666.github.io/Summs-Linker-Redux/',
        source: 'https://github.com/Mick666/Summs-Linker-Redux'
    },
    // {
    //     title: 'Programming commands',
    //     images: [
    //         {
    //             original: Commands1,
    //             thumbnail: Commands1Thumb
    //         },
    //         {
    //             original: Commands2,
    //             thumbnail: Commands2Thumb
    //         }
    //     ],
    //     text: 'A React website I created to list the common npm packages for various JS libraries, as well as other \
    //     command lines I infrequently need. Powered by Node on the server side, which stores the various commands \
    //     and their contexts',
    //     live: 'https://warm-chamber-58678.herokuapp.com/',
    //     source: 'https://github.com/Mick666/Commands-Frontend'
    // },
    // {
    //     title: 'Calculator',
    //     images: [
    //         {
    //             original: Calc1,
    //             thumbnail: Calc1Thumb
    //         }
    //     ],
    //     text: 'A simple calculator created with vanilla JS',
    //     live: 'https://mick666.github.io/calculatorProject/',
    //     source: 'https://github.com/Mick666/calculatorProject'
    // }
]

export default Data