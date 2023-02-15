
const chevron = document.getElementById('chevron');
const learn_more = document.getElementById('learn_more');
const more_text = document.getElementById('more_text');
const bottom_front_page = document.getElementById('bottom_front_page');
const front_page = document.getElementById('front_page');
const leaderboard_box_middle = document.getElementById('leaderboard_box_middle');
const leaderboard_box_right = document.getElementById('leaderboard_box_right');
const leaderboard_box_left = document.getElementById('leaderboard_box_left');
// const name1 = document.getElementById('N1');
// const name2 = document.getElementById('N2');
// const name3 = document.getElementById('N3');
// const name4 = document.getElementById('N4');
// const name5 = document.getElementById('N5');
// const name6 = document.getElementById('N6');
// const name7 = document.getElementById('N7');
// const name8 = document.getElementById('N8');
// const name9 = document.getElementById('N9');
// const name10 = document.getElementById('N10');
// const name11 = document.getElementById('N11');
// const name12 = document.getElementById('N12');
// const name13 = document.getElementById('N13');
// const name14 = document.getElementById('N14');
// const name15 = document.getElementById('N15');
// const name16 = document.getElementById('N16');
// const name17 = document.getElementById('N17');
// const name18 = document.getElementById('N18');
// const name19 = document.getElementById('N19');
// const name20 = document.getElementById('N20');
// const name21 = document.getElementById('N21');
// const name22 = document.getElementById('N22');
// const name23 = document.getElementById('N23');
// const name24 = document.getElementById('N24');

// const bankroll1 = document.getElementById('B1');
// const bankroll2 = document.getElementById('B2');
// const bankroll3 = document.getElementById('B3');
// const bankroll4 = document.getElementById('B4');
// const bankroll5 = document.getElementById('B5');
// const bankroll6 = document.getElementById('B6');
// const bankroll7 = document.getElementById('B7');
// const bankroll8 = document.getElementById('B8');
// const bankroll9 = document.getElementById('B9');
// const bankroll10 = document.getElementById('B10');
// const bankroll11 = document.getElementById('B11');
// const bankroll12 = document.getElementById('B12');
// const bankroll13 = document.getElementById('B13');
// const bankroll14 = document.getElementById('B14');
// const bankroll15 = document.getElementById('B15');
// const bankroll16 = document.getElementById('B16');
// const bankroll17 = document.getElementById('B17');
// const bankroll18 = document.getElementById('B18');
// const bankroll19 = document.getElementById('B19');
// const bankroll20 = document.getElementById('B20');
// const bankroll21 = document.getElementById('B21');
// const bankroll22 = document.getElementById('B22');
// const bankroll23 = document.getElementById('B23');
// const bankroll24 = document.getElementById('leaderboard_bottom_right');
const body = document.getElementById('body');
const join_text = document.getElementById('join_text');
const discord_qr = document.getElementById('discord_qr');
const leaderboard = document.getElementById('leaderboard')

let bankrolls = []
//     bankroll1,
//     bankroll2,
//     bankroll3,
//     bankroll4,
//     bankroll5,
//     bankroll6,
//     bankroll7,
//     bankroll8,
//     bankroll9,
//     bankroll10,
//     bankroll11,
//     bankroll12,
//     bankroll13,
//     bankroll14,
//     bankroll15,
//     bankroll16,
//     bankroll17,
//     bankroll18,
//     bankroll19,
//     bankroll20,
//     bankroll21,
//     bankroll22,
//     bankroll23,
//     bankroll24
// ]

let names = []
//     name1,
//     name2,
//     name3,
//     name4,
//     name5,
//     name6,
//     name7,
//     name8,
//     name9,
//     name10,
//     name11,
//     name12,
//     name13,
//     name14,
//     name15,
//     name16,
//     name17,
//     name18,
//     name19,
//     name20,
//     name21,
//     name22,
//     name23,
//     name24
// ]

let bankroll_values = []

learn_more.addEventListener('mouseover', (event) => {
    chevron.style.color = 'rgba(0,0,0,0)';
    console.log('hid chevron');
    more_text.className="more_text_show";
    front_page.className="front_page_text";
    console.log(table_to_array('table-body'));
});

bottom_front_page.addEventListener('mouseleave', (event) => {
    chevron.style.color = 'rgba(255,255,255,1)';
    console.log('unhid chevron');
    more_text.className="more_text_hidden";
    front_page.className="front_page";
});

//Get data
function table_to_array(table_id) {
    myData = document.getElementById(table_id).rows
    //console.log(myData)
    my_liste = []
    for (var i = 0; i < myData.length; i++) {
            el = myData[i].children
            my_el = []
            for (var j = 0; j < el.length; j++) {
                    my_el.push(el[j].innerText);
            }
            my_liste.push(my_el)

    }
    return my_liste
}


