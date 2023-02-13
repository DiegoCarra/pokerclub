
const chevron = document.getElementById('chevron');
const learn_more = document.getElementById('learn_more');
const more_text = document.getElementById('more_text');
const bottom_front_page = document.getElementById('bottom_front_page');
const front_page = document.getElementById('front_page');
const name1 = document.getElementById('N1');
const name2 = document.getElementById('N2');
const name3 = document.getElementById('N3');
const name4 = document.getElementById('N4');
const name5 = document.getElementById('N5');
const name6 = document.getElementById('N6');
const name7 = document.getElementById('N7');
const name8 = document.getElementById('N8');
const name9 = document.getElementById('N9');
const name10 = document.getElementById('N10');
const name11 = document.getElementById('N11');
const name12 = document.getElementById('N12');
const name13 = document.getElementById('N13');
const name14 = document.getElementById('N14');
const name15 = document.getElementById('N15');
const name16 = document.getElementById('N16');
const name17 = document.getElementById('N17');
const name18 = document.getElementById('N18');
const name19 = document.getElementById('N19');
const name20 = document.getElementById('N20');
const name21 = document.getElementById('N21');
const name22 = document.getElementById('N22');
const name23 = document.getElementById('N23');
const name24 = document.getElementById('N24');

const bankroll1 = document.getElementById('B1');
const bankroll2 = document.getElementById('B2');
const bankroll3 = document.getElementById('B3');
const bankroll4 = document.getElementById('B4');
const bankroll5 = document.getElementById('B5');
const bankroll6 = document.getElementById('B6');
const bankroll7 = document.getElementById('B7');
const bankroll8 = document.getElementById('B8');
const bankroll9 = document.getElementById('B9');
const bankroll10 = document.getElementById('B10');
const bankroll11 = document.getElementById('B11');
const bankroll12 = document.getElementById('B12');
const bankroll13 = document.getElementById('B13');
const bankroll14 = document.getElementById('B14');
const bankroll15 = document.getElementById('B15');
const bankroll16 = document.getElementById('B16');
const bankroll17 = document.getElementById('B17');
const bankroll18 = document.getElementById('B18');
const bankroll19 = document.getElementById('B19');
const bankroll20 = document.getElementById('B20');
const bankroll21 = document.getElementById('B21');
const bankroll22 = document.getElementById('B22');
const bankroll23 = document.getElementById('B23');
const bankroll24 = document.getElementById('leaderboard_bottom_right');
const body = document.getElementById('body');
const join_text = document.getElementById('join_text');
const discord_qr = document.getElementById('discord_qr');
const leaderboard = document.getElementById('leaderboard')

let bankrolls = [
    bankroll1,
    bankroll2,
    bankroll3,
    bankroll4,
    bankroll5,
    bankroll6,
    bankroll7,
    bankroll8,
    bankroll9,
    bankroll10,
    bankroll11,
    bankroll12,
    bankroll13,
    bankroll14,
    bankroll15,
    bankroll16,
    bankroll17,
    bankroll18,
    bankroll19,
    bankroll20,
    bankroll21,
    bankroll22,
    bankroll23,
    bankroll24
]

let names = [
    name1,
    name2,
    name3,
    name4,
    name5,
    name6,
    name7,
    name8,
    name9,
    name10,
    name11,
    name12,
    name13,
    name14,
    name15,
    name16,
    name17,
    name18,
    name19,
    name20,
    name21,
    name22,
    name23,
    name24
]
learn_more.addEventListener('mouseover', (event) => {
    chevron.style.color = 'rgba(0,0,0,0)';
    console.log('hid chevron');
    more_text.className="more_text_show";
    front_page.className="front_page_text";
});

bottom_front_page.addEventListener('mouseleave', (event) => {
    chevron.style.color = 'rgba(255,255,255,1)';
    console.log('unhid chevron');
    more_text.className="more_text_hidden";
    front_page.className="front_page";
});

