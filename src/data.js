import React from 'react'
import ACLogo from './Images/algonquincollege-logo.jpg'
import AVLogo from './Images/Accora_Village_Logo.png'
import DCCLogo from './Images/dcclogo_e.jpg'

const data = [
    {
        className: "vertical-timeline-element--education",
        title: 'Algonquin College - Start',
        date: '9/07/2017',
        category: {
            color: "#fffff",
            background: "rgb(85, 196, 122)",
            icon: <ACLogo/>

        },
        icons: {

        }
    },{
        className: "vertical-timeline-element--work",
        title: 'IT Service Desk Technician',
        company: '',
        paragraph: "-\tTroubleshooting reported client-side issues\n" +
            "-\tEducating the end user with issues they encountered\n" +
            "-\tHandling tough clients and problems\n" +
            "-\tApple Script automation with Microsoft application\n",
        date: '01/01/2019',
        category: {
            color: "#fffff",
            background: "rgb(85, 196, 122)",
        },
        icons: {
            src:"ACLogo",
            visible: true
        }

    },{
        className: "vertical-timeline-element--education",
        title: 'Test_3',
        date: '10/12/1999',
        position: "right",
        category: {
            color: "#fffff",
            background: "rgb(85, 196, 122)"
        },
        visible: false

    }
]

export default data