// identify an element to observe
elementToObserve = window.document.getElementById('table-body');

// create a new instance of 'MutationObserver' named 'observer', 
// passing it a callback function

var data;
var run_leaderboard = false;
observer = new MutationObserver(function(mutationsList, observer) {
    data = table_to_array('table-body');
    console.log(data);
    run_leaderboard = true;
    for (i = 0; i < data.length; i++) {
        var div = document.createElement("p1");
        var div2 = document.createElement("p1");
        var div3 = document.createElement("p1");
        if (i % 2 == 1) {
            div.className = "leaderboard_blue"
            div2.className = "leaderboard_blue"
            div3.className = "leaderboard_blue"
        } else {
            div.className = "leaderboard_orange"
            div2.className = "leaderboard_orange"
            div3.className = "leaderboard_orange"
        }
        div3.innerHTML = i + 1;
        leaderboard_box_middle.appendChild(div);
        leaderboard_box_right.appendChild(div2);
        leaderboard_box_left.appendChild(div3)
        names[i] = div;
        bankrolls[i] = div2;
        bankroll_values[i] = 0;
    }
});

// call 'observe' on that MutationObserver instance, 
// passing it the element to observe, and the options object
observer.observe(elementToObserve, {characterData: false, childList: true, attributes: false});


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

var scroll_limit = 0;

if (window.innerWidth > 800) {
    scroll_limit = 250;
} 

function increment () {
    if (run_leaderboard) {
        if (window.scrollY > scroll_limit & window.scrollY < window.innerHeight * 2) {
            for(let bankroll = data.length - 1; bankroll >= 0; bankroll --) {
                if (bankrolls[bankroll].innerHTML < parseInt(data[bankroll][2])) {
                    bankrolls[bankroll].innerHTML = bankroll_values[bankroll]
                    if (parseInt(data[bankroll][2]) - bankrolls[bankroll].innerHTML > 100) {
                        bankroll_values[bankroll] += Math.round((data[bankroll][2] - bankroll_values[bankroll]) / ((data.length - bankroll) * 1.5))
                        
                    } else {
                        bankroll_values[bankroll] += 1
                    }
                    names[bankroll].innerHTML = makeid(data[bankroll][1].length);
                } else {
                    names[bankroll].innerHTML = data[bankroll][1];
                }
                
            }
            leaderboard.className = 'leaderboard_show';
            join_text.className = 'join_show';
            discord_qr.className = 'join_show';
        
        } else {
            for(let bankroll = data.length - 1; bankroll >= 0; bankroll --) {
                bankroll_values[bankroll] = 0;
                bankrolls[bankroll].innerHTML = "0";
                names[bankroll].innerHTML = makeid(data[bankroll][1].length);
            }
            leaderboard.className = 'leaderboard_hidden';
            join_text.className = 'join_hidden';
            discord_qr.className = 'join_hidden';
        }
    } 
    // else {
    //     if (window.scrollY > 240 & window.scrollY < window.innerHeight) {
    //         for(let bankroll = 23; bankroll >= 0; bankroll --) {
    //             if (bankrolls[bankroll].innerHTML < parseInt(data[bankroll + 1][2])) {
    //                 bankrolls[bankroll].innerHTML = bankroll_values[bankroll]
    //                 if (parseInt(data[bankroll + 1][2]) - bankrolls[bankroll].innerHTML > 100) {
    //                     bankroll_values[bankroll] += Math.round((data[bankroll + 1][2] - bankroll_values[bankroll]) / ((24 - bankroll) * 1.5))
    //                     names[bankroll].innerHTML = makeid(data[bankroll + 1][1].length);
    //                 } else {
    //                     bankroll_values[bankroll] += 1
    //                     names[bankroll].innerHTML = makeid(data[bankroll + 1][1].length);
    //                 }
    //             } else {
    //                 names[bankroll].innerHTML = data[bankroll+ 1][1];
    //             }
                
    //         }
    //         leaderboard.className = 'leaderboard_show';
            
        
    //     } else {
    //         bankroll_values = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    //         for(let bankroll = 23; bankroll >= 0; bankroll --) {
    //             bankrolls[bankroll].innerHTML = "0"
    //             names[bankroll].innerHTML = makeid(data[bankroll + 1][1].length);
    //         }
    //         leaderboard.className = 'leaderboard_hidden';
    //     }
    //     if (window.scrollY > window.innerHeight * 0.8) {
    //         join_text.className = 'join_show';
    //         discord_qr.className = 'join_show';
    //     } else {
    //         join_text.className = 'join_hidden';
    //         discord_qr.className = 'join_hidden';
    //     }
    // }
}


setInterval('increment()', 10);