//https://tableconvert.com/csv-to-json
let data = [
    [
        "Rankings",
        "Name",
        "Bankroll",
        "",
        "2/1",
        "Started At",
        "Ended At",
        "Net Gain/Loss",
        "",
        "2/10",
        "Started At",
        "Ended At",
        "Net Gain/Loss"
    ],
    [
        "",
        "Sean Regan",
        "20520",
        "",
        "",
        "15000",
        "18960",
        "3960",
        "",
        "",
        "18960",
        "20520",
        "1560"
    ],
    [
        "",
        "Noah Katz",
        "20320",
        "",
        "",
        "15000",
        "18840",
        "3840",
        "",
        "",
        "18840",
        "20320",
        "1480"
    ],
    [
        "",
        "Shlok Nangia",
        "18840",
        "",
        "",
        "15000",
        "17130",
        "2130",
        "",
        "",
        "17130",
        "18840",
        "1710"
    ],
    [
        "",
        "Derek Ortiz",
        "17570",
        "",
        "",
        "15000",
        "17570",
        "2570",
        "",
        "",
        "17570",
        "17570",
        "0"
    ],
    [
        "",
        "Zach Bell",
        "17570",
        "",
        "",
        "15000",
        "15880",
        "880",
        "",
        "",
        "15880",
        "17570",
        "1690"
    ],
    [
        "",
        "Ryan Gross",
        "17290",
        "",
        "",
        "15000",
        "15360",
        "360",
        "",
        "",
        "15360",
        "17290",
        "1930"
    ],
    [
        "",
        "Diego Carrascosa",
        "17180",
        "",
        "",
        "15000",
        "15500",
        "500",
        "",
        "",
        "15500",
        "17180",
        "1680"
    ],
    [
        "",
        "Russell Warsetsky",
        "15560",
        "",
        "",
        "15000",
        "15000",
        "0",
        "",
        "",
        "15000",
        "15560",
        "560"
    ],
    [
        "",
        "Cale Butler",
        "15400",
        "",
        "",
        "15000",
        "15000",
        "0",
        "",
        "",
        "15000",
        "15400",
        "400"
    ],
    [
        "",
        "Andy Perez",
        "15270",
        "",
        "",
        "15000",
        "16010",
        "1010",
        "",
        "",
        "16010",
        "15270",
        "-740"
    ],
    [
        "",
        "Kai Chauhan",
        "15150",
        "",
        "",
        "15000",
        "14370",
        "-630",
        "",
        "",
        "14370",
        "15150",
        "780"
    ],
    [
        "",
        "Ben Burgess",
        "14970",
        "",
        "",
        "15000",
        "14740",
        "-260",
        "",
        "",
        "14740",
        "14970",
        "230"
    ],
    [
        "",
        "JC",
        "14920",
        "",
        "",
        "15000",
        "15380",
        "380",
        "",
        "",
        "15380",
        "14920",
        "-460"
    ],
    [
        "",
        "Jaymeson Trahan",
        "14860",
        "",
        "",
        "15000",
        "16860",
        "1860",
        "",
        "",
        "16860",
        "14860",
        "-2000"
    ],
    [
        "",
        "Ashley Maurer",
        "14650",
        "",
        "",
        "15000",
        "15000",
        "0",
        "",
        "",
        "15000",
        "14650",
        "-350"
    ],
    [
        "",
        "Allen Sarmiento",
        "14330",
        "",
        "",
        "15000",
        "14330",
        "-670",
        "",
        "",
        "14330",
        "14330",
        "0"
    ],
    [
        "",
        "Horicio Vega",
        "14010",
        "",
        "",
        "15000",
        "15000",
        "0",
        "",
        "",
        "15000",
        "14010",
        "-990"
    ],
    [
        "",
        "Corona Untersmayr",
        "13880",
        "",
        "",
        "15000",
        "15880",
        "880",
        "",
        "",
        "15880",
        "13880",
        "-2000"
    ],
    [
        "",
        "Tessa Lozowicki",
        "13840",
        "",
        "",
        "15000",
        "12750",
        "-2250",
        "",
        "",
        "12750",
        "13840",
        "1090"
    ],
    [
        "",
        "Loi Park",
        "13780",
        "",
        "",
        "15000",
        "13780",
        "-1220",
        "",
        "",
        "13780",
        "13780",
        "0"
    ],
    [
        "",
        "Sebastion Paez",
        "13740",
        "",
        "",
        "15000",
        "15000",
        "0",
        "",
        "",
        "15000",
        "13740",
        "-1260"
    ],
    [
        "",
        "Zachary Weiner",
        "13640",
        "",
        "",
        "15000",
        "13640",
        "-1360",
        "",
        "",
        "13640",
        "13640",
        "0"
    ],
    [
        "",
        "Jody Zhu",
        "13390",
        "",
        "",
        "15000",
        "14190",
        "-810",
        "",
        "",
        "14190",
        "13390",
        "-800"
    ],
    [
        "",
        "Vraj Patel",
        "13000",
        "",
        "",
        "15000",
        "13000",
        "-2000",
        "",
        "",
        "13000",
        "13000",
        "0"
    ],
    [
        "",
        "Jay Maisuria",
        "13000",
        "",
        "",
        "15000",
        "13000",
        "-2000",
        "",
        "",
        "13000",
        "13000",
        "0"
    ],
    [
        "",
        "Jacob Collins",
        "13000",
        "",
        "",
        "15000",
        "13000",
        "-2000",
        "",
        "",
        "13000",
        "13000",
        "0"
    ],
    [
        "",
        "Wade Thompson",
        "12900",
        "",
        "",
        "15000",
        "12900",
        "-2100",
        "",
        "",
        "12900",
        "12900",
        "0"
    ],
    [
        "",
        "Nick Foxx",
        "12465",
        "",
        "",
        "15000",
        "12465",
        "-2535",
        "",
        "",
        "12465",
        "12465",
        "0"
    ]
]


