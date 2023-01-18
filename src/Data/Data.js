//Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilMoneyWithdrawal,
    UilUsdSquare,
}
    from "@iconscout/react-unicons";

import img1 from '../imgs/img1.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'

export const SidebarData = [
    {
        icon: UilEstate,
        name: 'Dashboard',
        path: '/',
    },
    {
        icon: UilClipboardAlt,
        name: 'Orders',
        path: '/orders',
    },
    {
        icon: UilUsersAlt,
        name: 'Customers',
        path: '/customers',
    },
    {
        icon: UilPackage,
        name: 'Products',
        path: '/products',
    },
    {
        icon: UilChart,
        name: 'Analytics',
        path: '/analytics',
    },

];

export const CardsData = [
    {
        title: "Sales",
        color: {
            backGround: "#bb67ff",
            boxShadow: "0px 10px 20px 0px #e0c6f5",

        },
        barValue: 70,
        value: "25,970",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100],
            }
        ],
    },

    {
        title: "Revenue",
        color: {
            backGround: "#FF919D",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        value: "14, 270",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Revenue",
                data: [10, 100, 50, 70, 80, 30, 40],
            },
        ],
    },

    {
        title: "Expenses",
        color: {
            backGround:
                "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 60,
        value: "4,270",
        png: UilClipboardAlt,
        series: [
            {
                name: "Expenses",
                data: [10, 25, 15, 30, 12, 15, 20],
            },
        ],
    },
]

export const UpdatesData = [
    {
        img: img1,
        name: "Andrew Thomas",
        noti: "has ordered Apple samrt watch and that will be delivered",
        time: "25 second ago"
    },
    {
        img: img2,
        name: "Mick jack",
        noti: "has ordered Apple samrt watch and that will be delivered",
        time: "25 second ago"
    },
    {
        img: img3,
        name: "Diana Pride",
        noti: "has ordered Apple samrt watch and that will be delivered",
        time: "25 second ago"
    }

];