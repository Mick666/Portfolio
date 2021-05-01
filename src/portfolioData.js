import MP1 from './images/MPImp-1.jpg'
import Aghs1 from './images/Aghs1.jpg'
import Linker1 from './images/Linker1.jpg'


const Data = [
    {
        title: 'Aghanim\'s Pathfinders Guides',
        image: Aghs1,
        text: [
            'A website for a popular mod for Dota 2, Aghanim’s Pathfinders. The website is heavily used by the playerbase and has been integrated with the mod by the developer to provide post-game screens',
            'The site hosts player-made guides, showcases recent victories and displays a wide range of statistics on the mod\'s heroes. It uses React Router to display multiple pages while remaining a single page app.',
            'The website features: ',
            ['Live stats from the game\'s server', 'A guide creation page', 'Detailed post-game screens', 'Detailed information hovering over certain elements'],
            'Tech stack:',
            ['React', 'Node.js', 'GraphQL', 'MongoDB', 'CSS3']
        ],
        live: 'https://aghs-pathfinder-guides.herokuapp.com/',
        source: 'https://github.com/Mick666/aghs-pathfinders-guides',
    },
    {
        title: 'Mediaportal Improvements',
        image: MP1,
        text: [
            'I created this Chrome extension to assist iSentia\'s Daily Briefing\'s Department with their website they use to create products for clients, Mediaportal.',
            'Originally, it aimed only at fixing several long-standing bugs and complaints the department had with the site (as it is designed for clients, not the fepartment).',
            'However, the extension has continually expanded over the past 12 months and has become essential in delivering products to several clients, such as the Department of Home Affairs, Services Australia and Coles',
            'It has more than 30 users and has gone from unofficial project to required across the entire Department. Some of the productivity gains have seen more than an hour removed for some briefings, while the extension\'s checking tool has entirely eliminated user errors in our products',
            'Tech stack:',
            ['HTML', 'Vanilla JS', 'CSS3']
        ],
        live: 'https://chrome.google.com/webstore/detail/mp-improvements/fehdcpnecldplanhfcmhcanpagpmljmo',
        source: 'https://github.com/Mick666/Media-Plugin'
    },
    {
        title: 'Summary Linker',
        image: Linker1,
        text: [
            'A simple website created for iSentia\'s Daily Briefings team to assist with hyperlinking briefings.',
            'A user enters their news summaries and links and the site returns them linked and styled according to the options in the sidebar',
            'Tech stack:',
            ['HTML', 'Vanilla JS', 'CSS3']
        ],
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