function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

let bankroll_values = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]



function increment () {
    if (window.innerWidth > 800) {
        if (window.scrollY > 240 & window.scrollY < window.innerHeight * 1.5) {
            for(let bankroll = 23; bankroll >= 0; bankroll --) {
                if (bankrolls[bankroll].innerHTML < parseInt(data[bankroll + 1][2])) {
                    bankrolls[bankroll].innerHTML = bankroll_values[bankroll]
                    if (parseInt(data[bankroll + 1][2]) - bankrolls[bankroll].innerHTML > 100) {
                        bankroll_values[bankroll] += Math.round((data[bankroll + 1][2] - bankroll_values[bankroll]) / ((24 - bankroll) * 1.5))
                        names[bankroll].innerHTML = makeid(data[bankroll + 1][1].length);
                    } else {
                        bankroll_values[bankroll] += 1
                        names[bankroll].innerHTML = makeid(data[bankroll + 1][1].length);
                    }
                } else {
                    names[bankroll].innerHTML = data[bankroll+ 1][1];
                }
                
            }
            leaderboard.className = 'leaderboard_show';
            join_text.className = 'join_show';
            discord_qr.className = 'join_show';
        
        } else {
            bankroll_values = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            for(let bankroll = 23; bankroll >= 0; bankroll --) {
                bankrolls[bankroll].innerHTML = "0"
                names[bankroll].innerHTML = makeid(data[bankroll + 1][1].length);
            }
            leaderboard.className = 'leaderboard_hidden';
            join_text.className = 'join_hidden';
            discord_qr.className = 'join_hidden';
            
        }
    } else {
        if (window.scrollY > 240 & window.scrollY < window.innerHeight) {
            for(let bankroll = 23; bankroll >= 0; bankroll --) {
                if (bankrolls[bankroll].innerHTML < parseInt(data[bankroll + 1][2])) {
                    bankrolls[bankroll].innerHTML = bankroll_values[bankroll]
                    if (parseInt(data[bankroll + 1][2]) - bankrolls[bankroll].innerHTML > 100) {
                        bankroll_values[bankroll] += Math.round((data[bankroll + 1][2] - bankroll_values[bankroll]) / ((24 - bankroll) * 1.5))
                        names[bankroll].innerHTML = makeid(data[bankroll + 1][1].length);
                    } else {
                        bankroll_values[bankroll] += 1
                        names[bankroll].innerHTML = makeid(data[bankroll + 1][1].length);
                    }
                } else {
                    names[bankroll].innerHTML = data[bankroll+ 1][1];
                }
                
            }
            leaderboard.className = 'leaderboard_show';
            
        
        } else {
            bankroll_values = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            for(let bankroll = 23; bankroll >= 0; bankroll --) {
                bankrolls[bankroll].innerHTML = "0"
                names[bankroll].innerHTML = makeid(data[bankroll + 1][1].length);
            }
            leaderboard.className = 'leaderboard_hidden';
        }
        if (window.scrollY > window.innerHeight * 0.8) {
            join_text.className = 'join_show';
            discord_qr.className = 'join_show';
        } else {
            join_text.className = 'join_hidden';
            discord_qr.className = 'join_hidden';
        }
    }
}


setInterval('increment()', 1);

